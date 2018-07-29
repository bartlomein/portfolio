import Vue from 'vue'
import App from './App.vue'
// ES6
import VueTyperPlugin from 'vue-typer'
// CommonJS
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
})

Vue.use(VueTyperPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
