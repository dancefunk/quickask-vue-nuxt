import { showNotify } from 'vant';

//全局中间件
export default defineNuxtRouteMiddleware((to, from) => {
  //如果 meta自定义属性 中有 NoLogin 并且为 true 就说明不需要登录就可以访问 否则就需要登录
  // if(!to.meta.NoLogin)
  // {
  //   //判断是否有登录信息
  //   let AuthLogin = useCookie('AuthLogin')

  //   if(!AuthLogin.value)
  //   {
  //     showNotify({
  //       type: 'danger',
  //       message: '请先登录',
  //       duration: 1000,
  //       onClose: () => 
  //       {
  //         navigateTo('/user/base/login')
  //       }
  //     });
  //   }
  // }
})