<template>
  <nav class="navbar">
    <router-link to="/timer" class="navbar-timer navbar-item">
      <i class="icon icon-clock"></i>
    </router-link>
    <router-link to="/stats" class="navbar-stats navbar-item">
      <i class="icon icon-pie-chart"></i>
    </router-link>
    <router-link to="/settings" class="navbar-settings navbar-item">
      <i class="icon icon-settings"></i>
    </router-link>
  </nav>
</template>

<script>
import IconBase from "./icons/IconBase";
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
}

.navbar-item {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.icon {
  font-size: 28px;
  padding: 0 10px;
}
</style>