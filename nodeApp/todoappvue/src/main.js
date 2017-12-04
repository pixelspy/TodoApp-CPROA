import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueAxios from 'vue-axios'
import axios from 'axios'

import { routes } from './router/index'
Vue.use(VueRouter)
Vue.use(VueAxios, axios)

const router = new VueRouter ({
  routes,
  mode: 'history'
  // enlève le # de le router
})

new Vue({
  el: '#app',
  router,
  routes,
  template: '<App/>',
  components: { App }
})
