<template>
  <h1>会员中心</h1>
  <button @click="logout">退出登录</button>
</template>

<script setup>
  import { showNotify } from 'vant';

  //调用中间件
  definePageMeta({
    middleware: ["auth"]
  })

  const router = useRouter()

  let logout = () => 
  {
    var AuthLogin = useCookie('AuthLogin')
    AuthLogin.value = null

    showNotify({
      type: 'success',
      message: '退出成功',
      duration: 1000,
      onClose: () => 
      {
        router.push('/user/base/login')
      }
    });
  }
</script>