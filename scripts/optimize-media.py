"""Create compact self-hosted media without changing display proportions.

Requires Python/Pillow and ffmpeg. Run on a clean checkout or keep a backup.
python scripts/optimize-media.py --ffmpeg /path/to/ffmpeg --backup /outside/repo
"""
from pathlib import Path
from concurrent.futures import ThreadPoolExecutor
import argparse
import json
import re
import shutil
import subprocess
import tempfile
from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent


def run(args):
    proc = subprocess.run([str(x) for x in args], capture_output=True, text=True,
                          encoding='utf-8', errors='replace')
    if proc.returncode:
        raise RuntimeError(proc.stderr[-2200:])
    return proc


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--ffmpeg', default=shutil.which('ffmpeg'))
    parser.add_argument('--backup', type=Path, required=True)
    parser.add_argument('--jobs', type=int, default=2)
    args = parser.parse_args()
    if not args.ffmpeg:
        parser.error('ffmpeg not found; provide --ffmpeg')
    backup = args.backup.resolve()
    if backup == ROOT or ROOT in backup.parents:
        parser.error('Keep the backup outside the published repository')
    backup.mkdir(parents=True, exist_ok=True)

    def preserve(src):
        dest = backup / src.relative_to(ROOT)
        if not dest.exists():
            dest.parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(src, dest)
        return dest

    def video(src):
        original = preserve(src)
        before = src.stat().st_size
        temp = src.with_name(src.stem + '.encoding.mp4')
        filters = ("scale=w='trunc(iw*sar/2)*2':h=ih,setsar=1,"
                   "scale=w='min(720,iw)':h='min(540,ih)':"
                   "force_original_aspect_ratio=decrease:force_divisible_by=2,fps=18")
        run([args.ffmpeg, '-hide_banner', '-loglevel', 'error', '-y', '-i', original,
             '-map', '0:v:0', '-an', '-sn', '-dn', '-vf', filters,
             '-c:v', 'libx264', '-preset', 'medium', '-crf', '31',
             '-maxrate', '420k', '-bufsize', '840k', '-pix_fmt', 'yuv420p',
             '-g', '36', '-threads', '2', '-map_metadata', '-1',
             '-movflags', '+faststart', temp])
        # Never replace an already smaller file with a larger re-encode.
        if temp.stat().st_size < before:
            temp.replace(src)
        else:
            temp.unlink()
        result = {'file': src.relative_to(ROOT).as_posix(),
                  'before': before, 'after': src.stat().st_size}
        print(json.dumps(result), flush=True)
        return result

    videos = sorted(p for p in (ROOT/'assets').rglob('*.mp4') if '.preview.' not in p.name)
    with ThreadPoolExecutor(max_workers=args.jobs) as pool:
        stats = list(pool.map(video, videos))

    for src in list((ROOT/'assets').rglob('*.webp')):
        if '.thumb-' in src.name:
            continue
        original = preserve(src)
        im = ImageOps.exif_transpose(Image.open(original)).convert('RGB')
        im.thumbnail((1600, 1600), Image.Resampling.LANCZOS)
        before = src.stat().st_size
        with tempfile.TemporaryDirectory() as folder:
            dest = Path(folder)/'image.webp'
            im.save(dest, 'WEBP', quality=78, method=6)
            if dest.stat().st_size < before:
                shutil.copyfile(dest, src)
        stats.append({'file': src.relative_to(ROOT).as_posix(),
                      'before': before, 'after': src.stat().st_size})
    # Keep intrinsic dimensions and thumbnail sizes in sync after resizing.
    manifest_path = ROOT/'content/media.mjs'
    manifest = json.loads(manifest_path.read_text(encoding='utf-8').split('=', 1)[1].strip().removesuffix(';'))
    for src in sorted((ROOT/'assets').rglob('*.webp')):
        if '.thumb-' in src.name:
            continue
        im = Image.open(src)
        rel = src.relative_to(ROOT).as_posix()
        item = {'width': im.width, 'height': im.height}
        variants = []
        if 'poster' not in src.name:
            for width in [480, 960]:
                if width >= im.width:
                    continue
                size = (width, round(im.height*width/im.width))
                dest = src.with_name(src.stem + f'.thumb-{width}.webp')
                im.resize(size, Image.Resampling.LANCZOS).save(dest, 'WEBP', quality=76, method=6)
                variant = {'src': dest.relative_to(ROOT).as_posix(), 'width': size[0], 'height': size[1]}
                variants.append(variant)
                manifest['images'][variant['src']] = {'width': size[0], 'height': size[1]}
        if variants:
            item['variants'] = variants
        manifest['images'][rel] = item
    for src in sorted((ROOT/'assets').rglob('*.mp4')):
        probe = subprocess.run([str(args.ffmpeg), '-hide_banner', '-i', str(src)],
                               capture_output=True, text=True, encoding='utf-8', errors='replace').stderr
        duration = re.search(r'Duration: (\d+):(\d+):([\d.]+)', probe)
        dims = re.search(r'Video:.*? (\d{2,5})x(\d{2,5})', probe)
        rel = src.relative_to(ROOT).as_posix()
        item = manifest['videos'].setdefault(rel, {})
        item.update(width=int(dims[1]), height=int(dims[2]), bytes=src.stat().st_size,
                    duration=round(int(duration[1])*3600+int(duration[2])*60+float(duration[3]), 3))
    manifest_path.write_text('// Generated intrinsic dimensions and compact previews.\nexport const media = '
                             +json.dumps(manifest, ensure_ascii=False, indent=2)+';\n', encoding='utf-8')
    report = {'files': stats, 'before': sum(s['before'] for s in stats),
              'after': sum(s['after'] for s in stats)}
    (backup/'compression-report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    print(json.dumps({k:v for k,v in report.items() if k != 'files'}))


if __name__ == '__main__':
    main()
