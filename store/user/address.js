import { defineStore } from 'pinia'

export default defineStore("address", {
    state: () => {
        return {
            consignee: "Ricky",
            province: '省份',
            city: '城市',
            district: '地区',
            mobile: '手机号码'
        }
    }
})