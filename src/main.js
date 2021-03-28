import Vue from "vue";
import App from "./App.vue";

import VueRouter from "vue-router";
import VueProgress from "vue-progress-path";

import router from "./router";
import store from "./store";

Vue.use(VueRouter);
Vue.use(VueProgress, {
  defaultShape: "circle",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
