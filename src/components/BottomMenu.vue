<template>
  <div v-if="clientWidth < 600" class="bottom-menu">
    <Navbar />
  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      clientWidth: document.documentElement.clientWidth,
    }
  }
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