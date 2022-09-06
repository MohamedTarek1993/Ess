<template>
  <section
    class="testmonlies"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="content">
            <div class="main-title">
              <h6>{{ $t("Testimonials") }}</h6>
              <h2>{{ OpinionsSection.title }}</h2>
              <p>{{ OpinionsSection.text }}</p>
            </div>
            <swiper
              :loop="true"
              :autoplay="{
                delay: 1500,
                disableOnInteraction: false,
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
              :modules="modules"
              class="swiper"
            >
              <swiper-slide
                v-for="(opinions, index) in OpinionsSection.opinions"
                :key="index"
              >
                <div class="card">
                  <div class="img">
                    <img :src="opinions.image" />
                  </div>
                  <div class="quete">
                    <img src="../../../assets/image/quet.png" alt="quete" />
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
import "swiper/css";
//import axios
import axios from "axios";
import { Autoplay } from "swiper";
export default {
  name: "Testmonolise",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      OpinionsSection: {},
    };
  },
  setup() {
    return {
      modules: [Autoplay],
    };
  },
  methods: {
    fetch_opnion_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/opinionSection").then(({ data }) => {
        this.OpinionsSection = data.data;
        //  console.log(this.OpinionsSection);
      });
    },
  },
  created() {
    this.fetch_opnion_data();
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
        box-shadow: -15px 30px 60px rgba($color: #9a9a9a, $alpha: 0.22);
        height: 220px;
        .img {
          position: absolute;
          top: -30px;
          border-radius: 50%;
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
        .quete {
          padding: 26% 0 3%;
          img {
            width: 70%;
          }
        }
        h4 {
          font-family: "semibold";
          color: var(--color-primary);
          font-size: 1rem;
          padding: 2% 0;
          margin-bottom: 0;
        }
        h6 {
          font-family: "meduim";
          color: var(--color-fourth);
          font-size: 0.6rem;
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
  .map {
    padding-inline-start: 2rem;
    img {
      width: 100%;
    }
  }
}
@media (max-width: 1023.98px) {
  .testmonlies .map img {
    display: none;
  }
}
@media (max-width: 425.98px) {
  .main-title h2 {
    font-size: 1.2rem;
  }
  .main-title p {
    font-size: 1rem;
  }

  .testmonlies .content .swiper .card {
    margin-top: 7%;
  }
  .testmonlies .content .swiper .card .quete {
    padding: 15% 0 3%;
  }
}
</style>