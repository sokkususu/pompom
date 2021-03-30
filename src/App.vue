<template>
  <div id="app">
    <Header />
    <Content />
    <BottomMenu v-if="isMobile" />
  </div>
</template>

<script>
import Header from "./components/Header";
import Content from "./components/Content";
import BottomMenu from "./components/BottomMenu";

import { mapGetters, mapMutations } from "vuex";

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
  created() {
    window.addEventListener("resize", this.updateClientWidth);
  },
  methods: {
    ...mapMutations(["updateClientWidth"]),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  height: 100vh;
  max-height: -webkit-fill-available;
}

#app {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}
</style>
