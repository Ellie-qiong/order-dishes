import Vue from 'vue'
import Router from 'vue-router'
import layOut from '../layout/index.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: layOut,
      children: [
        {
          path: '/forHere',
          name: 'forHere',
          meta: {
            title: '堂食'
          },
          component: () => import('../views/forHere/index.vue')
        },
        {
          path: '/takeOut',
          name: 'takeOut',
          meta: {
            title: '打包'
          },
          component: () => import('../views/takeOut/index.vue')
        },
        {
          path: '/orderRecord',
          name: 'orderRecord',
          meta: {
            title: '订单记录'
          },
          component: () => import('../views/orderRecord/index.vue')
        },
        {
          path: '/incomeAnalysis',
          name: 'incomeAnalysis',
          meta: {
            title: '收入分析'
          },
          component: () => import('../views/incomeAnalysis/index.vue')
        }
      ]
    }
  ]
})
