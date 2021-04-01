import VueRouter from "vue-router";

import Timer from "../components/timer";
import Stats from "../components/stats";
import Settings from "../components/settings";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      redirect: "/timer",
    },
    {
      path: "/timer",
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
