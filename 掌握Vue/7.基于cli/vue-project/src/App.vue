<template>
  <div id="app">
    <MyTitle type="2"></MyTitle>
  </div>
</template>

<script>
import MyTitle from "./components/MyTitle.vue";

export default {
  name: "app",
  components: {
    MyTitle
  }
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
