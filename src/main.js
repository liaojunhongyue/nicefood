// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store/index'
import 'normalize.css/normalize.css'
import 'font-awesome/css/font-awesome.min.css'

// mock
require('./mock/index')

// axios封装
import http from './utils/http'
Vue.prototype.http = http

// api
import api from './assets/api/index'
Vue.prototype.api = api

// vant
import 'vant/lib/index.less'
import { Tabbar, TabbarItem, Toast } from 'vant'
Vue.use(Tabbar).use(TabbarItem).use(Toast)
Vue.prototype.Toast = Toast

Vue.prototype.$http = axios
Vue.config.productionTip = false

// filter
import vueFilter from './utils/filter'
Object.keys(vueFilter).forEach((key) => {
  Vue.filter(key, vueFilter[key])
})

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
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
