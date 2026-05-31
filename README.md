# johnnyzhang99.github.io

个人主页，基于 **Vue 3 + Vite + Tailwind CSS + daisyUI**，部署在 GitHub Pages。

## 本地开发

```bash
npm install      # 安装依赖（首次）
npm run dev      # 启动开发服务器 http://localhost:5173
npm run build    # 生产构建到 dist/（并生成 404.html 供 SPA 深链回退）
npm run preview  # 本地预览生产构建
```

## 修改内容

所有内容都在 [`src/data/`](src/data/)，改完保存即可，无需改组件：

| 文件 | 内容 |
| --- | --- |
| `profile.js` | 姓名、头像、简介、邮箱与社交链接 |
| `news.js` | 首页 News 列表 |
| `education.js` | 首页 Education 列表 |
| `awards.js` | 首页 Honors & Awards 列表 |
| `publications.js` | 论文列表（按年份自动分组、倒序） |
| `life.js` | My Life 照片（按年份分组） |

### 添加一篇 publication

1. 把缩略图放到 `public/images/publications/`。
2. 在 `src/data/publications.js` 里复制一个 `{ ... }` 对象，修改字段即可。`year` 字段决定分组。

### 添加一张照片

1. 把图片放到 `public/images/life/`。
2. 在 `src/data/life.js` 对应年份下加一条 `{ src, caption }`（新年份就加一个 `{ year, photos: [] }` 块）。

### 替换 CV

直接覆盖 `public/files/CV.pdf`。

## 部署（GitHub Pages）

推送到 `master` 分支后，[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) 会自动构建并部署。

> **一次性设置**：仓库 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**（从旧的 Jekyll/分支构建切换过来）。
