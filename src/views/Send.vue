<template>
  <div class="pricing">
    <TheNavbar />
    <section class="columns is-multiline">
      <div class="column is-6 is-offset-3 has-text-centered pricing-header va">
        <h1 class="title pricing-title">
          share a
          <span class="is-magenta">file</span>
        </h1>
        <h2 class="subtitle pricing-subtitle">
          Quickly share a file without making an account.
        </h2>
      </div>
      <div class="column is-8 is-offset-2">
        <div class="container">
          <div class="share-container">
            <center>
              <b-field class="file">
                <b-upload v-model="file" expanded>
                  <a class="button is-primary is-fullwidth">
                    <i class="fad fa-upload"></i>
                    <span v-if="!file">Click to Upload</span>
                    <span v-else>{{ file.name }}</span>
                  </a>
                </b-upload>
              </b-field>
            </center>
            <br /><br />
            <p class="has-text-centered">
              Unregistered users are limited to 5 downloads per link with a max
              file size of 25 MB
            </p>
          </div>
        </div>
      </div>
      <div class="column is-12">
        <p>
          Want to learn more about how Beamed works? Check out our
          <router-link to="/faq">F.A.Q.</router-link> page.
        </p>
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from '@/components/global/TheNavbar'
export default {
  name: 'Pricing',
  components: {
    TheNavbar
  },
  data() {
    return {
      file: undefined
    }
  },
  methods: {
    deleteDropFile(index) {
      this.dropFiles.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
.pricing {
  min-height: 98vh;
}
.pricing-header {
  margin-top: 5rem;
  .pricing-title {
    font-weight: 800;
    font-size: 2.5rem;
    color: $text-light;
    letter-spacing: 0.1rem;
    .is-magenta {
      color: $magenta;
    }
  }
  .pricing-subtitle {
    font-weight: 300;
    color: $text-light;
    margin-top: -0.75rem;
  }
}
.share-container {
  height: 20rem;
  padding: 2rem;
  background: #000515;
  border: 2px solid #ec008c;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.upload .upload-draggable {
  border-color: #ec008c !important;
}
</style>
