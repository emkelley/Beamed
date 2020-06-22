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
  background: rgb(2, 10, 37);
  background: radial-gradient(
    circle,
    rgba(2, 10, 37, 1) 0%,
    rgba(1, 7, 28, 1) 100%
  );
  height: 100vh;
  margin: 0;
  padding-top: 25%;
  text-align: center;
}
</style>
