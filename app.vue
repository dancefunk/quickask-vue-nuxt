<template>
  <NuxtPage />

  <!-- 加载公共组件 -->
  <!-- <CommonMenu /> -->

  <!-- 懒加载模式 -->
  <LazyCommonMenu />

  <hr />

  <h3>路由跳转</h3>
  <NuxtLink to="/user/address">去收货地址列表</NuxtLink><br />
  <NuxtLink to="/user/address/add">添加收货地址</NuxtLink><br />

  <h3>API接口请求</h3>
  <NuxtLink to="/api">接口请求的界面</NuxtLink><br />

  <h3>中间件</h3>
  <NuxtLink to="/user/base/">会员中心</NuxtLink><br />

  <h4>Cookie操作</h4>
  <NuxtLink to="/user/base/login">登录</NuxtLink><br />

  <h4>VantUI组件使用</h4>
  <NuxtLink to="/vant">Vant</NuxtLink><br />

  <h4>Nuxt中定义全局属性和方法</h4>
  <h4>Nuxt中自动加载的钩子函数</h4>
  <NuxtLink to="/global">Nuxt中定义全局属性和方法 - Nuxt中自动加载的钩子函数</NuxtLink><br />
</template>