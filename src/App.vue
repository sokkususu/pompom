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

export default {
  name: "App",
  components: {
    Header,
    Content,
    BottomMenu,
  },
  data() {
    return {
      isMobile: /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(
        navigator.userAgent
      ),
    };
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
