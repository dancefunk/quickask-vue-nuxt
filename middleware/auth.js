import { showNotify } from 'vant';

//局部中间件，仅在调用的页面有效
export default defineNuxtRouteMiddleware((to, from) => {
  //如果有 NoLogin 并且为 true 就说明不需要登录就可以访问 否则就需要登录
  if(!to.meta.NoLogin)
  {
    //判断是否有登录信息
    let AuthLogin = useCookie('AuthLogin')

    if(!AuthLogin.value)
    {
      showNotify({
        type: 'danger',
        message: '请先登录',
        duration: 1000,
        onClose: () => 
        {
          navigateTo('/user/base/login')
        }
      });
    }
  }
})