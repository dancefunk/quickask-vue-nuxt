// 引入每个目录下面的index.js文件
const ModulesFile = import.meta.globEager("./*/index.js")

//接口集合
var ApiList = {}

//提取对象下的值 同步
Object.values(ModulesFile).map(async mod => {
    if(mod.default)
    {
      //合并对象 循环多次合并
      ApiList = Object.assign(ApiList, mod.default)
    }
})

//导出接口集合
export default ApiList