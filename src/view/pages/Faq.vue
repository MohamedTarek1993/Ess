<template>
  <section class="faq">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ Faq.title }}</h2>
        <p>{{ Faq.text }}</p>
      </div>
      <div class="accordion" id="accordionExample">
        <div
          class="accordion-item"
          v-for="(question, index) in Faq.questions"
          :key="index"
        >
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              {{ question.question }}
            </button>
          </h2>
          <div
            id="collapseOne"
            :class="`accordion-collapse collapse ${index == 0 ? 'show' : ''}`"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ question.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Faq",
  data() {
    return {
      Faq: {},
    };
  },
    methods: {
   fetch_faq_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/faq").then(({ data }) => {
        this.Faq = data.data;
        console.log(this.Faq);
      });
    },
  },
  created(){
    this.fetch_faq_data();
  }
};
</script>

<style lang="scss" scoped>
.faq {
  margin-top: 10%;
  .main-title-center {
    p {
      padding: 0;
    }
  }
  .accordion {
    .accordion-item {
        margin-bottom: 3%;
        border: none;
      .accordion-header {
        .accordion-button {
            &:not(.collapsed){
                color: var(--color-primary);
                font-family: 'semibold';
                background: #F6F6F6;
                box-shadow: unset;
            }
        }
      }
      .accordion-collapse {
        .accordion-body {
            background: #F6F6F6;
            color: var(--color-fourth);
            font-family: 'regular';
        }
      }
    }
  }
}
</style>

