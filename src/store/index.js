import Vue from 'vue'
import vueX from 'vuex'

Vue.use(vueX)

const store = new vueX.Store({
  state: {
    userId: '',
    userPassword: ''
  },
  mutations: {
    // 保存用户信息
    SET_USER (state, payload) {
      state.userId = payload.userId
      state.userPassword = payload.userPassword
      localStorage.setItem('state', JSON.stringify(state))
    }
  },
  getters: {

  }
})
export default store
