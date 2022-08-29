<template>
  <section class="privacy">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ $t("terms_title") }}</h2>
        <p>{{ $t("terms_text") }}</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="content">
            <h4>{{ $t("terms_title") }}</h4>
            <p v-html="Terms.text"></p>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="img">
            <img src="../../assets/image/privacy.webp" alt="privacy">
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Terms",
  data() {
    return {
      Terms: { },
    };
  },
   methods: {
    fetch_Terms_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/terms").then(({ data }) => {
        this.Privacy = data.data;
        // console.log(this.Faq);
      });
    },
  },
  created() {
    this.fetch_Terms_data();
  },
};
</script>

<style lang="scss" scoped>
.privacy {
  margin-top: 10%;
  .main-title-center {
    p {
      padding: 0;
    }
  }
  .content{
   :is(h1,h2,h3,h4,h5,h6){
   color: var(--color-primary);
   font-family: 'bold';
   font-size: 1.3rem;
   }
   p{
     color: var(--color-fourth);
   font-family: 'regular';
   font-size: 1rem;
   }
   
  }
  .img{
    height: 370px;
    width: 100%;
    img{
      height: 100%;
      width: 100%;
    }
   }
}
</style>
