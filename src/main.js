// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'
import router from './router'

import 'normalize.css/normalize.css'

// anime动画库
import anime from 'animejs/lib/anime.es.js';
Vue.prototype.anime = anime

Vue.use(ElementUI, {
  size: 'small'
});
import './assets/css/index.less'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
