<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Timer from "./timer/Timer";

export default {
  components: {
    Timer,
  },
};
</script>

<style scoped>
#content {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>