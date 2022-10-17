<template>
  <section
    class="service_section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <div class="main-title-center">
        <h6>{{ $t("Services") }}</h6>
        <h2>{{ ServicesSection.title }}</h2>
        <p>{{ ServicesSection.text }}</p>
      </div>
      <div class="card_service">
        <div
        class="card"
        v-for="(service, index) in ServicesSection.services"
        :key="index"
      >
        <div class="img">
          <img :src="service.image" />
        </div>
        <h4>{{ service.title }}</h4>
        <p>{{ service.text }}</p>
      </div>
      </div>
     
    </div>
  </section>
</template>

<script>
//import axios
import axios from "axios";

export default {
  name: "services",
  data() {
    return {
      ServicesSection: {},
    };
  },
  methods: {
    fetch_service_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/service_page").then(({ data }) => {
        this.ServicesSection = data.data;
        // console.log(this.ServicesSection);
      });
    },
  },
  created() {
    this.fetch_service_data();
  },
};
</script>

<style lang="scss" scoped>
.service_section {
  padding: 4% 0;
  position: relative;
  .main_heading {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 4%;

    h2 {
      font-family: "semibold";
      color: var(--color-primary);
      font-size: 1.5rem;
      padding: 1% 0;
    }
    p {
      font-family: "regular";
      color: var(--color-fourth);
      font-size: 1rem;
      text-align: center;
      padding: 0 12%;
    }
  }
  .card_service{
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    flex-wrap: wrap;
    .card {
    padding:  2%;
    display: flex;
    justify-content: start;
    align-content: center;
    text-align: center;
    flex-direction: column;
    background-color: transparent;
    border: none;
    transition: 0.3s all ease-in-out;
    // height: 400px;
    width: 22%;
    margin-inline-end: 2%;
    &:hover {
      background-color: var(--color-white);
      box-shadow: 0px 7px 60px rgba($color: #7a7a7a, $alpha: 0.16);
    }
    .img {
      width: 80px;
      height: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      background-color: var(--color-primary);
      border-radius: 50%;
      padding: 2%;
      margin: 0 auto;
      img {
        width: 30px;
        height: 30px;
      }
    }
    h4 {
      font-family: "semibold";
      color: var(--color-primary);
      font-size: 1.3rem;
      padding: 8% 0 4%;
      height: 81px;

    }
    p {
      font-family: "regular";
      color: var(--color-fourth);
      font-size: 1rem;
     
    }
  }
  }
 
}
@media (max-width: 768.98px) {
  .service_section .swiper .card .img {
    width: 63px;
    height: 69px;
  }
}
</style>