<template>
  <section
    class="team_section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <div class="main-title-center">
        <span>{{ $t("Our Team") }}</span>
        <h2>{{ TeamSection.title }}</h2>
        <p>{{ TeamSection.text }}</p>
      </div>

      <swiper
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :breakpoints="{
          '320': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        :modules="modules"
        class="swiper"
      >
        <swiper-slide v-for="(team, index) in TeamSection.teams" :key="index">
          <div class="card">
            <div class="img">
              <img :src="team.image" />
            </div>
            <div class="content">
              <h2>{{ team.title }}</h2>
              <p>
                {{ team.text }}
              </p>
              <ul>
                <li>
                  <a :href="team.link_facebook" target="__blank">
                    <i class="bi bi-facebook"></i
                  ></a>
                </li>
                <li>
                  <a :href="team.link_twitter" target="__blank">
                    <i class="bi bi-twitter"></i
                  ></a>
                </li>
                <li>
                  <a :href="team.link_linkedin" target="__blank">
                    <i class="bi bi-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a :href="team.link_instgram" target="__blank">
                    <i class="bi bi-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-button-prev"><i class="bi bi-chevron-left"></i></div>
        <div class="swiper-button-next"><i class="bi bi-chevron-right"></i></div>

      </swiper>
    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css/pagination";
import "swiper/css/navigation";

//import axios
import axios from "axios";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
export default {
  name: "Team",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      TeamSection: {},
    };
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  methods: {
    fetch_team_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/teamSection").then(({ data }) => {
        this.TeamSection = data.data;
        console.log(this.TeamSection);
      });
    },
  },
  created() {
    this.fetch_team_data();
  },
};
</script>

<style lang="scss" scoped>
.team_section {
  padding: 5% 0;
  background: rgba($color: #2e493a, $alpha: 0.05);
  .main-title-center {
    p {
      padding: 1% 8%;
      text-align: center;
    }
  }
  .swiper {
    .card {
      position: relative;
      border: none;
      height: 400px;
      width: 240px;
      margin: 20px auto;
      background: transparent;
      .img {
        position: absolute;
        top: 0;
        left: 0;
        width: 240px;
        height: 300px;
        transition: all 0.5s;
        clip-path: circle(70.7% at 50% 50%);
        img {
          width: 100%;
          height: 100%;
        }
      }

      .content {
        position: absolute;
        left: 0;
        bottom: 50px;
        text-align: center;
        width: 100%;
        ul {
          opacity: 0;
          transition: 0.3s;
          transform: translateY(20px);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          flex-direction: row;
          flex-wrap: wrap;
          padding-left: 0;
          li {
            margin: 1%;
            a {
              i {
                color: var(--color-primary);
                font-size: 1.1rem;
              }
            }
          }
        }
        h2 {
          padding: 0;
          margin: 0;
          text-transform: uppercase;
          opacity: 0;
          transition: 0.3s;
          transform: translateY(20px);
          font-family: "bold";
          color: var(--color-primary);
          font-size: 1.4rem;
        }
        p {
          margin-bottom: 10px;
          text-transform: capitalize;
          opacity: 0;
          transition: 0.3s;
          transform: translateY(20px);
          font-family: "regular";
          color: var(--color-secound);
          font-size: 1rem;
        }
      }
      &:hover {
        .img {
          clip-path: circle(18.2% at 50% 38%);
        }
        .content {
          h2 {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.5s;
          }
          p {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.5s;
          }
          ul {
            opacity: 1;
            transform: translateY(0);
            transition-delay: 0.5s;
          }
        }
      }
    }
  }
}
@media (max-width: 1023.98px) {
  .team_section .swiper .card .img {
    width: 216px;
    height: 267px;
  }
}
</style>
