<template>
  <h1>VantUI</h1>
  <van-button type="success">VantUI 按钮元素</van-button>
</template>

<script setup>
  //plugin挂载后的 全局调用方式
  useNuxtApp().$vant().showNotify({ type: 'success', message: '通知内容' });
</script>