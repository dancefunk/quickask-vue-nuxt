<template>
  <h1>自定义全局属性和方法</h1>

  {{useAppConfig().title}} <br />

  {{useAppConfig().footer()}}
</template>

<script setup>
  // 调用全局属性
  console.log(useAppConfig().title)

  //调用全局方法
  console.log(useAppConfig().footer())

  //钩子函数
  console.log(await useDemo())
</script>