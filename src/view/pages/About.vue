
<template>
  <about-us />
  <service />
  <choose-us />
  <!-- <Counter /> -->
  <Together />
</template>

<script>
import aboutUs from "../components/ui/aboutUs.vue";
import Service from "../components/ui/Service.vue";
import chooseUs from "../components/ui/chooseUs.vue";
import Together from "../components/static/Together.vue";
// import Counter from "../components/ui/Counter.vue";

export default {
  name: "About",
  components: {
    aboutUs,
    Service,
    chooseUs,
    Together,
  },
};
</script>

<style>
</style>