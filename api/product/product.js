export default {
    ProductIndex(data = {})
    {
        //产品列表接口
        return useHttp({
            url:'/product/product/index',
            params:data
        })
    },
    ProductInfo(data = {})
    {
        //产品详细接口
        return useHttp({
            url:'/product/product/info',
            params:data
        })
    },
}