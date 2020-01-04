import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import axios from "axios"
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import BaseInput from './components/base/BaseInput'

Vue.config.productionTip = false;


Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)

// Vue.component('BaseInput', BaseInput)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
