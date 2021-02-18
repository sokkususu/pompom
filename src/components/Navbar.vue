<template>
  <nav class="navbar">
    <a href="#" class="navbar-timer navbar-item active">
      <icon-base height="28px" icon-name="timer"><icon-timer /></icon-base>
      <!-- <div class="navbar-text">Timer</div> -->
    </a>
    <a href="#" class="navbar-stats navbar-item">
      <icon-base height="28px" icon-name="stats"><icon-stats /></icon-base>
      <!-- <div class="navbar-text">Stats</div> -->
    </a>
    <a href="#" class="navbar-settings navbar-item">
      <icon-base height="28px" icon-name="settings"
        ><icon-settings
      /></icon-base>
      <!-- <div class="navbar-text">Settings</div> -->
    </a>
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