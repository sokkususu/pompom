<template>
  <nav class="navbar">
    <router-link to="/" class="navbar-timer navbar-item">
      <icon-base height="28px" icon-name="timer"><icon-timer /></icon-base>
    </router-link>
    <router-link to="#" class="navbar-stats navbar-item">
      <icon-base height="28px" icon-name="stats"><icon-stats /></icon-base>
    </router-link>
    <router-link to="/settings" class="navbar-settings navbar-item">
      <icon-base height="28px" icon-name="settings"
        ><icon-settings
      /></icon-base>
    </router-link>
  </nav>
</template>

<script>
import IconBase from "./IconBase";
import IconTimer from "./icons/IconTimer";
import IconStats from "./icons/IconStats";
import IconSettings from "./icons/IconSettings";

export default {
  components: {
    IconBase,
    IconTimer,
    IconStats,
    IconSettings,
  },
};
</script>

<style scoped>
.navbar {
  height: 100%;
  display: flex;
  justify-content: space-around;
  color: rgb(172, 172, 172);
}

.navbar a {
  color: rgb(172, 172, 172);
  text-decoration: none;
  width: 100%;
  height: 100%;
}

.navbar img {
  height: 40px;
}

.navbar-item {
  text-align: center;
  width: 65px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.navbar-item > * {
  margin: auto;
}

.navbar-item.active {
  color: #434343;
}
</style>