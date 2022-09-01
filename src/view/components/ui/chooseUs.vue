<template>
  <section class="choose_us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main-title">
            <h6>{{ $t("Why_Us") }}</h6>
            <h2>{{ why.title }}</h2>
            <p>{{ why.text }}</p>
          </div>
          <ul>
            <!-- <li v-for="(WhyList, index) in why.WhyList" :key="index">
              {{ WhyList.title }}
            </li> -->
            <li>{{ why.point_1 }}</li>
            <li>{{ why.point_2 }}</li>
            <li>{{ why.point_3 }}</li>
            <li>{{ why.point_4 }}</li>
          </ul>
          <div class="button">
            <router-link class="secondary" :to="{ name: 'About' }">{{
              $t("Discover_more")
            }}</router-link>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="card_box">
            <div class="row">
              <div
                class="col-lg-6 col-md-6 col-12 xd"
                v-for="(WhyCard, index) in why.why_cards"
                :key="index"
              >
                <div class="card">
                  <div class="img">
                    <img :src="WhyCard.image" />
                  </div>
                  <h4>{{ WhyCard.title }}</h4>
                  <p>{{ WhyCard.text }}</p>
                </div>
              </div>
            </div>
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
  name: "chooseUs",
  components: {},
  data() {
    return {
      why: {},
    };
  },
  methods: {
    fetch_choise_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/whySection").then(({ data }) => {
        this.why = data.data;
        //  console.log(this.why);
      });
    },
  },
  created() {
    this.fetch_choise_data();
  },
};
</script>

<style lang="scss" scoped>
.choose_us {
  background-color: rgba($color: #2e493a, $alpha: 0.03);
  padding: 4% 0;

  ul {
    padding-left: 0px;
    list-style-image: url(../../../assets/image/shape.png);
    li {
      font-family: "meduim";
      color: var(--color-primary);
      font-size: 0.8rem;
      margin-bottom: 2%;
    }
  }
  .button {
    display: flex;
    justify-content: flex-start;
    align-content: center;
    width: 100%;
    margin-top: 8%;
    .secondary {
      background-color: var(--color-primary);
      font-family: "semibold";
      color: var(--color-white);
      font-size: 1rem;
      padding: 2% 2%;
      width: 40%;
      border: 1px solid var(--color-sixth);
      border-radius: 0px;
      transition: 0.3s all ease-in-out;
      text-decoration: none;
      text-align: center;
      &:hover {
        background-color: var(--color-white);
        color: var(--color-primary);
        border-radius: 30px;
        border-top-left-radius: 0px;
      }
    }
  }
  .card_box {
    .xd {
      &:nth-child(odd) {
        .card {
          transform: translateY(-26px);
        }
      }
    }

    .card {
      display: flex;
      transform: translateY(0px);
      justify-content: start;
      align-items: flex-start;
      padding: 7% 3%;
      margin-bottom: 3%;
      border: none;
      box-shadow: 0px 12px 48px rgba($color: #6a6a6a, $alpha: 0.16);
       height: 300px;
      .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba($color: #2e493a, $alpha: 0.1);
        padding: 2%;
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
        text-align: start;
      }
    }
  }
}
@media (max-width: 1023.98px) {
  .choose_us .button .secondary {
    padding: 1%;
  }
  .choose_us .card_box {
    margin-top: 4%;
  }
}
@media (max-width: 425.98px) {
  .main-title h2 {
    font-size: 1.1rem;
  }
  .main-title-center p {
    font-size: 0.9rem;
  }
}
</style>