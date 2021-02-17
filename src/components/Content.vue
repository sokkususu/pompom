<template>
  <div class="content">
    <Timer />
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
.content {
  height: 100%;
}
</style>