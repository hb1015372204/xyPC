// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import './common/css/global.scss'
import './common/css/pub_Animate.scss'

import 'animate.css'
import { WOW } from 'wowjs'
new WOW({live: false}).init();

import axios from 'axios'
// baseURL配置
axios.defaults.baseURL = window.location.origin;//测试地址"http://test_www.shinyutech.com";
axios.defaults.headers.post["Content-Type"] ="application/x-www-form-urlencoded";
Vue.prototype.$http = axios



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
