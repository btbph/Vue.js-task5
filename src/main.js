import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import store from './store'
import router from './router'

Vue.config.productionTip = false

Vue.use(VeeValidate)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
