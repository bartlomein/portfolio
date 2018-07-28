import Vue from 'vue'
import App from './App.vue'
// ES6
import VueTyperPlugin from 'vue-typer'
// CommonJS
import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

Vue.use(VueTyperPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
