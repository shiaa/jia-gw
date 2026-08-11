---
name: 公司官网门户（Astro 静态站）
overview: 从零搭建公司官网门户：Astro 静态站 + TailwindCSS，承担 ICP 备案主体，当前唯一产品为 SSL 证书平台（跳转二级域名），品牌名先用占位。
todos:
  - id: init-astro
    content: 初始化 Astro 项目（最小模板）+ TailwindCSS + TypeScript 配置
    status: pending
  - id: layout
    content: 搭建全局布局（Header/Nav/Footer + SEO head）
    status: pending
  - id: config-components
    content: 编写 site.ts 站点配置 + 核心组件（Hero/产品卡片/方案卡片）
    status: pending
  - id: home
    content: 实现首页 index.astro（Hero/产品线/方案/优势/底部备案）
    status: pending
  - id: pages
    content: 实现关于我们、联系我们、SSL产品页
    status: pending
  - id: verify
    content: 本地验证：dev 渲染检查 + build 构建通过
    status: pending
isProject: false
---

# 公司官网门户（Astro 静态站）

## 背景与决策
- 公司主体已有但业务未定，主域名 example.com 做品牌官网门户，承担 ICP 备案主体，未来作为各产品线（SSL证书等）的入口。
- 技术栈：Astro（静态站，零服务端依赖、加载快、SEO 好、后续内容/知识库可渐进扩展）+ TypeScript + TailwindCSS。
- 品牌名未定，用占位名"某网络科技"（如：维安科技 / 承信云网等，最终由用户确认后替换）。
- 工作区 e:\code\jia-gw 当前为空，从零搭建。Node v24.15.0 / npm 11.12.1 已确认可用。

## 项目结构
```text
e:\code\jia-gw
├── src/
│   ├── layouts/          # 全局布局（Header/Footer/SEO head）
│   ├── components/       # Hero/产品线卡片/方案卡片等
│   ├── pages/            # 路由页（Astro 文件路由）
│   │   ├── index.astro        # 首页
│   │   ├── about.astro        # 关于我们
│   │   ├── contact.astro      # 联系我们
│   │   └── products/          # 产品线入口页
│   │       └── ssl.astro      # SSL证书产品页
│   ├── data/
│   │   └── site.ts       # 站点配置（公司名/域名/备案号/联系方式集中管理）
│   └── styles/
├── public/
│   ├── favicon.svg
│   └── robots.txt
├── astro.config.mjs
├── tsconfig.json
└── package.json
```

## 页面内容规划

### 首页 index.astro（核心）
- Hero：公司定位一句话 + 产品线入口 CTA（当前唯一产品：SSL证书 → 跳转 ssl.example.com）
- 产品线区：卡片展示，SSL 证书平台为主卡片（跳二级域名），预留未来产品位
- 解决方案区：按行业分（电商/金融/教育/政企），占位文案
- 为什么选择我们：快速签发/专业服务/7x24
- 底部：ICP 备案号占位 + 联系方式

### 关于我们 about.astro
- 公司介绍（占位）、资质、发展历程占位框架

### 联系我们 contact.astro
- 联系方式、表单占位（静态站用 mailto 或第三方表单，暂不接后端）

### 产品页 products/ssl.astro
- SSL 证书平台介绍 + 购买入口（跳转 ssl.example.com）
- 证书类型科普（DV/OV/EV 对比表），作为 SEO 内容起始

## 关键实现点
- 站点配置集中在 `src/data/site.ts`，公司名/域名/备案号/联系方式改一处全局生效，方便备案审核时替换占位信息
- 使用 `astro:head` 统一管理 title/description/OG 标签，SEO 基础
- 静态部署：构建产物 dist/，可直接丢到 Nginx/静态托管
- 二级域名 ssl.example.com 暂未部署，产品卡片按钮先放占位链接，配置文件中一处修改

## 实施步骤
1. 初始化 Astro 项目（`npm create astro` 最小模板）并配置 TailwindCSS、TypeScript
2. 搭建全局布局（Header/Nav/Footer + SEO head）
3. 编写 `src/data/site.ts` 站点配置 + 页面组件
4. 实现首页、关于、联系、SSL产品页
5. 本地 `npm run dev` 验证各页渲染、响应式、无报错
6. 构建检查 `npm run build` 通过

## 待用户确认
- 占位品牌名是否接受（后续一键替换）
- 是否需要部署到服务器（当前先本地可运行）