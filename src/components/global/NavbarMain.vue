<template>
  <b-navbar fixed-top="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" class="branding" :to="{ path: '/' }">
        <img
          src="@/assets/branding/Logo_Duotone_Light.min.svg"
          alt="Beamed - Destructible File Sharing"
          width="112px"
        />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Send a File
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Features
      </b-navbar-item>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
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
          <a class="button is-primary is-rounded is-small">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light is-outlined is-rounded is-small">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>
<script>
export default {}
</script>

<style lang="scss" scoped>
.navbar {
  background: rgba(0, 7, 30, 0.45);
  backdrop-filter: blur(10px);
  .navbar-brand {
    .navbar-item {
      &:hover {
        background: transparent !important;
      }
    }
  }
  .navbar-item {
    font-size: 12px;
    color: $text-light;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    transition: all 0.125s ease;
    &:hover {
      background: $magenta;
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
  font-size: 12px;
}
</style>
