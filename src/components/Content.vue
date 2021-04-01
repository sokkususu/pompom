<template>
  <div id="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Content",
};
</script>

<style scoped>
#content {
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>