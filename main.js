import Vue from 'vue'
import App from './App'
import router from '@/router'

Vue.config.productionTip = false
import cuCustom from '@/colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)
App.mpType = 'app'
App.router = router
const app = new Vue({
    ...App
})
app.$mount()

export default app
