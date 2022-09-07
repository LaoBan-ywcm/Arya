# 项目框架

## 依赖

- node v16+

## 目录结构

```shell
.
├── README.md
├── babel.config.js
├── package.json
├── postcss.config.js
├── src
│   ├── app.tsx
│   ├── components      // 公用组件包
│   ├── containers      // 应用容器
│   ├── global.d.ts
│   ├── hooks           // 自定义react hooks
│   │   └── index.ts
│   ├── index.ts        // 入口文件
├── static              // 静态资源
├── tsconfig.json
├── webpack.common.js
├── webpack.dev.js
├── webpack.prod.js
└── yarn.lock
```

## 启动方式

```shell
// 安装依赖
yarn

// 启动
yarn start

// 构建
yarn build
```
