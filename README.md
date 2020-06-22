# Vue-cli实战：搭建仿照美食杰的WebApp

项目演示地址：https://liaojunhongyue.github.io/nicefood/

1. 此项目参考美食杰APP，项目中所有的接口请求的数据采用mock的方式。
2. 运用Vue-cli搭建，技术栈：Vue-cli + Vue-router + Vuex + Axios。用Vue-router做路由守卫，Vuex存储全局信息，对Axios进行二次封装，配置全局filter，并且解决移动端1px边线等问题。
3. 项目中提供了node服务的启动文件，文件中包含接口的定义以及跨域问题的解决。

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
- 数据mock（提供了express和mockjs两种方式）
- axios的引入及封装（拦截器、get、post）
- Vuex的引入
- Vue-router的引入以及路由守卫
- 全局filter的配置
- 自定义指令directive的配置
- 移动端适配 less mixin 边框1px问题
- vant的引入、主题UI的配置
- 通用组件的封装
- node启动文件`prod.server.js`

### 数据mock
项目提供两种方式进行数据mock，下面分别介绍这两种方式的实现：
步骤一：新建`data.json`文件，将mock的数据信息写在该文件中。

步骤二：mock接口：
-  方法一：用express进行数据mock：修改`webpack.dev.conf.js`文件，将所有接口写在该文件中。
    ```
    const express = require('express')
    const app = express()
    ... // 此处省略
    let apiRoutes = express.Router()
    app.use('/api', apiRoutes)

    ... // 此处省略

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
    注意：
    此处如果没有安装express会报错，需要安装express。
    该方法打包成dist文件后直接访问该文件中的`index.html`，mock的数据不显示，所以介绍下第二种mock的方法。
- 方法二：用`mockjs`进行数据mock：
    先执行`npm install mockjs --save-dev`安装`mockjs`，
    然后新建`mock/index.js`文件，将`mockjs`和`data.json`都引入进来，代码如下：
    ```
    const Mock = require('mockjs')
    const appData = require('../../data.json')

    const menuData = appData.menuData
    Mock.mock('/api/menuData', 'get', () => {
      return {
        code: 0,
        message: 'success',
        data: menuData
      }
    })

    export default Mock
    ```
    注意：
    此方法mock的数据在浏览器中无法看到请求，但是打包成dist文件夹后，访问`index.html`，mock的数据还存在。

### axios的引入及封装（拦截器、get、post）
在`src/utils/http.js`中对`axios`进行了封装，封装了请求拦截器，返回拦截器，post，get方法。

### Vuex的引入
在`src/store`引入vuex，主要存入用户的token信息。

### Vue-router的引入以及路由守卫
1. 引入vue-router，采用按需加载的方式。
```
require.ensure([], () => r(require('@/views/main/main')))
```
2. 在`src/main.js`中用路由守卫进行拦截，用户未登录时如果请求到了需要登录的页面则会跳转到登录页面。
```
// 路由守卫
router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem('userToken')) {
    next()
  } else {
    if (to.meta.requireLogin) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  }
})
```

### 全局filter的配置
配置全局filter以便在任何组件内部都可调用。
filter的方法写在`src/utils/filter.js`中，然后在`main.js`中配置：
```
// filter
import vueFilter from './utils/filter'
Object.keys(vueFilter).forEach((key) => {
  Vue.filter(key, vueFilter[key])
})
```

### 自定义指令directive的配置
提供了防抖的自定义指令，在`src/utils/common.js`里面写了通用方法，`src/directive/index.js`中将方法挂载到vue的自定义指令中，然后在`main.js`中引入，就可以用`v-`去调用自定义指令了。

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
### vant的引入、主题UI的配置
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

### 通用组件的封装
1. 通用header
2. 通用footer

### node启动文件prod.server.js
该文件用node+express，是为了解决项目打包成`dist`文件包时，请求接口的问题。该文件包括跨域问题的解决，以及接口的提供。
使用方法：在`prod.server.js`文件所在文件夹下，执行`node prod.server.js`，看到控制台打印出success说明成功。
