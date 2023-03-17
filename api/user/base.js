export default {
    register(data = {})
    {
        //注册接口
        //api/user/base/register
        return useHttp({
            url:'/user/base/register',
            params:data
        })
    },
    login(data = {})
    {
        //登录接口
        return useHttp({
            url:'/user/base/login',
            params:data
        })
    },
    profile(data = {}) 
    {
        //更改用户资料接口
        return UPLOAD({
            url:'/user/base/profile',
            params:data
        })
    }
}