<template>
  <h1>API接口请求</h1>
</template>

<script setup>
  var res = await useAPI().AddrIndex()
  console.log(res)
</script>