import Vue from 'vue'
import App from './App.vue'
// ES6
import VueTyperPlugin from 'vue-typer'
// CommonJS

Vue.use(VueTyperPlugin);
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
