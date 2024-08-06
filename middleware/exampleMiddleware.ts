// 定义一个路由中间件
export default defineNuxtRouteMiddleware((to, from) => {
  // 根据目标路由的参数 id 的值
  // 决定页面导航的行为
  if (to.params.id === '1') {
    // 如果该参数值为 1
    // 则阻止页面导航
    return abortNavigation()
  }
  // 如果该参数值不为 1
  // 则导航到首页
  return navigateTo('/')
})
