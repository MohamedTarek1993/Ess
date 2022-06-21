<template>
  <Hero />
  <pranterSuccess />
  <Service />
  <choose-us />
  <Projects />
</template>

<script>
import Hero from "../components/ui/Hero.vue";
import pranterSuccess from "../components/ui/pranterSuccess.vue";
import Service from "../components/ui/Service.vue";
import chooseUs from "../components/ui/chooseUs.vue";
import Project from "../components/ui/Project.vue";


export default {
  name: "Home",
  components: {
    Hero,
    pranterSuccess,
    Service,
    chooseUs,
    Project,
  },
};
</script>

<style  lang="scss" scoped>
</style>