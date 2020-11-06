import Vue from 'vue'
import App from './App.vue'
import htUI from './package/'

Vue.use(htUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
