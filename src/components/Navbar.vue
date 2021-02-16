<template>
  <nav class="navbar">
    <div class="navbar-timer navbar-item" style="color: black">
      <icon-base width="100%" icon-name="timer"><icon-timer /></icon-base>
      <div class="navbar-text">Timer</div>
    </div>
    <div class="navbar-stats navbar-item">
      <icon-base width="100%" icon-name="stats"><icon-stats /></icon-base>
      <div class="navbar-text">Stats</div>
    </div>
    <div class="navbar-settings navbar-item">
      <icon-base width="100%" icon-name="settings"><icon-settings /></icon-base>
      <div class="navbar-text">Settings</div>
    </div>
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
  display: flex;
  justify-content: space-around;
  color: rgb(172, 172, 172);
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

.active-item * {
  color: black;
  fill: black;
}
</style>