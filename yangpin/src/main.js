// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
//加载axios包
import axios from 'axios'
Vue.prototype.$axios = axios
Vue.prototype.HOME = ''
/* eslint-disable no-new */

import store from './store/index.js'

import Vuex from 'vuex'

Vue.use(Vuex)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
