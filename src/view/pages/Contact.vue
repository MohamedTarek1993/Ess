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
        <div class="col-lg-4 col-md-6 col-12">
          <div class="card">
            <div class="img">
              <img src="../../assets/image/contact1.webp" alt="contact" />
            </div>

            <h4>{{ $t("Mail US") }}</h4>
            <a
              v-for="(email, index) in emails"
              :key="index"
              :href="'mailto:' + email"
              >{{ email }}</a
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
           <div class="card">
            <div class="img">
              <img src="../../assets/image/contact2.webp" alt="contact" />
            </div>

            <h4>{{ $t("Our Location ") }}</h4>
            <a
              v-for="(email, index) in emails"
              :key="index"
              :href="'mailto:' + email"
              >{{ email }}</a
            >
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-12">
             <div class="card">
            <div class="img">
              <img src="../../assets/image/contact3.webp" alt="contact" />
            </div>

            <h4>{{ $t("Call Us") }}</h4>
            <a
              v-for="(number, index) in numbers"
              :key="index"
              :href="'mailto:' + number"
              >{{ number }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
  <Form />
</template>

<script>
import Form from "../components/static/Form.vue";

export default {
  name: "Contact",
  components: {
    Form,
  },
  data() {
    return {
      Sitting: {
        map_link:
          "https://www.google.com/maps/d/embed?mid=1B1lAsUpYFg82Je7XN1_cxRPf1UU&hl=en_US&ehbc=2E312F",
        address:
          " Baghdad, Al Karadah st, Dimondmall, 6th Floor, Business avenue, Office No C-9",
        emails: ["Haidar.Ghazi@Essiraq.com", "Haidar.Ghazi@Essiraq.com"],
        numbers: ["+964-7726-100-178 , +964-7726-100-178"],
      },
    };
  },
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

</style>
