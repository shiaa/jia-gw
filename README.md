# jia-gw — ASSL 官网门户

基于 **Astro 静态站 + TailwindCSS v4 + TypeScript** 构建的公司官网门户，作为 ICP 备案主体与产品线入口。当前唯一产品为 **SSL 证书平台**（二级域名 `ssl.assl.site`，二期上线）。

- 主域名：`assl.site`
- 备案号：`粤ICP备2026111683号`
- 部署目标：腾讯云 EdgeOne Makers（Git 集成自动部署）

## 功能页面

| 路由 | 页面 |
|------|------|
| `/` | 首页（Hero / 产品线 / 行业方案 / 优势 / CTA） |
| `/about` | 关于我们 |
| `/contact` | 联系我们（mailto 表单） |
| `/products/ssl` | SSL 证书产品页（DV/OV/EV 对比表） |
| `/legal/privacy` | 隐私政策 |
| `/legal/terms` | 服务条款 |

在线客服：右下角悬浮咨询按钮，可通过第三方平台嵌入代码启用实时聊天，未配置时回退为邮件/电话咨询。

## 技术栈

- **Astro 7**（静态站，零服务端依赖、SEO 友好）
- **Tailwind CSS v4**（`@tailwindcss/vite` 插件，品牌色在 `@theme` 中定义）
- **@astrojs/sitemap**（自动生成站点地图）
- **TypeScript**（strict）

## 项目结构

```text
src/
├── data/site.ts            # 站点配置单一来源（品牌/域名/备案号/联系方式/产品线）
├── layouts/BaseLayout.astro# 全局布局（SEO head + Header + Footer + 在线客服）
├── components/             # Header / Footer / Hero / ProductCard / SolutionCard / CTA / OnlineChat
├── pages/                  # 路由页面
└── styles/global.css       # Tailwind 主题（品牌色、字体）
```

> 品牌名 / 域名 / 备案号 / 联系方式集中在 `src/data/site.ts`，改一处全站生效。

## 本地开发

```sh
npm install
npm run dev        # 本地预览 http://localhost:4321
npm run build      # 构建静态产物到 dist/
npm run preview    # 本地预览构建产物
```

后台模式开发（推荐）：

```sh
astro dev --background
astro dev stop     # 停止后台服务
astro dev status   # 查看状态
astro dev logs     # 查看日志
```

## 部署

项目已同时适配**阿里云 ESA** 和**腾讯云 EdgeOne** 两个平台，各自识别自己的配置文件，互不影响。

| 平台 | 配置文件 | 关键配置 |
|------|----------|----------|
| 阿里云 ESA | `esa.jsonc` | `assets.directory: ./dist` |
| 腾讯云 EdgeOne | `edgeone.json` | `outputDirectory: ./dist` |

### 通用步骤
1. 推送到 GitHub 主干分支
2. 在对应平台创建项目，选择 Git 集成导入本仓库
3. 平台自动读取配置文件并构建部署（`npm run build` → `dist/`）
4. 绑定自定义域名 `assl.site`（+ `www.assl.site`）
5. 加速区域：海外先上线（免备案），备案通过后切换大陆区域

> 两个平台均可独立部署同一份代码，适合做多平台容灾或对比访问速度。

## 待确认事项

- 品牌中文名（当前占位 "ASSL"，确认后改 `src/data/site.ts`）
- 第三方客服平台接入（可选，填 `src/components/OnlineChat.astro` 的 `chatScript`）
- SSL 证书平台二级域名 `ssl.assl.site` 二期上线
