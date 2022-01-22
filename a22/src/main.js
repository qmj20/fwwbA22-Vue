import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/jquery.min.js'
import './assets/css/app.272005c6.css'
import './assets/css/chunk-e4c39566.6876dbe4.css'
import './assets/css/bootstrap.min.css'
import './assets/css/style.css'
import VueResource from 'vue-resource'
import axios from 'axios';
import md5 from 'js-md5';
import ElementUI from 'element-ui'
Vue.prototype.$md5 = md5;
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(ElementUI)
new Vue({
  render: h => h(App),
  router,//
}).$mount('#app')
