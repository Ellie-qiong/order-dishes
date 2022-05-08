import Vue from 'vue'
import Router from 'vue-router'
import layOut from '../layout/index.vue'
import config from './config'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/login/index.vue')
    },
    {
      path: '/home',
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
        },
        {
          path: '/userManage',
          name: 'userManage',
          meta: {
            title: '用户管理'
          },
          component: () => import('../views/userManage/index.vue'),
          redirect: '/userManage/userInfo',
          children: [
            {
              path: 'userInfo',
              name: 'userInfo',
              meta: {
                title: '用户信息'
              },
              component: () => import('../views/userManage/userInfo/index.vue')
            },
            {
              path: 'userUp',
              name: 'userUp',
              meta: {
                title: '用户注册'
              },
              component: () => import('../views/userManage/userUp/index.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/menu',
      name: 'menu',
      component: () => import('../views/menu/index.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('../views/404.vue')
    }
  ]
})
config(router)

export default router
