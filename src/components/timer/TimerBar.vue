<template>
  <div class="time-bar">
    <loading-progress
      :progress="progress"
      :indeterminate="indeterminate"
      :counter-clockwise="counterClockwise"
      :hide-background="hideBackground"
      :size="height"
      rotate
      :fillDuration="fillDuration"
      rotationDuration="1"
    />
  </div>
</template>

<script>
import "vue-progress-path/dist/vue-progress-path.css";

export default {
  name: "Progress",
  props: {
    counterClockwise: {
      type: Boolean,
      default: false,
    },
    fillDuration: {
      type: [String, Number],
      default: 1,
    },
    height: {
      type: [String, Number],
      default: 0,
    },
    hideBackground: {
      type: Boolean,
      default: false,
    },
    indeterminate: {
      type: Boolean,
      default: false,
    },
    progress: {
      type: Number,
      default: 1,
    },
  },
};
</script>

<style>
.time-bar {
  width: 100%;
  position: absolute;
}

.vue-progress-path {
  margin: auto;
}

.vue-progress-path path {
  stroke-width: 15px;
}

.vue-progress-path .progress {
  stroke: #ff5b41;
}

.vue-progress-path .background {
  stroke: #eeeeee;
}

@media (min-width: 600px) {
  .vue-progress-path path {
    stroke-width: 25px;
  }
}
</style>