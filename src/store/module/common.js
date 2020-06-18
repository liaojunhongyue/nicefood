const state = {
  add: {
    showadd: false,
    addrotate: ''
  }
}

const getters = {
  showaddGetters: (state) => state.add.showadd,
  addrotateGetters: (state) => state.add.addrotate
}

const mutations = {
  setShowadd(state, value) {
    state.add.showadd = value
  },
  setAddrotate(state, value) {
    state.add.addrotate = value
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
