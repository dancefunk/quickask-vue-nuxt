// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    //请求接口前缀设置
    runtimeConfig: {
        public: {
            baseURL: process.env.BASE_URL || 'http://www.api.com/api',
        },
    },
    //接口反向代理设置
    vite: {
        server: {
            proxy: {
                '/api': {
                    target: 'http://www.api.com/api',
                    changeOrigin:true,
                    prependPath: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                  }
            }
        }
    },
    //加载第三方模块
    modules: ['@vant/nuxt'],
})