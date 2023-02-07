import App from './App'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui/index.js'

Vue.config.productionTip = false
Vue.use(uView)
App.mpType = 'app'

const app = new Vue({
    ...App
})

app.$mount()