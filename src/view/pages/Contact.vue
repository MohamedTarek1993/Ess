<template>
  <div class="main-title-center">
    <h2>{{ $t("Contact_Us") }}</h2>
    <p>{{ $t("contact_disc") }}</p>
  </div>
  <div class="map">
    <iframe :src="Sitting.map_link" width="100%" height="480"></iframe>
  </div>

  <section class="information">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card">
            <div class="img">
              <img src="../../assets/image/contact1.webp" alt="contact" />
            </div>

            <h4>{{ $t("Mail US") }}</h4>
            <a
              v-for="(email, index) in Sitting.emails"
              :key="index"
              :href="'mailto:' + email"
              >{{ email }}</a
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card">
            <div class="img">
              <img src="../../assets/image/contact2.webp" alt="contact" />
            </div>

            <h4>{{ $t("Our Location") }}</h4>
            <p>{{ Sitting.address }}</p>
          </div>
        </div>
        <div class="col-lg-4 col-md-4 col-12">
          <div class="card">
            <div class="img">
              <img src="../../assets/image/contact3.webp" alt="contact" />
            </div>

            <h4>{{ $t("Call Us") }}</h4>
            <a
              v-for="(number, index) in Sitting.numbers"
              :key="index"
              :href="'mailto:' + number"
              >{{ number }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <Form />
  </div>
</template>

<script>
import Form from "../components/static/Form.vue";
import axios from "axios";

export default {
  name: "Contact",
  components: {
    Form,
  },
  data() {
    return {
      Sitting: {
      },
    };
  },
   methods: {
   fetch_contact_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/sitting").then(({ data }) => {
        this.Sitting = data.data;
        // console.log(this.heroData);
      });
    },
    
  },
  created(){
    this.fetch_contact_data();
  }
};
</script>

<style lang="scss" scoped>
.main-title-center {
  margin-top: 10%;
  h2 {
    font-size: 2rem;
  }
  p {
    padding: 0;
  }
}
.information {
  padding: 5% 0;
  .card {
    padding: 10% 4% 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba($color: #2e493a, $alpha: 0.04);
    border: none;
    border-radius: 10px;
    position: relative;
    .img {
      background: var(--color-primary);
      border-radius: 50%;
      width: 58px;
      height: 58px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      top: -17%;
      img {
        width: 55%;
        height: 48%;
      }
    }
    h4 {
      font-family: "semibold";
      color: var(--color-secound);
      padding: 4% 0;
      font-size: 1.3rem;
    }
    p,
    a {
      font-family: "regular";
      color: var(--color-fourth);
      font-size: 1rem;
      display: block;
      margin-bottom: 2%;
      text-align: center;
      line-height: 1.8;
    }
  }
}
@media (max-width: 768.98px) {
  .information .card {
    padding: 17% 4% 5%;
  }
  .input-group .form-control {
    margin-bottom: 4%;
  }
}
@media (max-width: 425.98px) {
  .main-title-center h2 {
    font-size: 1.2rem;
  }
  .main-title-center p {
    font-size: 1rem;
  }
}
</style>
