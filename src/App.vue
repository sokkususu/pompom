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
#app {
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
}

body {
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
