import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/index";

import VueProgress from "vue-progress-path";

Vue.use(VueRouter);
Vue.use(VueProgress, {
  defaultShape: "circle",
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
