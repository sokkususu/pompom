<template>
  <div class="timer">
    <Task />
    <div class="time-block">
      <div class="time">25:00</div>
      <div class="status">focus</div>
    </div>
    <div class="menu">
      <RoundButton />
      <RoundButton />
      <RoundButton />
    </div>
  </div>
</template>

<script>
import TimerBar from "./TimerBar";
import RoundButton from "./RoundButton";
import Task from "./Task";

export default {
  components: {
    TimerBar,
    RoundButton,
    Task,
  },
};
</script>

<style scoped>
.timer {
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.time-block {
  /* position: absolute; */
  /* top: 0; */
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.time {
  font-size: 50px;
}

.status {
  font-size: 20px;
  color: #575757;
}

.menu {
  display: flex;
  width: 178px;
  margin: auto;
  justify-content: space-between;
}
</style>