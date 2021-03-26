import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router/index";
import Vuex from "vuex";

import VueProgress from "vue-progress-path";

Vue.use(VueRouter);
Vue.use(VueProgress, {
  defaultShape: "circle",
});
Vue.use(Vuex);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0,
    width: document.documentElement.clientWidth,
    isPlay: false,
    defaultTime: 25 * 60,
    time: 25 * 60,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    updateWidth(state) {
      state.width = document.documentElement.clientWidth;
    },
  },
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
