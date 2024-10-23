
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

Vue.use(IconsPlugin)

import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init();
import axios from './axios-config.js';

Vue.prototype.$axios = axios;
Vue.filter('upcase' ,function(val){
  return val.toUpperCase();

})
import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router'; 
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
