## 项目简介

JOOX Web H5 项目， 基于 nextjs 实现的 SSR。

## 框架图

## 目录结构

- pages

  主要存放\_document.js, \_app.js, \_error.js 和每个页面的入口文件

- components

  存放公共非业务组件 common， 和各个业务组件(eg: title 文件夹： index.js, index.scss)

- static

  - css 公共 css 文件，eg：使用到的库的 css 文件

  - sass 包括\_mixin, \_var, reset, style, common 等文件

  - fonts 包括 iconfont 和各个语言的字体库

  - images 图片

  - locales 多语言文件

- utils

  - getL5.js 封装 L5 函数

  - report.js 封装上报函数

  - request.js 封装请求函数

  - common.js 封装其他公共函数

- config

  - i18n.js i18n 实例的基本配置

  - L5.js 不同接口的 L5 ID

  - router.js 页面路由配置（如果需要的话）

  - constants 其他常量的配置

- tools

  存放工具和脚本

- envs

  包括.env-dev, .env-test, .env-live 三个环境的配置文件

- server.js

- next.config.js

  扩展的 webpack 配置文件

- .env

  存放环境变量

- .babelrc

- .eslintrc.json

- .editorconfig

## 开发环境搭建

## 部署
