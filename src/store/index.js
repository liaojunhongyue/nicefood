import Vue from 'vue'
import Vuex from 'vuex'

import common from './module/common'
import user from './module/user'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    common,
    user
  },
  strict: debug
})
