<template>
  <!-- Main container -->
  <div class="footer-container">
    <footer class="level">
      <!-- Left side -->
      <div class="level-left">
        <div class="level-item">
          &copy; 2020 Beamed
        </div>
      </div>

      <!-- Right side -->
      <div class="level-right">
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Support
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          Privacy
        </b-navbar-item>
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.footer-container {
  padding-left: 2rem;
  padding-right: 2rem;
  background: black;
  color: $magenta;
  a {
    color: $magenta;
  }
}
</style>
