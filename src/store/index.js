import Vue from "vue";
import Vuex from "vuex";
import VueMeta from "vue-meta";
import AtComponents from "at-ui";
import "at-ui-style";

import global from "./modules/global";
import timer from "./modules/timer";
import settings from "./modules/settings";
import stats from "./modules/stats";

Vue.use(Vuex);
Vue.use(VueMeta);
Vue.use(AtComponents);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    global,
    settings,
    timer,
    stats,
  },
});
