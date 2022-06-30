<template>
  <section class="pranter">
    <div class="container">
      <h2>Companies That Helped Us Grow</h2>
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
            <img :src="require(`../../../assets/image/${Partner.image}.png`)" />
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

export default {
  name: "pranterSuccess",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      Partners: [
        {
          image: "prant1",
        },
        {
          image: "prant2",
        },
        {
          image: "prant3",
        },
        {
          image: "prant4",
        },
        {
          image: "prant5",
        },
      ],
    };
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
    width: 70px;
    height: 70px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>