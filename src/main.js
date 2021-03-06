import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 引入mock
require('./mock/index.js')

Vue.prototype.$bus = new Vue()

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
