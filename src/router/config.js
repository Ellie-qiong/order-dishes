import { role } from './role'
export default (router) => {
  router.beforeEach((from, to, next) => {
    if (from.path === '/') {
      next()
    }
    let userRole = JSON.parse(localStorage.getItem('state')).role
    let userAuth = []
    if (userRole === 'commonAdmin') {
      userAuth = role.common
    } else if (userRole === 'superAdmin') {
      userAuth = role.superAdmin
    } else {
      next('/404')
    }
    if (userAuth.includes(from.path)) {
      next()
    } else {
      next('/404')
    }
  })
}
