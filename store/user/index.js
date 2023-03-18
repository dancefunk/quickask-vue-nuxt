import { defineStore } from 'pinia'

export default defineStore("user", {
    state: () => 
    {
        return {
            name: "Ricky",
            age: 100,
            sex: "男",
            token: "xxx"
        }
    },

    getters: {
        info: (state) => 
        {
            return `姓名：${state.name} 年龄：${state.age} 性别：${state.sex}`
        },
        hello: (state) => 
        {
            return (msg) => `${msg} ${state.name}`
        }
    },

    actions: {
        EditAge()
        {
            this.age++
        },
        EditName(str)
        {
            this.name = str
        }
    }
})