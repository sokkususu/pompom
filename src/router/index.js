import VueRouter from "vue-router";
import Settings from "../components/Settings";
import Content from "../components/Content";

export default new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Content,
    },
    {
      path: "/settings",
      component: Settings,
    },
  ],
});
