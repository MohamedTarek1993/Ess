<template>
  <section class="faq">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ Faq.title }}</h2>
        <p>{{ Faq.text }}</p>
      </div>

      <div class="accordion" id="accordionExample">
        <div class="accordion-item"
        v-for="(question, index) in Faq.questions"
          :key="index">
          <h2 class="accordion-header" :id="`heading${index}`">
            <button
              :class="`accordion-button ${index == 0 ? '' : 'collapsed'}`"
              type="button"
              data-bs-toggle="collapse"
              :data-bs-target="`#collapse${index}`"
              aria-expanded="true"
              :aria-controls="`collapse${index}`"
            >
              {{ question.question }}
            </button>
          </h2>
          <div
            :id="`collapse${index}`"
            :class="`accordion-collapse collapse ${index == 0 ? 'show' : ''}`"
            :aria-labelledby="`heading${index}`"
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
  created() {
    this.fetch_faq_data();
  },
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
          color: var(--color-primary);
          font-family: "semibold";
          background: #f6f6f6;
          box-shadow: unset;
        }
      }
      .accordion-collapse {
        .accordion-body {
          background: #f6f6f6;
          color: var(--color-fourth);
          font-family: "regular";
        }
      }
    }
  }
}
</style>

