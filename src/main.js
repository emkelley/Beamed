import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Buefy from 'buefy'
import vueHeadful from 'vue-headful'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faRocket } from '@fortawesome/pro-duotone-svg-icons'
library.add(faRocket)
Vue.component('vue-fontawesome', FontAwesomeIcon)
Vue.use(Buefy, {
  defaultIconComponent: 'vue-fontawesome',
  defaultIconPack: 'fad'
})
Vue.component('vue-headful', vueHeadful)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
