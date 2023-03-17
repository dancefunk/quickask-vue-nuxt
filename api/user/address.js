//封装接口
export default {
    AddrIndex(data = {})
    {
        //收货地址列表接口
        return useHttp({
            url:'/user/address/index',
            params:data
        })
    },
    AddrAdd(data = {})
    {
        //添加收货地址接口
        return useHttp({
            url:'/user/address/add',
            params:data
        })
    },
    AddrEdit(data = {})
    {
        //编辑收货地址接口
        return useHttp({
            url:'/user/address/edit',
            params:data
        })
    },
    AddrDel(data = {})
    {
        //删除收货地址接口
        return useHttp({
            url:'/user/address/del',
            params:data
        })
    },
}