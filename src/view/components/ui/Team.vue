<template>
  <section class="team_section">
    <div class="container">
      <div class="main-title-center">
        <span>{{$t("Our Team")}}</span>
        <h2>{{ TeamSection.title }}</h2>
        <p>{{ TeamSection.text }}</p>
      </div>

      <swiper
        :slidesPerView="4"
        :spaceBetween="30"
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
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }"
        class="swiper"
      >
        <swiper-slide v-for="(team, index) in TeamSection.team" :key="index">
          <div class="card">
            <div class="img">
              <img :src="require(`../../../assets/image/${team.image}.png`)" />
            </div>
            <div class="content">
              <h2>{{ team.title }}</h2>
              <p>
                {{ team.text }}
              </p>
              <ul>
                <li>
                  <a href="{{team.social_team.link_facebook}}" target="__blank">
                    <i class="bi bi-facebook"></i
                  ></a>
                </li>
                <li>
                  <a href="{{team.social_team.link_twitter}}" target="__blank">
                    <i class="bi bi-twitter"></i
                  ></a>
                </li>
                <li>
                  <a href="{{team.social_team.link_linkedin}}" target="__blank">
                    <i class="bi bi-linkedin"></i
                  ></a>
                </li>
                <li>
                  <a href="{{team.social_team.link_instgram}}" target="__blank">
                    <i class="bi bi-instagram"></i
                  ></a>
                </li>
              </ul>
            </div>
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
  name: "Team",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      TeamSection: {
        title: "Meet Our Team Of Experts",
        text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        team: [
          {
            id: "1",
            image: "team1",
            title: "Haider  Ghazi",
            text: "Control and systems Engineer specialized in Low voltage power and control systems",
            social_team: {
              link_facebook: "#",
              link_twitter: "#",
              link_linkedin: "#",
              link_instgram: "#",
            },
          },
          {
            id: "2",
            image: "team2",
            title: "Haider  Ghazi",
            text: "Control and systems Engineer specialized in Low voltage power and control systems",
            social_team: [
              {
                link_facebook: "#",
                link_twitter: "#",
                link_linkedin: "#",
                link_instgram: "#",
              },
            ],
          },
          {
            id: "3",
            image: "team3",
            title: "Haider  Ghazi",
            text: "Control and systems Engineer specialized in Low voltage power and control systems",
            social_team: [
              {
                link_facebook: "#",
                link_twitter: "#",
                link_linkedin: "#",
                link_instgram: "#",
              },
            ],
          },
          {
            id: "4",
            image: "team4",
            title: "Haider  Ghazi",
            text: "Control and systems Engineer specialized in Low voltage power and control systems",
            social_team: [
              {
                link_facebook: "#",
                link_twitter: "#",
                link_linkedin: "#",
                link_instgram: "#",
              },
            ],
          },
        ],
      },
    };
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
          ul{
              opacity: 1;
            transform: translateY(0);
            transition-delay: 0.5s;
          }
        }
      }
    }
  }
}
@media (max-width: 1023.98px){
  .team_section .swiper .card .img{
      width: 216px;
    height: 267px
  }
}
</style>
