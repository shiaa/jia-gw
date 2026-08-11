---
name: 公司官网门户完整规划（assl.site + EdgeOne Makers 部署）
overview: 在官网门户完整规划基础上，确定部署到腾讯云 EdgeOne Makers（Git 集成自动部署），并明确"先海外区域上线、备案后切大陆"的加速区域与备案衔接策略。
todos:
  - id: init-astro
    content: 初始化 Astro 项目（最小模板）+ TailwindCSS + TypeScript
    status: in_progress
  - id: layout-config
    content: 搭建 BaseLayout（Header/Nav/Footer + SEO head）与 site.ts 站点配置
    status: pending
  - id: components
    content: 编写核心组件（Hero/ProductCard/SolutionCard/CTA）
    status: pending
  - id: home
    content: 实现首页（Hero/产品线/方案/优势/底部备案）
    status: pending
  - id: pages
    content: 实现关于我们、联系我们、SSL 产品页、合规页
    status: pending
  - id: verify
    content: 本地验证：dev 各页渲染 + build 构建通过
    status: pending
  - id: deploy-guide
    content: 输出部署清单（Git 推送 + Makers 项目创建 + 域名绑定）
    status: pending
isProject: false
---

# 公司官网门户完整规划（assl.site + EdgeOne Makers 部署）

## 背景与决策
- 主域名 `assl.site`（`www.assl.site` 与 `assl.site` 同站，www 做 301 跳转到裸域或反之一致化）。
- 品牌定位：泛科技/网络安全服务公司门户，SSL 证书平台是第一个产品线，未来可扩展其他产品线。
- 品牌名未定：占位用 "ASSL"（直接取自域名，过渡期用），公司中文名确定后改 `src/data/site.ts` 一处即可全站生效。
- 技术栈：Astro 静态站 + TypeScript + TailwindCSS。Node v24.15.0 / npm 11.12.1 已确认。
- 部署平台：腾讯云 EdgeOne Makers（边缘静态托管平台，支持 Git 集成自动部署、自定义域名、全球边缘加速）。
- 备案：`.site` 属可备案新顶级域，多数省份支持。加速区域与备案策略：**先选海外/香港区域上线（免备案），备案通过后切换大陆区域**。

## 域名与备案架构

```mermaid
graph TD
 A["assl.site（主域名·ICP备案主体）"] --> W["www.assl.site → 301 跳转主站"]
 A --> B["官网门户（静态站·EdgeOne Makers）"]
 A --> S["ssl.assl.site（SSL证书平台·二期）"]
 B --> B1["产品线入口 → 跳转二级域名"]
 B --> B2["SEO 内容（行业方案/知识库）"]
 B --> B3["合规页（隐私/条款）"]
```

- 备案主体落在 `assl.site`，证书平台 `ssl.assl.site` 随主域名备案后直接启用。
- Makers 加速区域：海外区域先上线（不要求备案），备案通过后切换大陆区域。

## 项目结构
```text
e:\code\jia-gw
├── src/
│   ├── layouts/BaseLayout.astro   # 全局布局：Header/Nav/Footer + SEO head
│   ├── components/                # Hero、ProductCard、SolutionCard、CTASection 等
│   ├── pages/
│   │   ├── index.astro            # 首页（核心）
│   │   ├── about.astro            # 关于我们
│   │   ├── contact.astro          # 联系我们
│   │   ├── products/
│   │   │   └── ssl.astro          # SSL 证书产品线介绍页
│   │   └── legal/
│   │       ├── privacy.astro      # 隐私政策（上线合规必需）
│   │       └── terms.astro        # 服务条款（占位框架）
│   ├── data/
│   │   └── site.ts                # 站点配置单一来源：公司名/域名/备案号/联系方式/产品线
│   └── styles/global.css
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs               # 输出静态 dist/，trailingSlash 规范化
├── tsconfig.json
└── package.json
```

## 页面与内容规划

### 首页 index.astro
- Hero：公司定位一句话（占位："面向企业的可信网络安全与基础服务提供商"）+ 主 CTA（进入 SSL 证书平台）
- 产品线区：SSL 证书平台主卡片（跳 `ssl.assl.site`，未部署前放占位外链），2-3 个"即将推出"占位卡片
- 解决方案区：按行业（电商/金融/教育/政企）占位文案
- 为什么选择我们：快速签发 / 专业支持 / 稳定可靠
- 底部：ICP 备案号占位（`京ICP备XXXXXXXX号` 格式）+ 联系方式

### 关于我们 about.astro
- 公司介绍（占位）、发展历程时间线框架、资质栏（营业执照等，备案后补充）

### 联系我们 contact.astro
- 电话/邮箱/地址占位 + 表单占位（静态站用 mailto 提交，不接后端）

### 产品线页 products/ssl.astro
- SSL 证书平台完整介绍：DV/OV/EV 对比表、签发流程、为什么选我们
- 购买 CTA 跳 `ssl.assl.site`
- 该页同时承担 SEO 内容（证书科普）起点

### 合规页 legal/privacy.astro、legal/terms.astro
- 隐私政策 + 服务条款，占位框架（上线合规必需，备案审核也可能查看）

## 部署与更新（EdgeOne Makers）

### 部署方式
- **推荐：Git 集成**。项目推送到 GitHub/Gitee 仓库，Makers 创建项目时选"导入 Git 仓库"，配置构建命令 `npm run build`、构建产物目录 `dist/`。
- 备选：直接上传 `dist/` 产物（注意：上传方式无法再切换 Git 集成，官方文档明确）。
- 自定义域名：在 Makers 域名管理添加 `assl.site`（+ `www.assl.site`），按引导做 DNS 解析（CNAME 到 EdgeOne）。

### 更新流程
```mermaid
graph LR
 A["本地改代码"] --> B["git push 到主干分支"]
 B --> C["Makers 自动构建部署"]
 C --> D["线上生效"]
```
- 每次 push 主干分支自动部署，无需手动操作。
- 也支持手动"新建部署"上传指定版本、切换生产/预览环境。

### 加速区域与备案衔接
- 创建项目时选海外/香港加速区域：可立即绑定自定义域名上线，不要求备案。
- 备案通过后：在 Makers 将加速区域切换为大陆，网站正式面向大陆访问合规。

## 实施步骤
1. 初始化 Astro 项目（最小模板）+ TailwindCSS + TypeScript
2. 搭建 BaseLayout（Header/Nav/Footer + SEO head）与 site.ts 配置
3. 编写核心组件（Hero/ProductCard/SolutionCard/CTA）
4. 实现首页（Hero/产品线/方案/优势/底部备案）
5. 实现关于我们、联系我们、SSL 产品页、合规页
6. 本地验证：`npm run dev` 各页渲染、响应式、无报错；`npm run build` 通过
7. 交付部署清单：Git 仓库初始化推送、Makers 项目创建（Git 集成 + 构建配置）、自定义域名绑定

## 风险与待确认
- `.site` 备案：多数省份可行，个别省份管局对境外注册商域名审核可能有差异，以接入商备案系统实际支持为准（不阻塞开发）
- 证书平台 `ssl.assl.site` 属二期，本次仅做官网入口页与占位外链
- 品牌中文名确认后替换 site.ts 一处即可
- 需用户提供：Git 托管选择（GitHub / Gitee）、EdgeOne Makers 账号（腾讯云账号可开通）