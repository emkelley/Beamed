<template>
  <div id="app">
    <img alt="Beamed logo" src="./assets/Logo_White.svg" width="500px" />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
#app {
  background: $navy;
  min-height: 150vh;
}
$primary: $magenta;
$primary-invert: findColorInvert($primary);
$secondary: $navy;
$secondary-invert: findColorInvert($secondary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$family-sans-serif: 'Nunito Sans', sans-serif;
$input-color: $text-light;
$input-background-color: darken($magenta, 10%);
$input-border-color: darken($magenta, 15%);
$input-hover-border-color: darken($magenta, 30%);
$input-focus-border-color: $navy;
$colors: (
  'white': (
    $white,
    $black
  ),
  'black': (
    $black,
    $white
  ),
  'light': (
    $light,
    $light-invert
  ),
  'dark': (
    $dark,
    $dark-invert
  ),
  'secondary': (
    $secondary,
    $secondary-invert
  ),
  'primary': (
    $primary,
    $primary-invert
  ),
  'info': (
    $info,
    $info-invert
  ),
  'success': (
    $success,
    $success-invert
  ),
  'warning': (
    $warning,
    $warning-invert
  ),
  'danger': (
    $danger,
    $danger-invert
  ),
  'twitter': (
    $twitter,
    $twitter-invert
  )
);

$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

@import '~bulma';
@import '~buefy/src/scss/buefy';
</style>
