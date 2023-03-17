import * as vant from 'vant'

export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            vant: () => vant
        }
    }
})