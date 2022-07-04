<template>
  <Hero />
  <pranterSuccess />
  <Service />
  <choose-us />
  <ProjectSection />
  <Team />
  <Testmonolise />
  <blog-section />
  <Together />
</template>

<script>
import Hero from "../components/ui/Hero.vue";
import pranterSuccess from "../components/ui/pranterSuccess.vue";
import Service from "../components/ui/Service.vue";
import chooseUs from "../components/ui/chooseUs.vue";
import Project from "../components/ui/projectSection.vue";
import Testmonolise from "../components/ui/Testmonolise.vue";
import blogSection from "../components/ui/blogSection.vue";
import Together from "../components/static/Together.vue";
import Team from "../components/ui/Team.vue";
import ProjectSection from "../components/ui/projectSection.vue";

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
    Team,
    ProjectSection
},
};
</script>

<style  lang="scss" scoped>
</style>