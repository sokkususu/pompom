<template>
  <footer class="footer">
    <Navbar />
  </footer>
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
.footer {
  width: 100%;
  height: 80px;
  box-shadow: 0px -2px 10px #afafaf29;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>