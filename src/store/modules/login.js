const state = {
  islogin0: false
}

const getters = {
  getloginstate: state => {
    return state.islogin
  }
}

const actions = {}

const mutations = {
  llllogin (state) {
    state.islogin0 = true
  },
  nnnlogin (state) {
    state.islogin0 = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
