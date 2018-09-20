import Vue from 'vue'
import VeeValidate from 'vee-validate'
import App from './App.vue'
import store from './store/store'
import router from './router'

Vue.config.productionTip = false

Vue.filter('countChars', value => {
  const numberOfChars = value.split(' ').reduce((acc, item) => {
    return acc + item.split('').length
  }, 0)
  return `${value} - ${numberOfChars}`
})

Vue.use(VeeValidate)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
