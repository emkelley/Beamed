<template>
  <div id="app">
    <img alt="Beamed logo" src="./assets/Logo_White.svg" width="500px" />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>

<style lang="scss">
body {
  margin: 0;
  overflow: hidden;
}
#app {
  background: rgb(2, 4, 20);
  background: linear-gradient(
    0deg,
    rgba(2, 4, 20, 1) 0%,
    rgba(3, 7, 34, 1) 100%
  );
  height: 100vh;
  margin: 0;
  padding-top: 25%;
  text-align: center;
}
</style>
