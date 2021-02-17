import Vue from 'vue'
import App from './App.vue'

import VueProgress from "vue-progress-path"

Vue.use(VueProgress, {
  defaultShape: 'circle',
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
