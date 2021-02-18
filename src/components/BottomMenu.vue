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
  width: 100%;
  min-height: 45px;
  box-shadow: 0px -2px 10px #afafaf29;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>