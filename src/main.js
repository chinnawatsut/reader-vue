import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import BootstrapVue from 'bootstrap-vue'
import axios from "axios"
import VueAxios from 'vue-axios'
import Vuelidate from 'vuelidate'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import DateFilters from './filters/dateFilters'
import localStorage from './services/localStorage';
Vue.filter('year', DateFilters.year)

Vue.config.productionTip = false;

Vue.use(BootstrapVue)
Vue.use(VueAxios, axios)
Vue.use(Vuelidate)

new Vue({
  router,
  store,
  render: h => h(App),
  mounted() {
    const token = localStorage.getToken()
    if (token) {
      this.$store.commit('SET_TOKEN', token)
    }
  },
}).$mount("#app");
