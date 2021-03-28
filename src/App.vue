<template>
  <div id="app">
    <Header />
    <router-view></router-view>
    <BottomMenu v-if="isMobile" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import BottomMenu from "./components/BottomMenu";

import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    Header,
    Content,
    BottomMenu,
  },
  computed: {
    ...mapGetters(["isMobile"]),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  max-height: -webkit-fill-available;
}
</style>
