import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Buefy from 'buefy'
import vueHeadful from 'vue-headful'

Vue.use(Buefy)
Vue.component('vue-headful', vueHeadful)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
