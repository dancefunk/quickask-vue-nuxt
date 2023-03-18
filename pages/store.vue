<template>
  <h1>pinia - 状态管理</h1>
  
  <input type="text" v-model="name" /><br />
  <input type="text" v-model="age" /><br />
  <input type="text" v-model="sex" /><br />
  <input type="text" v-model="token" /><br />

  <button type="button" @click="reset">重置state</button>
  <button type="button" @click="patch">批量修改state</button>

  <h1>getters类似于computed拥有计算的缓存属性</h1>
  <span>{{user.info}}</span>

  <h1>带参数的getters</h1>
  <span>{{user.hello('你好！')}}</span>

  <h1>actions类似于method属性，用于处理业务逻辑的</h1>
  <button type="button" @click="EditAge">修改年龄：{{age}}</button>
  <button type="button" @click="EditName">修改年龄：{{name}}</button>




</template>

<script setup>
  import {storeToRefs} from "pinia";
  
  const user = useStore().user()

  // 这种解构不能动态渲染
  // const {name, age, sex, token} = user

  //动态渲染
  const {name, age, sex, token} = storeToRefs(user)
  console.log(name.value, age.value, sex.value, token.value)

  //重置state
  let reset = () => 
  {
    user.$reset()
  }

  //修改state
  let patch = () =>
  {
    user.$patch({
      name: 'RickyFlex',
      sex: '女',
      age: 20
    })
  }

  let EditAge = () => 
  {
    user.EditAge()
  }

  let EditName = () => 
  {
    user.EditName('hello world')
  }
</script>