<template>
  <section class="testmonlies">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="content">
            <div class="main-title">
              <span> Testimonials</span>
              <h2>{{ OpinionsSection.title }}</h2>
              <p>{{ OpinionsSection.text }}</p>
            </div>

            <swiper
              :slidesPerView="2"
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
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
              }"
              class="swiper"
            >
              <swiper-slide
                v-for="(opinions, index) in OpinionsSection.opinions"
                :key="index"
              >
                <div class="card">
                  <div class="img">
                    <img
                      :src="
                        require(`../../../assets/image/${opinions.image}.png`)
                      "
                    />
                  </div>
                  <div class="quete">
                    <img src="../../../assets/image/quet.png" alt="quete">
                  </div>
                  <h4>{{ opinions.title }}</h4>
                  <h6>{{ opinions.address }}</h6>
                  <p>{{ opinions.text }}</p>
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="map">
            <img src="../../../assets/image/Map.png" alt="maps" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
// Import Swiper styles
import "swiper/swiper-bundle.css";
export default {
  name: "Testmonolise",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      OpinionsSection: {
        title: "Our Customers Opinions",
        text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        opinions: [
          {
            id: "1",
            image: "person2",
            title: "Ahmed Elsayed",
            address: "Baghdad , Iraq",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "2",
            image: "person1",
            title: "Ohoud Mohamed",
            address: "Baghdad , Iraq",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "1",
            image: "person2",
            title: "Ahmed Elsayed",
            address: "Baghdad , Iraq",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "2",
            image: "person1",
            title: "Ohoud Mohamed",
            address: "Baghdad , Iraq",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.testmonlies {
  padding: 5% 0;
  .content {
    .main-title {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 4%;
      span {
        color: var(--color-primary);
        font-size: 0.9rem;
        font-family: "regular";
        position: relative;
        &::after {
          position: absolute;
          width: 15px;
          height: 3px;
          color: var(--color-primary);
          top: 0;
          left: 0;
        }
      }
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
        text-align: start;
        padding: 3% 0;
      }
    }
    .swiper {
      .card {
        display: flex;
        position: relative;
        justify-content: center;
        align-items: center;
        padding: 7% 3%;
        margin-top: 14%;
        border: none;
        border-radius: 10px;
        box-shadow: -15px 30px 60px rgba($color: #9A9A9A, $alpha: .22);
        .img {
            position: absolute;
            top: -30px;
        
           left: 36%;
          width: 80px;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .quete{
            padding: 26% 0 3%;
            img{
                width: 70%;
            }
        }
        h4 {
          font-family: "semibold";
          color: var(--color-primary);
          font-size: 1rem;
          padding: 2% 0 ;
          margin-bottom: 0;
        }
        h6 {
              font-family: "meduim";
          color: var(--color-fourth);
          font-size: .6rem;
        }
        p {
          font-family: "regular";
          color: var(--color-fourth);
          padding: 0 2%;
          font-size: 0.8rem;
          text-align: center;
        }
      }
    }
  }
  .map{
    padding-inline-start: 2rem;
    img{
        width: 100%;
    }
  }
}
</style>