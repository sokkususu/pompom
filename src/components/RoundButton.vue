<template>
  <div class="round-button" :class="{ accent: accent }">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    accent: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.round-button {
  width: 38px;
  height: 38px;
  border: 1px solid #434343;
  border-radius: 50%;
  color: #434343;
  stroke: #434343;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.round-button.accent {
  width: 52px;
  height: 52px;
  border: 1px solid #ff5b41;
  color: #ff5b41;
  stroke: #ff5b41;
}

.round-button:hover {
  /* color: #a4fc5c;
  border: 1px solid #a4fc5c; */
}

.round-button:active {
  color: #a4fc5c;
  border: 1px solid #a4fc5c;
  stroke: #a4fc5c;
}
</style>