export default (router) => {
  router.beforeEach((from, to, next) => {
    if (from.path === '/') {
      next()
    }
    let userRole = JSON.parse(localStorage.getItem('state')).role
    let userAuth = []
    if (userRole === 'commonAdmin') {
      userAuth.push('/', '/home', 'forHere', 'orderRecord')
    } else if (userRole === 'superAdmin') {
      userAuth.push('/', 'forHere', 'orderRecord', 'incomeAnalysis')
    } else {
      next('/404')
    }
    if (userAuth.includes(to.path)) {
      next()
    }
  })
}
