<template>
  <section class="hero_section">
    <div class="container">
      <div class="header">
        <h2 class="text">{{post.heroTitle}}</h2>
        <p>{{post.heroDescription}}</p>
        <div class="button">
          <router-link :to="{ name: 'Contact' }">Contact us</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: Hero,
  data() {
    return {
      heroSection: {
        background: "",
        heroTitle:
          "ESS Is The Ideal Solutions Of The Power And Control System Solutions",
        heroDescription:
          "our engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
      },
    };
  },
};
</script>   

<style>
</style>