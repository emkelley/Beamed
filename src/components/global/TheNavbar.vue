<template>
  <b-navbar :fixed-top="fixed" :class="{ 'glass-nav': transparent }">
    <template slot="brand">
      <b-navbar-item tag="router-link" class="branding" :to="{ path: '/' }">
        <img
          src="@/assets/branding/Logo_Duotone_Light.min.svg"
          alt="Beamed - Destructible File Sharing"
          width="150px"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/send' }">
        Send a File
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Features
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/pricing' }">
        Pricing
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Support
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        URL to QR code
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button login is-outlined is-primary is-rounded">
            Log In
          </a>
          <a class="button is-primary is-rounded">
            <strong>Sign Up</strong>
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {
  props: {
    transparent: {
      type: Boolean,
      default: false
    },
    fixed: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  background: rgb(0, 7, 30);
  &.glass-nav {
    background: rgba(0, 7, 30, 0.45);
    backdrop-filter: blur(10px);
  }
  .navbar-brand {
    .navbar-item {
      &:hover {
        background: transparent !important;
      }
    }
  }
  .navbar-item {
    font-size: 12px;
    color: rgb(128, 128, 168);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    transition: all 0.125s ease;
    &:hover {
      color: $magenta;
      background: transparent;
    }
    &:focus {
      color: $magenta;
      background: transparent !important;
      &:hover {
        color: $magenta;
        background: transparent;
      }
    }
    &:focus {
      background: transparent;
      &:hover {
        background: $magenta;
      }
    }
    &.has-dropdown {
      color: $text-light;
    }
  }
}
.button {
  text-transform: none;
  &.login {
    color: $magenta;
  }
}
</style>
