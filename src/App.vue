<template>
  <div id="app">
    <router-view></router-view>
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '@/components/global/TheFooter.vue'
export default {
  name: 'App',
  components: { TheFooter }
}
</script>

<style lang="scss">
@import '~bulma/sass/utilities/_all';
#app {
  background: radial-gradient(50% 50% at 50% 50%, #020a25 0%, #01071c 100%);
  color: $text-light;
}
$primary: $magenta;
$primary-invert: findColorInvert($primary);
$secondary: $navy;
$secondary-invert: findColorInvert($secondary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);
$family-sans-serif: 'Nunito Sans', sans-serif;
$input-color: $text-light;
$input-background-color: darken($magenta, 5%);
$input-border-color: darken($magenta, 15%);
$input-hover-border-color: darken($magenta, 30%);
$input-focus-border-color: $navy;
$navbar-height: 5rem;
$navbar-item-max-height: 2.5rem;
$navbar-item-img-max-height: 2.5rem;
$navbar-tab-hover-background-color: $magenta;
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
