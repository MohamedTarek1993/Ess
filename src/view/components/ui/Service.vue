<template>
  <section class="service_section">
    <div class="container">
      <div class="main_heading">
        <h6>{{$t("Services")}}</h6>
        <h2>{{ ServicesSection.title }}</h2>
        <p>{{ ServicesSection.text }}</p>
      </div>
      <swiper   
        :slidesPerView="4"
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
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        class="swiper"
      >
        <swiper-slide
          v-for="(service, index) in ServicesSection.services"
          :key="index"
        >
          <div class="card">
            <div class="img">
              <img
                :src="require(`../../../assets/image/${service.image}.png`)"
              />
            </div>
            <h4>{{ service.title }}</h4>
            <p>{{ service.text }}</p>
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
  name: "Service",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      ServicesSection: {
        title: "What We Offer ?",
        text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        services: [
          {
            id: "1",
            image: "serv1",
            title: "Consultation",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "2",
            image: "serv2",
            title: "Maintenance Services",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "3",
            image: "serv3",
            title: "Electrical systmes design",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "4",
            image: "serv4",
            title: "Electrical load calculation ",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
        ],
      },
    };
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
  .swiper {
    .card {
      padding: 7% 1%;
      display: flex;
      justify-content: center;
      align-content: center;
      text-align: center;
      flex-direction: column;
      background-color: transparent;
      border: none;
      transition: .3s all ease-in-out;
      &:hover{
        background-color: var(--color-white);
        box-shadow: 0px 7px 60px rgba($color: #7A7A7A, $alpha: .16);
      }
      .img {
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: var(--color-primary);
        border-radius: 50%;
        padding: 2%;
        margin: auto;
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
      }
      p {
        font-family: "regular";
        color: var(--color-fourth);
        font-size: 1rem;
      }
    }
  }
}
</style>