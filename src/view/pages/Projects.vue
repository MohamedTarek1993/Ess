<template>
  <section class="project">
    <div class="main-title-center">
      <h2>{{ ProjectsSection.title }}</h2>
      <p>{{ ProjectsSection.text }}</p>
    </div>

    <div class="contact">
      <h2>{{ $t("title_project") }}</h2>
      <p>{{ $t("text_project") }}</p>
      <div class="button">
        <router-link class="secondary btn" :to="{ name: 'Contact' }">{{
          $t("Contact_Us")
        }}</router-link>
      </div>
    </div>

    <Testmonolise />
  </section>
</template>

<script>
import Testmonolise from "../components/ui/Testmonolise.vue";
export default {
  name: "Project",
  components: {
    Testmonolise,
  },
  data() {
    return {
      ProjectsSection: {
        title: "The Best Projects We Have Completed",
        text: "Our Engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  margin-top: 10%;
    .main-title-center{
      p{
        padding: 1% 15%;
        text-align: center;
      }
    }

  .contact {
    padding: 7% 5%;
    background: url(../../assets/image/back1.png);
    background-position: center;
    text-align: end;
    margin: 3% 0;
    h2 {
      color: var(--color-primary);
      font-family: "bold";
      font-size: 2.3rem;
    }
    p {
      color: var(--color-fourth);
      font-family: "regular";
      font-size: 1.5rem;
    }
    .button {
      justify-content: flex-end;
      margin-top: 2%;
      width: 76%;

      .btn {
        padding: 1%;
        width: 20%;
      }
    }
  }
}
</style>

