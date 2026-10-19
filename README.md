# 郭文栋个人学术主页

当前目录就是 GitHub Pages 的发布根目录。`index.html`、`assets/`、`papers/`、`projects/` 可以直接托管；配置和构建脚本一并保存在此仓库，后续修改不用再切换到旧目录。

目标网站：https://deavn2236.github.io/deavn.github.io/

## 本地查看与更新

需要 Node.js 18 或更新版本，没有第三方 npm 依赖，无需 `npm install`。

```powershell
cd 'D:\个人资料\简历\academic-site-github-pages'
npm run check
npm run build
npm run dev
```

访问 `http://127.0.0.1:4173/`。预览不自动刷新，修改配置后重新构建并刷新浏览器；按 `Ctrl+C` 停止预览。

`npm run build` 直接更新当前目录的页面、样式和脚本，保留 Git 仓库与素材。不要将源代码文件单独移动到发布目录外。

## 提交到现有仓库

修改完成后，在当前目录执行：

```powershell
git status
git add .
git commit -m "Update academic homepage content and demonstrations"
git push origin main
```

GitHub Pages 使用 `main / (root)` 发布方式。推送到 `main` 后由 GitHub Pages 更新网站，部署进度可在仓库 Actions 页面查看。

## 内容维护

| 文件 | 用途 |
| --- | --- |
| `content/site.mjs` | 个人资料、教育信息配置、研究方向、爱好、学生工作和荣誉 |
| `content/papers.mjs` | 6篇论文的标题、作者、期刊会议、等级、摘要和四部分详情 |
| `content/projects.mjs` | 15个项目的顺序、研发/参与分组、名称、时间、单位、角色、分节文字和媒体 |
| `content/media.mjs` | 图片尺寸、响应式缩略图和首页短预览索引 |
| `scripts/build.mjs` | 页面生成器，首页教育文字位于研究方向上方 |
| `scripts/check.mjs` | 内容与资源完整性检查 |
| `scripts/optimize-media.py` | 可选媒体压缩工具，需要 Pillow 与 FFmpeg；备份必须放在仓库外 |
| `src/styles.css` | 白底学术风格、双列项目卡片与手机适配 |
| `src/client.js` | 中英切换、项目筛选、延迟加载与视频控制 |
| `assets/` | 压缩图片、无音轨视频、可公开论文PDF |

所有正文使用 `{ zh: '中文', en: 'English' }`，新会话默认中文，当前标签页的语言选择会延续到详情页。

首页显示博士在读身份，教育经历保持实际研究生阶段起止信息；业余爱好为听歌和打羽毛球。学生工作结合述职报告与本人补充更新，荣誉从硕博奖项表中选取代表性条目并合并年份。各板块使用本地双色SVG图标，不引入外部图标库。

替换图片后，如尺寸变化，可用安装了 Pillow 的 Python 运行 `python scripts/refresh-images.py` 更新尺寸索引。此步骤仅用于更换素材，正常构建无需 Python。

## 媒体与内容

- 图像保留原始比例，提供480/960像素缩略图与原图；主设备图缩小显示，独立传感器图置于旁边。点击图片可查看原图。
- 首页14段短预览均不超过10秒，合计约1.7 MiB；详情页使用完整或按内容裁剪的演示。视口外不下载视频。
- 视频均为 H.264/yuv420p、无音轨，使用 faststart；可见时静音自动循环播放，默认1.5倍速，离开视口或进入后台暂停。访问者仍可手动暂停。
- 论文详情包含任务说明、主要方法和贡献、主要方法、实验结果。表格直接采用论文或原材料的完整截图，图片可以点击查看大图；已移除重复的网页表格与指标卡片。
- Kangaroo 首页展示大厅实机场景；室内片段从原片49.7秒、室外片段从145.7秒开始，已跳过分场景的说明动画。方法说明、母车走廊运输与轮椅交接视频已删除；论文中的 IF-Planner 和设备图缩小展示。
- 项目分为“主要研发”和“参与项目”；三球一体、棋子视觉抓取、轮腿、柔性物料抓取与果蔬干产线位于参与项目。ReCoNav仅保留在论文区，标题使用英文。
- 新增三球一体运动机器人，视频按乒乓球、羽毛球和网球拆分。MV-BMR仅为相关文献，正文明确区分文献实验与三球演示。
- SCTNav 的方法、三类实机场景和基线失败案例均已自托管，网页不依赖原站视频服务才能播放。
- 图书馆项目以应用动画作为详情中的首个展示，补充书脊识别图、96%图书识别率与89%任务成功率。
- 捡球机器人围绕羽毛球关键部位检测、抓握姿态与抖动分离组织，实机抓取准确率为97.83%（单球）和95.1%（多球）。棋子抓取与服装遥操作按实际画面分别归类。
- 仅 UWB 论文提供完整 PDF；其他论文的本地全文和全文下载入口均已移除，保留任务、方法和实验介绍。ReCoNav 展示组合导航材料与基线结果，不补造作者、年份或录用信息。

详细来源和核对结果见 `docs/CONTENT-SOURCES.md`、`docs/VALIDATION.md`。

### 可选：再次压缩素材

正常构建无需执行。已有素材已压缩，后续添加较大资源时，可用 Python/Pillow 和本机 FFmpeg 运行：

```powershell
python scripts/optimize-media.py --ffmpeg 'C:\tools\ffmpeg\bin\ffmpeg.exe' --backup 'D:\site-media-backup'
npm run check
npm run build
```

请把 FFmpeg 路径改为本机实际路径。工具保留原始比例，删除音轨，压缩视频和WebP，刷新尺寸索引与图像缩略图，并将修改前素材备份到指定的仓库外目录。
