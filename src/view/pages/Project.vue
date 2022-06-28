<template>
  <section class="single_project">
    <div class="container">
      <div class="page-title">
        <div class="row">
          <div
            class="col-lg-8 col-md-8 col-sm-12 hidden-xs-down hidden-sm-down"
          >
            <ol class="breadcrumb">
              <li class="breadcrumb-item">
                <router-link :to="{ name: 'Home' }">{{
                  $t("home")
                }}</router-link>
              </li>
              <li class="breadcrumb-item active">
                <router-link to="#">{{ $t("project_detail") }}</router-link>
              </li>
            </ol>
          </div>
          <!-- end col -->
        </div>
        <!-- end row -->
      </div>
      <div class="upper_content">
        <div class="img">
          <img
            :src="
              require(`../../assets/image/${DetailsProjects.image_header}.png`)
            "
            alt="project"
          />
        </div>
        <h1>{{ DetailsProjects.title }}</h1>
        <p>{{ DetailsProjects.text }}</p>
      </div>
      <swiper
        :slidesPerView="3"
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
          '640': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '768': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '1024': {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }"
        :modules="modules"
        class="mySwiper"
      >
        <swiper-slide
          v-for="(images, index) in DetailsProjects.images"
          :key="index"
        >
          <div class="img">
            <img :src="require(`../../assets/image/${images.image}.png`)" />
          </div>
        </swiper-slide>
      </swiper>

      <div class="project_detials">
        <p v-html="DetailsProjects.description"></p>
      </div>

      <div class="lower_content">
        <div class="row align-items-center">
          <div class="col-lg-5 col-12">
            <div class="card_box">
              <h4>{{ $t("project_detail") }}</h4>
              <ul>
                <li>
                  {{ $t("Start Date") }} -
                  <span>{{ ProjectDetails.start_date }}</span>
                </li>
                <li>
                  {{ $t("Project Duration ") }} -
                  <span>{{ ProjectDetails.duration }}</span>
                </li>
                <li>
                  {{ $t("contractor ") }} -
                  <span>{{ ProjectDetails.client }}</span>
                </li>
                <li>
                  {{ $t("Project Partner ") }} -
                  <span
                    v-for="(contractor, index) in ProjectDetails.contractor"
                    :key="index"
                    >{{ contractor }},
                  </span>
                </li>
                <li>
                  {{ $t("Start Date") }} -
                  <span
                    v-for="(partner, index) in ProjectDetails.partner"
                    :key="index"
                    >{{ partner }},
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-7 col-12">
            <div class="ditals_img">
              <img
                :src="
                  require(`../../assets/image/${DetailsProjects.image_details}.png`)
                "
                alt="detials"
              />
            </div>
          </div>
        </div>
      </div>
  <Together />

    </div>
  </section>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper-bundle.css";

import Together from "../components/static/Together.vue";

export default {
  name: "Project",
  components: {
    Swiper,
    SwiperSlide,
    Together
},
  data() {
    return {
      DetailsProjects: {
        id: 1,
        image_header: "blog3",
        title:
          "Suwaira military airport low volrage panels and lighting system",
        text: "Our Engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
        images: [
          {
            image: "project1",
          },
          {
            image: "project2",
          },
          {
            image: "project3",
          },
          {
            image: "project4",
          },
        ],
        description: "this is content",
        image_details: "project2",
      },
      ProjectDetails: {
        start_date: "22 march , 2022",
        duration: "3 months",
        client: "Adel Ahmed",
        contractor: ["Zaid Shakir", "Haider Ghazi"],
        partner: ["Zaid Shakir", "Haider Ghazi"],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.single_project {
  margin-top: 10%;
  .page-title {
    padding: 3% 1%;
    background: rgba($color: #2e493a, $alpha: 0.03);
    margin-bottom: 3%;
    border-radius: 10px;
    .breadcrumb {
      float: none;
      text-align: left;
      padding: 0;
      color: var(--bg5);
      margin: 0;
      .breadcrumb-item {
        float: none;
        font-size: 12px;
        display: inline-block;
        a {
          font-family: "regular";
          color: var(--color-primary);
          font-size: 1rem;
        }
      }
      .breadcrumb-item.active {
        a {
          font-family: "bold";
        }
      }
    }
  }
  .upper_content {
    padding: 3% 0;
    .img {
      height: 500px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    h1 {
      font-family: "semibold";
      color: var(--color-primary);
      font-size: 2rem;
      padding-inline-end: 20%;
      margin: 3% 0;
    }
    p {
      color: var(--color-fourth);
      font-family: "regular";
      font-size: 1rem;
      padding-inline-end: 15%;
    }
  }
  .mySwiper {
    .img {
      height: 350px;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .project_detials {
    margin: 3% 0;
    :is(h2, h3, h4, h5, h6) {
      color: var(--color-primary);
      font-family: "bold";
      font-size: 1.3rem;
    }
    :is(p, span, a) {
      color: var(--color-fourth);
      font-family: "regular";
      font-size: 1rem;
    }
  }
  .lower_content {
    padding: 5% 0;
    position: relative;
    .row {
      .col-lg-5 {
        &:first-child {
          z-index: 999;
        }
      }
    }
    .card_box {
      background: var(--color-white);
      box-shadow: -5px 20px 25px rgba($color: #9f9f9f, $alpha: 0.16);
      padding: 5% 3%;
      width: 120%;
      border-radius: 10px;
      h4 {
        color: var(--color-secound);
        font-family: "bold";
        font-size: 1.4rem;
        margin-bottom: 7%;
      }
      ul {
        padding: 0;
        margin: 0;
        li {
            color: var(--color-fourth);
        font-family: "regular";
        font-size: 1.2rem;
        margin-bottom: 2% ;
          span {
               color: var(--color-secound);
        font-family: "regular";
        font-size: 1.2rem;
        margin-bottom: 2% ;
          }
        }
      }
    }

    .ditals_img {
      width: 100%;
      height: 350px;

      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
