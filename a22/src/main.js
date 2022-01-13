import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/js/jquery.min.js'
import './assets/css/app.272005c6.css'
import './assets/css/chunk-e4c39566.6876dbe4.css'
// import axios from 'axios'
// axios.interceptors.request.use(config => {
//   config.headers.Authorization = window.sessionStorage.getItem('token')
//   return config
// })
// Vue.prototype.$http = axios
// Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,//
}).$mount('#app')
