<template>
  <section class="pranter">
    <div class="container">
      <h2>{{ $t("paranter_title") }}</h2>
      <swiper
        :slidesPerView="5"
        :spaceBetween="10"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
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
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 5,
            spaceBetween: 50,
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
import "swiper/swiper-bundle.css";
//import axios
import axios from "axios";

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
</style>