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

GitHub Pages 继续使用原来的 `main / (root)` 发布方式。本次没有更改远程仓库、分支或 Pages 设置，也没有执行提交或推送。

## 内容维护

| 文件 | 用途 |
| --- | --- |
| `content/site.mjs` | 个人资料、教育信息配置、研究方向、爱好、学生工作和荣誉 |
| `content/papers.mjs` | 6篇论文的标题、作者、期刊会议、等级、摘要和四部分详情 |
| `content/projects.mjs` | 14个项目的顺序、名称、时间、单位、角色、分节文字和媒体 |
| `content/media.mjs` | 图片尺寸、响应式缩略图和首页短预览索引 |
| `scripts/build.mjs` | 页面生成器，首页教育文字位于研究方向上方 |
| `scripts/check.mjs` | 内容与资源完整性检查 |
| `src/styles.css` | 白底学术风格、双列项目卡片与手机适配 |
| `src/client.js` | 中英切换、项目筛选、延迟加载与视频控制 |
| `assets/` | 压缩图片、无音轨视频、可公开论文PDF |

所有正文使用 `{ zh: '中文', en: 'English' }`，新会话默认中文，当前标签页的语言选择会延续到详情页。

首页显示博士在读身份，教育经历保持实际研究生阶段起止信息；业余爱好为听歌和打羽毛球。学生工作结合述职报告与本人补充更新，荣誉从硕博奖项表中选取代表性条目并合并年份。各板块使用本地双色SVG图标，不引入外部图标库。

替换图片后，如尺寸变化，可用安装了 Pillow 的 Python 运行 `python scripts/refresh-images.py` 更新尺寸索引。此步骤仅用于更换素材，正常构建无需 Python。

## 媒体与内容

- 首页短预览约15秒，详情页使用完整或按内容裁剪的演示；图像、视频在接近或进入视口后加载。
- 视频均为 H.264/yuv420p、无音轨，使用 faststart；离开可见区域或进入后台暂停。
- 系统减少动态效果或浏览器节省流量时仅加载封面，点击后再播放。
- 论文详情包含任务说明、主要方法和贡献、主要方法、实验结果。实验表格可以在手机上横向滚动，图片可点击查看大图。
- Kangaroo 方法原片按方法、大厅/小房间、室外/窄通道分为三段；不同设备迁移位于最后，原主页演示为最后一段。
- SCTNav 的方法、三类实机场景和基线失败案例均已自托管，网页不依赖原站视频服务才能播放。
- 羽毛球对打经历与视觉抓取拓展明确区分；抓取演示及准确率不代表对打测试结果。
- 仅 UWB 论文提供完整 PDF；其他论文的本地全文和全文下载入口均已移除，保留任务、方法和实验介绍。ReCoNav 展示组合导航材料与基线结果，不补造作者、年份或录用信息。

详细来源和核对结果见 `docs/CONTENT-SOURCES.md`、`docs/VALIDATION.md`。
