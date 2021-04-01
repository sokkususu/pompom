<template>
  <nav class="navbar">
    <router-link
      v-for="item in items"
      :key="item"
      :to="`/${item}`"
      :class="`navbar-${item} navbar-item`"
    >
      <icon-base :height="iconHeight" :icon-name="item">
        <component :is="`icon-${item}`"></component>
      </icon-base>
    </router-link>
  </nav>
</template>

<script>
import IconBase from "./icons/IconBase";
import IconTimer from "./icons/IconTimer";
import IconStats from "./icons/IconStats";
import IconSettings from "./icons/IconSettings";

export default {
  data() {
    return {
      items: ["timer", "stats", "settings"],
      iconHeight: 28,
    };
  },
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