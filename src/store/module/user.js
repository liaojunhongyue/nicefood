const state = {
  set userToken(val) {
    if (val) {
      window.sessionStorage.setItem('userToken', val)
    } else {
      window.sessionStorage.removeItem('userToken')
    }
  },
  get userToken() {
    return window.sessionStorage.getItem('userToken')
  }
}
const getters = {
  userTokenGetter: (state) => state.userToken
}
const mutations = {
  setUserToken(state, value) {
    state.userToken = value
  }
}
const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
