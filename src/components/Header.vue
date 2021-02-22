<template>
  <header class="header vertical-align">
    <div class="header-navbar">
      <div id="logo">
        <div class="vertical-align">
          <img id="logo-img" src="@/assets/tomato.png" />
        </div>
        <div class="vertical-align">
          <div class="logo-text">PomPom</div>
        </div>
      </div>
      <div class="top-menu">
        <Navbar v-if="!isMobile" />
        <button class="login-button">Log in</button>
      </div>
    </div>
  </header>
</template>

<script>
import Navbar from "./Navbar";

export default {
  components: {
    Navbar,
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

<style scoped>
.header {
  min-height: 60px;
  box-shadow: 0px 2px 10px #afafaf29;
  position: fixed;
  width: 100%;
  padding: 0 20px;
  top: 0;
  z-index: 1;
  background-color: white;
}

.header-navbar {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.vertical-align {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#logo {
  display: flex;
}

#logo-img {
  width: 40px;
  height: 40px;
}

.logo-text {
  padding-left: 10px;
  font-size: 20px;
  font-weight: 900;
}

.top-menu {
  display: flex;
  flex-direction: row;
}

.login-button {
  padding: 0 10px;
  border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

.login-button:hover {
  cursor: pointer;
}
</style>