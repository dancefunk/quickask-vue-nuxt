<template>
  <h1>登录界面</h1>

  <button @click="login">登录设置cookie</button>
</template>

<script setup>
  import { showNotify } from 'vant';

  //全局中间件中需要设置 meta信息 从而不需要登录
  definePageMeta({
    NoLogin: true
  })

  const router = useRouter()

  let login = () => 
  {
    var AuthLogin = useCookie('AuthLogin')
    AuthLogin.value = 'hello world'
    showNotify({
      type: 'success',
      message: '登录成功',
      duration: 1000,
      onClose: () => 
      {
        router.push('/user/base')
      }
    });
    
  }
</script>