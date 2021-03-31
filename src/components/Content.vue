<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
import Timer from "./timer/Timer";

export default {
  name: "Content",
  components: {
    Timer,
  },
};
</script>

<style scoped>
#content {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>