import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import axios from "axios"
import VueAxios from 'vue-axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DateFilters from './filters/dateFilters'
Vue.filter('year', DateFilters.year)

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
