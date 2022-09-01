<template>
  <section class="together">
    <div class="container">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-lg-8 col-sm-12">
          <div class="logo">
            <img src="../../../assets/image/logo2.webp" alt="" />
          </div>
          <h2>{{ $t("Let's Build Something Genius Together") }}</h2>
          <p>
            {{ $t("You Can Make You Appointment For Any Request Online Now") }}
          </p>
          <div class="button">
            <router-link :to="{ name: 'Contact' }" class="secondary btn">{{
              $t("Contact_Us")
            }}</router-link>
          </div>
          <span>
            <strong>{{ $t("Or simply deal") }}</strong> : <span class="number">{{ together.text }}</span>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Together",
  data() {
    return {
      together: {},
    };
  },
  methods: {
    fetch_together_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/pagesFooter").then(({ data }) => {
        this.together = data.data;
        // console.log(this.together);
      });
    },
  },
  created() {
    this.fetch_together_data();
  },
};
</script>

<style lang="scss" scoped>
.together {
  background-image: url(../../../assets/image/back.webp);
  padding: 3% 0;
  margin: 4% 0;
  .logo {
    img {
      width: 160px;
      height: 85px;
    }
  }
  h2 {
    color: var(--color-secound);
    font-family: "bold";
    font-size: 3.22rem;
    padding: 3% 10%;
  }
  p {
    color: var(--color-fourth);
    font-family: "regular";
    font-size: 1.3rem;
  }
  span {
    color: var(--color-third);
    font-family: "regular";
    font-size: 1rem;
    margin-top: 2%;
  }
  .button {
    justify-content: center;
    margin: 3% 0;
    .btn {
      padding: 2%;
    }
  }
}

@media (max-width: 1023.98px) {
  .together {
    .button .btn .logo {
      margin-bottom: 4%;
      img {
        width: 169px;
        height: 65px;
      }
    }
    .button {
      padding: 1%;
      .btn {
        width: 30%;
      }
    }
  }
}
@media (max-width: 425.98px) {
  .together .button .btn {
    width: 50%;
  }
  .together h2 {
    font-size: 1.4rem;
  }
  .together p {
    font-size: 1.2rem;
  }
}
</style>