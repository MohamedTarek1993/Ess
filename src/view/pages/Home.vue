<template>
  <Hero />
  <pranterSuccess />
  <Service />
</template>

<script>
import Hero from "../components/ui/Hero.vue";
import pranterSuccess from "../components/ui/pranterSuccess.vue";
import Service from "../components/ui/Service.vue";


export default {
  name: "Home",
  components: {
    Hero,
    pranterSuccess,
    Service
  },
};
</script>

<style  lang="scss" scoped>
</style>