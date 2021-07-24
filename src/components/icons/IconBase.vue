<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :viewBox="viewBox"
    :aria-labelledby="iconName"
  >
    <g :fill="iconColor">
      <slot />
    </g>
  </svg>
</template>

<script>
export default {
  props: {
    iconName: {
      type: String,
      default: "box",
    },
    width: {
      type: [Number, String],
      default: 40,
    },
    height: {
      type: [Number, String],
      default: 40,
    },
    viewBox: {
      type: String,
      default: "0 0 19 20",
    },
    iconColor: {
      type: String,
      default: "currentColor",
    },
  },
};
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
}
</style>