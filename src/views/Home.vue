<template>
  <div class="home">
    <vue-headful
      title="Beamed - Destructible File Sharing"
      description="Beamed lets you easily beam files between family, friends, or anyone else.
Upload your file securely and share your file’s private link."
      keywords="beamed, beamed app, file share, destructible, send files, share file, share, ericmkelley"
      lang="en"
      ogLocale="us"
      url="https://beamed.app"
    />
    <section class="hero is-large">
      <div class="hero-head">
        <NavbarMain />
      </div>
      <div class="hero-body">
        <div class="container hero-helper">
          <div class="columns">
            <div class="column is-7">
              <h1 class="title is-1">
                Beamed is
                <span class="descriptor"
                  ><vue-typer
                    :text="descriptor"
                    erase-style="backspace"
                    erase-delay="70"
                  ></vue-typer
                ></span>
                <br />
                temporary file sharing.
              </h1>
              <br />
              <h2 class="subtitle">
                <span>
                  Built with both personal and business needs in mind, Beamed
                  lets you easily send temporary files between family, friends,
                  coworkers, or anyone else.</span
                >
              </h2>
              <br />
              <router-link
                to="/send"
                class="button is-primary is-rounded is-medium"
                >Start Sharing</router-link
              >
              <router-link
                to="/send"
                class="button is-light is-outlined is-rounded is-medium"
                >Learn More</router-link
              >
            </div>
            <div class="column hero-form">
              <div class="form-wrapper">
                <h2 class="subtitle">Get started in seconds!</h2>
                <h3 class="heading">Create an account</h3>
                <form>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-large"
                        type="email"
                        placeholder="Email Address"
                        autofocus=""
                      />
                    </div>
                  </div>
                  <div class="field">
                    <div class="control">
                      <input
                        class="input is-large"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                  </div>
                  <button
                    class="button is-block is-secondary is-large is-fullwidth"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="what-is">
      <div class="container">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Tweets</p>
              <p class="title">3,456</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Following</p>
              <p class="title">123</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Followers</p>
              <p class="title">456K</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Likes</p>
              <p class="title">789</p>
            </div>
          </div>
        </nav>
      </div>
    </section>
    <section class="features">
      <div class="container">
        <div class="columns is-multiline">
          <div id="" class="column is-12">
            <div class="columns">
              <div class="column is-6">
                <h1 class="title">Temporary file sharing made easy</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Sint, accusantium! Aperiam voluptas animi doloremque rerum, ut
                  veritatis iure soluta odit, dolorum minus explicabo illo
                  delectus recusandae. Ipsa dolor enim iste minus sunt ipsum
                  vero voluptas, sint quidem. Aspernatur, provident nisi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="privacy">
      <div class="container">
        <div class="columns">
          <div class="column is-10 is-offset-1 has-text-centered">
            <h1 class="title">Privacy and Security</h1>
            <p>
              Beamed was built from the ground up to ensure the safe, secure
              transfer of files. When you upload a file to Beamed, it gets
              uploaded to our secure CDN. Once it's uploaded, the file may only
              be retrieved using a tokenized URL generated in your Beamed
              dashboard. Once your file triggers either your max-download limit
              or time limit, the file is immediately purged from Beamed servers.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { VueTyper } from 'vue-typer'
import NavbarMain from '@/components/global/NavbarMain.vue'

export default {
  name: 'Home',
  components: {
    NavbarMain,
    VueTyper
  },
  data() {
    return {
      descriptor: ['feature packed', 'super simple', 'near instant']
    }
  }
}
</script>

<style lang="scss">
h1 {
  color: $magenta;
}
.hero {
  margin-top: -52px;
  background: url('../assets/images/stars.png'), #000411;
  .hero-helper {
    padding-top: 52px;
  }
  .title,
  .subtitle {
    color: $text-light;
    letter-spacing: 0.05rem;
  }
  .title {
    font-weight: 800;
  }
  .subtitle {
    font-weight: 400;
    span {
      max-width: 700px !important;
    }
  }
  .button {
    margin-right: 1rem;
  }
}
.vue-typer {
  .custom.char {
    color: $magenta;
  }
}
.what-is {
  margin-top: -25px;
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: $magenta;
  color: $text-light;
  font-size: 1.25rem;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  .title {
    color: $text-light;
  }
  .subtitle {
    color: $magenta;
  }
}
.privacy {
  padding-top: 3rem;
  padding-bottom: 3rem;
  background: #000411;
  color: $text-light;
  .title,
  p {
    color: $text-light;
  }
}
.features {
  padding: 10rem 0rem;
  .title,
  p {
    color: $text-light;
  }
}
.hero-form {
  padding: 1rem;
  .form-wrapper {
    background: $magenta;
    padding: 2rem;
    border-radius: 15px;
  }
  .subtitle {
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.25rem;
  }
  .heading {
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
}
</style>
