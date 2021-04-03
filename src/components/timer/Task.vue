<template>
  <select class="task">
    <option v-for="label in labels" :key="label">{{ label }}</option>
  </select>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Task",
  computed: {
    ...mapGetters(["labels"]),
  },
};
</script>

<style>
</style>