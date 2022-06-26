<template>
  <Hero />
  <pranterSuccess />
  <Service />
  <choose-us />
  <Projects />
  <Testmonolise />
  <blog-section />
  <Together />
</template>

<script>
import Hero from "../components/ui/Hero.vue";
import pranterSuccess from "../components/ui/pranterSuccess.vue";
import Service from "../components/ui/Service.vue";
import chooseUs from "../components/ui/chooseUs.vue";
import Project from "../components/ui/Project.vue";
import Testmonolise from "../components/ui/Testmonolise.vue";
import blogSection from "../components/ui/blogSection.vue";
import Together from "../components/static/Together.vue";

export default {
  name: "Home",
  components: {
    Hero,
    pranterSuccess,
    Service,
    chooseUs,
    Project,
    Testmonolise,
    blogSection,
    Together,
  },
};
</script>

<style  lang="scss" scoped>
</style>