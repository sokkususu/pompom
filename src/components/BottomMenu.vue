<template>
  <div class="bottom-menu">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  components: {
    Navbar,
  },
};
</script>

<style>
.bottom-menu {
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 45px;
  box-shadow: 0px -2px 10px #afafaf29;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>