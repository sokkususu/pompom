import VueRouter from "vue-router";

import Timer from "../components/timer/Timer";
import Stats from "../components/stats/Stats";
import Settings from "../components/settings/Settings";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Timer,
    },
    {
      path: "/stats",
      component: Stats,
    },
    {
      path: "/settings",
      component: Settings,
    },
  ],
});
