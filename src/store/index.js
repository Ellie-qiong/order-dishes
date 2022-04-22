import Vue from 'vue'
import vueX from 'vuex'

Vue.use(vueX)

const store = new vueX.Store({
  state: {
    userName: '',
    password: '',
    role: ''
  },
  mutations: {
    // 保存用户信息
    SET_USER (state, payload) {
      state.userName = payload.userName
      state.password = payload.password
      state.role = payload.role
      localStorage.setItem('state', JSON.stringify(state))
    }
  },
  getters: {

  }
})
export default store
