<template>
  <div id="timer">
    <Task />
    <TimeBlock />
    <TimerControl />
  </div>
</template>

<script>
import Task from "./Task";
import TimerControl from "./TimerControl";
import TimeBlock from "./TimeBlock";

export default {
  components: {
    Task,
    TimerControl,
    TimeBlock,
  },
};
</script>

<style>
#timer {
  text-align: center;
  position: relative;
}
</style>