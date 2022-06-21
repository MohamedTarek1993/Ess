<template>
  <section class="choose_us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main-title">
            <span>Why Us ?</span>
            <h2>{{ why.title }}</h2>
            <p>{{ why.text }}</p>
          </div>
          <ul>
            <li v-for="(WhyList, index) in why.WhyList" :key="index">
              {{ WhyList.title }}
            </li>
          </ul>
          <div class="button">
            <router-link class="secondary" to="#">Discover more</router-link>
          </div>
        </div>
        <div class="col-lg-6 col-12">
          <div class="card_box">
            <div class="row">
              <div
                class="col-lg-6 col-12"
                v-for="(WhyCard, index) in why.WhyCard"
                :key="index"
              >
                <div class="card">
                  <div class="img">
                    <img
                      :src="
                        require(`../../../assets/image/${WhyCard.image}.png`)
                      "
                    />
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
export default {
  name: "chooseUs",
  components: {},
  data() {
    return {
      why: {
        title: "Why Choosing ESS ?",
        text: "Why Would You Not Want To Have A Qualified Team To Take Charge In Designing And Implementing Your Dream Project, A Team That Will Grant You Quality And Satisfaction, A Team That Will Make Sure That Everything Will Go As Planned And Imagined By You.",
        WhyList: [
          {
            title:
              "Our Engineering office is your right destination when you are looking for professional designs",
          },
          {
            title: "we are devoting years of experience",
          },
          {
            title:
              "When you are looking for electrical solutions designs Our Engineering office is your right destination ",
          },
          {
            title:
              "Our Engineering office is your right destination when you are looking for professional designs",
          },
        ],
        WhyCard: [
          {
            id: "1",
            image: "choose1",
            title: "Professionalism At Work",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "2",
            image: "choose2",
            title: "Reach The Final Goal",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "3",
            image: "choose3",
            title: "Commitment to delivery times",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
          {
            id: "4",
            image: "choose4",
            title: "Providing the best solutions",
            text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.choose_us {
  background-color: rgba($color: #2e493a, $alpha: 0.3);
  padding: 4% 0;
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
  ul {
    padding-left: 0px;
    list-style-image: url(../../../assets/image/shape.png);
    li{
      font-family: "meduim";
        color: var(--color-primary);
        font-size: .8rem;
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
      padding: 3% 2%;
      width: 40%;
      border: 1px solid var(--color-sixth);
      border-radius: 30px;
      border-top-left-radius: 0px;
      transition: 0.3s all ease-in-out;
      text-decoration: none;
      text-align: center;
      &:hover {
        background-color: var(--color-white);
        color: var(--color-primary);
        border-radius: 0px;
      }
    }
  }
  .card_box {
    .card {
      display: flex;
      justify-content: start;
      align-items: flex-start;
      padding: 7% 3%;
      margin-bottom: 3%;
      .img {
        width: 50px;
        height: 50px;
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
        font-size: 1rem;
        padding: 8% 0 4%;
      }
      p {
        font-family: "regular";
        color: var(--color-fourth);
        font-size: 0.8rem;
        text-align: start;
      }
    }
  }
}
</style>