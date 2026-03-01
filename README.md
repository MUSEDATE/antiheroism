# Antiheroism Website

极简黑白风格的母公司官网，展示 Antiheroism 品牌和产品线。

## 特性

- 🎨 极简黑白配色
- 📱 完全响应式设计
- ⚡ Next.js 14 + TypeScript
- 🎯 静态导出，可部署到任何静态托管服务
- 🚀 自动部署到 GitHub Pages

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

## 部署

### GitHub Pages（自动）

推送到 main 分支后会自动部署到 GitHub Pages。

需要在仓库设置中：
1. Settings → Pages
2. Source 选择 "GitHub Actions"

### 手动部署

```bash
npm run build
# 静态文件在 out/ 目录
```

可以部署到：
- Vercel
- Netlify
- Cloudflare Pages
- 任何静态托管服务

## 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **部署**: GitHub Pages / Vercel

## 目录结构

```
antiheroism/
├── app/
│   ├── globals.css      # 全局样式
│   ├── layout.tsx       # 根布局
│   └── page.tsx         # 首页
├── .github/
│   └── workflows/
│       └── deploy.yml   # 自动部署配置
├── public/              # 静态资源
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 内容板块

- **Hero**: 品牌名称和 slogan
- **About**: 公司介绍
- **Products**: 产品展示（atpify 等）
- **Contact**: 联系方式
- **Footer**: 版权和社交链接

## 自定义

修改 `app/page.tsx` 来更新内容。
修改 `app/globals.css` 和 `tailwind.config.js` 来调整样式。

---

© 2026 Antiheroism
