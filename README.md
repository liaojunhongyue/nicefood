# 运用vue-cli搭建仿照美食杰的移动端APP

> 此项目参考美食杰APP，运用Vue-cli搭建，技术栈：Vue-cli + Vue-router + Vuex + Axios

## 项目启动

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 项目包含内容介绍

项目中包含内容的大致介绍：
- 数据mock
- axios的引入及封装（拦截器、get、post）
- 移动端适配 less mixin 边框1px问题
- vant的引入、主题UI的配置、vant组件的二次封装

### 数据mock
此项目所有的数据采用mock的形式，修改`webpack.dev.conf.js`文件，将所有接口写在该文件中。
```
const express = require('express')
const app = express()
...
let apiRoutes = express.Router()
app.use('/api', apiRoutes)

...

devServer: {
  before(app) {
    app.get('/api/menuData', (req, res) => {
      res.json({
        errno: 0,
        data: menuData
      })
    }),
    ...
  }
}
```

### axios的引入及封装（拦截器、get、post）
在`src/utils/http.js`中对`axios`进行了封装，封装了请求拦截器，返回拦截器，post，get方法。

### 移动端适配 边框1px问题
1. 采用`vw vh`适配移动端。
2. 引入Css预处理器less，修改`build/utils.js`文件，全局混入less。
```
less: generateLoaders('less').concat({
  loader: 'sass-resources-loader',
  options: {
    resources: [
      path.resolve(__dirname,'./../src/assets/less/variable.less'),
      path.resolve(__dirname,'./../src/assets/less/mixin.less')
    ]
  }
}),
```
3. 采用`-webkit-min-device-pixel-ratio`和`transform`解决移动端1px边框问题。
在`src/assets/mixin.less`文件中：
```
.border-1px(@color, @radius) {
  position: relative;
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    content: '';
    width: 100%;
    height: 100%;
    border: 1px solid @color;
    border-radius: @radius;
    transform-origin: 0 0;
    overflow: hidden;
    box-sizing: border-box;
  }
  @media (-webkit-min-device-pixel-ratio: 1.5) and (-webkit-max-device-pixel-ratio: 2.49) {
    &::after {
      width: 200%;
      height: 200%;
      transform: scale(0.5);
    }
  }
  @media (-webkit-min-device-pixel-ratio: 2.5) {
    &::after {
      width: 300%;
      height: 300%;
      transform: scale(0.33333);
    }
  }
}
...
```
### vant的引入、主题UI的配置、vant组件的二次封装
1. 引入vant
采用自动按需引入组件的方式引入。
2. 配置vant的主题UI
将vant的需要修改的UI写在了`src/assets/vant.less`中，并且在`build/utils.js`中引入该文件以覆盖默认主题。
```
less: generateLoaders('less', {
  modifyVars: {
    'hack': `true; @import "${path.resolve(__dirname,'./../src/assets/less/vant.less')}";`
  }
})
```
3. vant组件的二次封装
在`src/components`对vant的部分组件进行二次封装。
