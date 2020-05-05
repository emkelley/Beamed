import Vue from "vue";
import App from "./App";
import Moment from "moment";
import Buefy from "buefy";
Vue.use(Buefy);

Vue.prototype.$moment = Moment;

global.browser = require("webextension-polyfill");
Vue.prototype.$browser = global.browser;

/* eslint-disable no-new */
let popup = new Vue({
  el: "#app",

  render: h => h(App)
});
