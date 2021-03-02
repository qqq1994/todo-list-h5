# todo-list-h5

## 目录结构

```
│  .env.development // 开发环境配置
│  .env.production // 生产环境配置
│  .env.release // release正式库环境配置
│  .env.staging // stage正式库环境配置
│  .gitignore
│  babel.config.js // babel配置
│  package.json
│  vue.config.js // 配置文件
│  README.md
│
├─src
│  │  main.js // 项目入口js
│  │  permission.js // 路由权限判断
│  │  App.vue // 根组件
│  │
│  ├─assets // 资源目录，这里的资源会被wabpack构建
│  ├─api // api接口文件
│  ├─store  // 应用级数据（state）
│  ├─styles  // 样式
│  ├─components // 功能组件
│  ├─views // 视图
│  ├─mixins // 混合模块
│  ├─utils // 通用工具函数
│  └─router  // 路由配置
│
└─pubilc
   │ favicon.ico // 图标
   │ index.html // 首页入口文件
   │  
   └─static // 静态资源，不会被wabpack构建
```

## 本地运行
1. 安装前台依赖
> npm install
2. 运行前台项目
> npm run serve
3. 访问地址：http://localhost:8080