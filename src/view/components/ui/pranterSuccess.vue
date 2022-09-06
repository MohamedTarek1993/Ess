<template>
  <section
    class="pranter"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <h2>{{ $t("paranter_title") }}</h2>
      <swiper
      :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
       
        :breakpoints="{
          '320': {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          '425': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide v-for="(Partner, index) in Partners" :key="index">
          <div class="img">
            <img :src="Partner.image" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";


//import axios
import axios from "axios";
import { Autoplay } from "swiper";

export default {
  name: "pranterSuccess",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Partners: [],
    };
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  methods: {
    fetch_partners_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/partners").then(({ data }) => {
        this.Partners = data.data;
        // console.log(this.Partners);
      });
    },
  },
  created() {
    this.fetch_partners_data();
  },
};
</script>

<style lang="scss" scoped>
.pranter {
  padding: 5% 0;
  h2 {
    font-family: "semibold";
    color: var(--color-primary);
    font-size: 1.5rem;
    padding: 1% 0 8%;
    text-align: center;
  }
  .img {
    width: 130px;
    height: 130px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
@media (max-width: 768.98px) {
  .pranter .img {
    width: 100px;
    height: 101px;
  }
}
</style>