<template>
  <div class="column is-3 plan" :class="'plan-' + plan.type">
    <div class="plan-wrapper">
      <div class="plan-header">
        <h2 class="tier">{{ plan.type }}</h2>
        <h1 class="price"><span>$</span>{{ plan.cost }}</h1>
        <h3 class="frequency">per month</h3>
      </div>
      <div class="plan-features">
        <p>
          <i class="fad fa-check-circle"></i
          ><strong>{{ plan.features.maxFileSize }}</strong> max file size
        </p>
        <p>
          <i class="fad fa-check-circle"></i>Up to
          <strong>{{ plan.features.activeLinks }}</strong> active links
        </p>
        <p>
          <i class="fad fa-check-circle"></i>Up to
          <strong>{{ plan.features.downloads }}</strong> downloads per link
        </p>
        <p>
          <i class="fad fa-check-circle"></i
          >{{ plan.features.dashboard == 'full' ? 'Link management' : 'Basic' }}
          dashboard
        </p>
        <p v-if="plan.features.analytics">
          <i class="fad fa-check-circle"></i>Full link analytics
        </p>
        <p v-if="plan.features.logging">
          <i class="fad fa-check-circle"></i>Full audit logging
        </p>
        <p v-if="plan.features.timeExpiration">
          <i class="fad fa-check-circle"></i>Link epiration extensions
        </p>
        <p v-if="plan.features.passwordProtect">
          <i class="fad fa-check-circle"></i>Password protected links
        </p>
        <p v-if="plan.features.regenerate">
          <i class="fad fa-check-circle"></i>Regenerate link URLs
        </p>
        <p v-if="plan.features.vanityURL">
          <i class="fad fa-check-circle"></i>Choose your own vanity URL
        </p>
        <p v-if="plan.features.whitelabel">
          <i class="fad fa-check-circle"></i>Whitelabeled landing page
        </p>
        <p v-if="plan.features.trial">
          <i class="fad fa-check-circle"></i>14-Day Free Trial
        </p>
      </div>
      <div class="plan-cta va has-text-centered">
        <router-link to="/account/signup">{{ plan.cta }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plan: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.plan {
  .plan-header {
    border: 2px solid $plan-free;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    padding: 1rem;
    text-align: center;
    background: $plan-free;
    .tier {
      font-weight: 800;
      letter-spacing: 0.05rem;
      font-size: 1.5rem;
    }
    .price {
      font-size: 4rem;
      font-weight: 600;
      color: $navy;
      span {
        font-size: 1rem;
      }
    }
    .frequency {
      margin-top: -1rem;
    }
  }
  .plan-features {
    padding: 1rem 1rem;
    color: $text-light;
    border-left: 2px solid $plan-free;
    border-right: 2px solid $plan-free;
    strong {
      color: $plan-free;
    }
  }
  .plan-cta {
    background: $plan-free;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    min-height: 3rem;
    a {
      color: $navy;
      font-weight: 600;
      font-size: 1.25rem;
    }
  }
}
.fa-check-circle {
  margin-right: 1rem;
}

.plan-Team {
  color: $text-light;
  .plan-header {
    border: 2px solid #be0071;
    background: radial-gradient(50% 50% at 50% 50%, #ec008c 0%, #be0071 100%);
    .price {
      color: $text-light;
    }
  }
  .plan-features {
    color: $text-light;
    border-color: #be0071;
    strong {
      color: $magenta;
    }
  }
  .plan-cta {
    background: #be0071;
    a {
      color: $text-light;
    }
  }
  .fa-check-circle {
    margin-right: 1rem;
    color: $magenta;
  }
}
.plan-Business {
  color: $text-light;
  .plan-header {
    border: 2px solid #6d00a0;
    background: radial-gradient(
      50% 248.46% at 50% 50%,
      #a000ec 0%,
      #6d00a0 100%
    );
    .price {
      color: $text-light;
    }
  }
  .plan-features {
    color: $text-light;
    border-color: #6d00a0;
    strong {
      color: $plan-business;
    }
  }
  .plan-cta {
    background: #6d00a0;
    a {
      color: $text-light;
    }
  }
  .fa-check-circle {
    margin-right: 1rem;
    color: $plan-business;
  }
}
.plan-Hobby {
  color: $text-light;
  .plan-header {
    border: 2px solid #2884b9;
    background: radial-gradient(50% 50% at 50% 50%, #2d9cdb 0%, #2884b9 100%);
    .price {
      color: $text-light;
    }
  }
  .plan-features {
    color: $text-light;
    border-color: #2884b9;
    strong {
      color: $plan-hobby;
    }
  }
  .plan-cta {
    background: #2884b9;
    a {
      color: $text-light;
    }
  }
  .fa-check-circle {
    margin-right: 1rem;
    color: $plan-hobby;
  }
}
</style>
