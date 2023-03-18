// 引入文件 目前深度为3
const level1 = import.meta.glob('./*.js', {eager: true, import: 'default'})
const level2 = import.meta.glob('./*/*.js', {eager: true, import: 'default'})
const level3 = import.meta.glob('./*/*/*.js', {eager: true, import: 'default'})
let list = Object.assign(level1, level2, level3) || {}

//store集合
let store = {}

//提取对象下的值 同步
Object.values(list).map(async (mod) => {
  if(mod().$id)
  {
    store[mod.$id] = mod
  }
})

export default store