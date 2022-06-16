<template>
  <section class="choose_us">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main-title">
            <span>{{ head.chooseUs }}</span>
            <h2>{{ title.chooseUs }}</h2>
            <p>{{ description.chooseUs }}</p>
          </div>
          <ul>
            <li :post="post" v-for="(post, index) in chooseList" :key="index">
              {{ title.chooseList }}
            </li>
          </ul>
          <div class="button">
            <router-link to="#">Discover more</router-link>
          </div>
        </div>
        <card-choose
          class="col-lg-6 col-12"
          :post="post"
          v-for="(post, index) in cardChoose"
          :key="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import cardChoose from "../static/cardChoose.vue";
export default {
  name: "chooseUs",
  components: {
    cardChoose,
  },
  data() {
    return {
      chooseUs: {
        head: "Why Us ?",
        title: "Why Choosing ESS ?",
        description:
          "Why Would You Not Want To Have A Qualified Team To Take Charge In Designing And Implementing Your Dream Project, A Team That Will Grant You Quality And Satisfaction, A Team That Will Make Sure That Everything Will Go As Planned And Imagined By You.",
      },
      chooseList: [
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
      cardChoose: [
        {
          img: "choose1",
          title: "Professionalism At Work",
          description:
            "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        },
        {
          img: "choose2",
          title: "Reach The Final Goal",
          description:
            "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        },
        {
          img: "choose3",
          title: "Commitment to delivery times",
          description:
            "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        },
        {
          img: "choose4",
          title: "Providing the best solutions",
          description:
            "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>