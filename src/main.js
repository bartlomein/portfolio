import Vue from 'vue'
import App from './App.vue'

import VueTyperPlugin from 'vue-typer'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faGithub);
library.add(faLink);

import VueAnime from 'vue-animejs';

Vue.use(VueAnime)

var VueScrollTo = require('vue-scrollto');

Vue.use(VueScrollTo)




Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

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
