<template>
  <section class="about_section">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ About.title }}</h2>
        <p>{{ About.text }}</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main-title">
            <h2>{{ About.why_title }}</h2>
            <p>{{ About.why_text }}</p>
          </div>
          <div class="boxes">
            <div class="box">
              <div class="icon">
                <img src="../../../assets/image/chooseus1.webp" alt="icon"
                />
              </div>
              <div class="text">
                <h6> {{ $t("Our Vission") }}</h6>
                <p>{{ About.our_vision_text }}</p>
              </div>
            </div>
             <div class="box">
              <div class="icon">
                <img src="../../../assets/image/chooseus2.webp" alt="icon"
                />
              </div>
              <div class="text">
                <h6> {{ $t("Our Mission ") }}</h6>
                <p>{{ About.our_mission_text }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="img">
            <img
              :src="About.image"
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
//import axios
import axios from "axios";
export default {
  name: "about us",
  data() {
    return {
      About: { },
    };
  },
  methods: {
    fetch_about_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/about").then(({ data }) => {
        this.About = data.data;
        // console.log(this.about);
      });
    },
  },
  created() {
    this.fetch_about_data();
  },
};
</script>

<style lang="scss" scoped>
.about_section {
  margin-top: 3%;
  .main-title-center {
    padding: 0 10%;
    p {
      text-align: center;
      padding: 0;
    }
  }
  .main-title {
  }
  .boxes {
    .box {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      .icon {
        width: 50px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba($color: #cad6d0, $alpha: 0.35);
        border-radius: 50%;
        padding: 8px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 2%;
        h6 {
          font-family: "semibold";
          color: var(--color-primary);
          font-size: 1.1rem;
          padding: 1% 0;
          margin-bottom: 0;
        }
        p {
          font-family: "regular";
          color: var(--color-fourth);
          font-size: 0.8rem;
          text-align: start;
          padding: 1% 0;
        }
      }
    }
  }
  .img {
    height: 350px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
//responsive

@media (max-width: 1023.98px) {
  .about_section {
    margin-top: 3%;
    .boxes .box .icon {
      width: 40px;
    }
  }
}
@media (max-width: 425.98px) {
  .main-title-center p,
  .main-title p {
    font-size: 0.9rem;
  }
  .about_section .img {
    height: 200px;
  }
}
</style>

