// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/reset.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'lib-flexible/flexible.js'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

// require styles

import 'swiper/dist/css/swiper.css'

Vue.use(MintUI)
Vue.use(VueAwesomeSwiper /* { default global options } */)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})