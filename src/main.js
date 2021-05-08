import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 判断是否为mock模式
require('./mock/index.js')



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
