import Vue from 'vue'
import App from './App.vue'
<<<<<<< Updated upstream

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
=======
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
>>>>>>> Stashed changes
}).$mount('#app')
