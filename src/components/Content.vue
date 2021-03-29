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
  padding: 60px 0 45px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>