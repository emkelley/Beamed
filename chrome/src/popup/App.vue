<template>
  <div class="app-content">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="/icons/Beamed-Full_250.png" width="112" height="28" />
          &ensp; Beamed
        </a>

        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="columns is-mobile">
      <div class="column sidebar is-4 va">
        <UserProfile style="bottom: 0;" />
      </div>
      <div class="column main va">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat
        eveniet nostrum, non deserunt fuga necessitatibus voluptatibus fugit
        corrupti alias. Ipsa praesentium veritatis reiciendis modi sequi
        repellat eius? Nihil provident alias amet sit reiciendis. Sed
        perspiciatis repellendus recusandae ex dignissimos ea exercitationem aut
        tempore est labore vero itaque, et autem laborum.
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import UserProfile from "../components/UserProfileBox";
export default {
  components: {
    UserProfile
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="scss">
$primary: #7436e5;
$secondary: #3b8aca;
.column {
  outline: 1px solid red;
}
.app-content {
  width: 600px;
  min-height: calc(100vh-50px);
  border-radius: 10px !important;
  .navbar {
    background: #000a28;
    .navbar-item,
    a {
      color: white;
    }
  }
  .columns {
    margin: 0;
  }
}
.sidebar {
  background: #181e3a;
  padding: 0rem !important;
  height: calc(100vh-50px);
  .profile {
    background: darken($secondary, 10%);
    margin-top: auto;
  }
}
.main {
  background: #f6f9fc;
}
.va {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors

$primary-invert: findColorInvert($primary);
$secondary-invert: findColorInvert($secondary);
$twitter: #4099ff;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black
  ),
  "black": (
    $black,
    $white
  ),
  "light": (
    $light,
    $light-invert
  ),
  "dark": (
    $dark,
    $dark-invert
  ),
  "primary": (
    $primary,
    $primary-invert
  ),
  "secondary": (
    $secondary,
    $secondary-invert
  ),
  "info": (
    $info,
    $info-invert
  ),
  "success": (
    $success,
    $success-invert
  ),
  "warning": (
    $warning,
    $warning-invert
  ),
  "danger": (
    $danger,
    $danger-invert
  ),
  "twitter": (
    $twitter,
    $twitter-invert
  )
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
