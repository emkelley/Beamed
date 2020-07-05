<template>
  <div class="pricing">
    <TheNavbar />
    <section class="columns is-multiline">
      <div class="column is-6 is-offset-3 has-text-centered pricing-header va">
        <center>
          <img
            src="../assets/branding/Logo_Duotone_Light.min.svg"
            alt="Beamed Logo"
            width="350px"
          />
        </center>

        <h1 class="title pricing-title">
          <span class="is-magenta">simple</span>,
          <span class="is-magenta">transparent</span> pricing
        </h1>
        <h2 class="subtitle pricing-subtitle">
          We strive to keep pricing as simple as possible with plans that just
          make sense.
        </h2>
      </div>
      <div class="column is-12">
        <div class="container is-wide">
          <br />
          <br />
          <div class="columns">
            <PricingCard :plan="freePlan" />
            <PricingCard :plan="hobbyPlan" />
            <PricingCard :plan="teamPlan" />
            <PricingCard :plan="businessPlan" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TheNavbar from '@/components/global/TheNavbar.vue'
import PricingCard from '@/components/PricingCard.vue'
export default {
  name: 'Pricing',
  components: {
    TheNavbar,
    PricingCard
  },
  data() {
    return {
      freePlan: {
        type: 'Free',
        cost: 0,
        cta: 'Get Started',
        features: {
          maxFileSize: '500MB',
          activeLinks: 5,
          downloads: 5,
          dashboard: 'basic',
          logging: false,
          analytics: false,
          timeExpiration: false,
          passwordProtect: false,
          extensions: false,
          regeneration: false,
          vanityURL: false,
          trial: false,
          whitelabel: false
        }
      },
      hobbyPlan: {
        type: 'Hobby',
        cost: 5,
        cta: 'Get Started',
        features: {
          maxFileSize: '2.5GB',
          activeLinks: 25,
          downloads: 50,
          dashboard: 'full',
          logging: false,
          analytics: true,
          timeExpiration: true,
          passwordProtect: true,
          extensions: false,
          regeneration: false,
          vanityURL: false,
          trial: false,
          whitelabel: false
        }
      },
      teamPlan: {
        type: 'Team',
        cost: 15,
        cta: 'Get Started',
        features: {
          maxFileSize: '5GB',
          activeLinks: 200,
          downloads: 100,
          dashboard: 'full',
          logging: true,
          analytics: true,
          timeExpiration: true,
          passwordProtect: true,
          extensions: false,
          regeneration: false,
          vanityURL: true,
          trial: false,
          whitelabel: false
        }
      },
      businessPlan: {
        type: 'Business',
        cost: 45,
        cta: 'Contact Us',
        features: {
          maxFileSize: '25GB',
          activeLinks: 1000,
          downloads: 1000,
          dashboard: 'full',
          analytics: true,
          logging: true,
          timeExpiration: true,
          passwordProtect: true,
          extensions: true,
          regeneration: true,
          vanityURL: true,
          trial: true,
          whitelabel: true
        }
      }
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
</style>
