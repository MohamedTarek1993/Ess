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
          v-for="(Questions, index) in Faq.Questions"
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
              {{ Questions.questions }}
            </button>
          </h2>
          <div
            id="collapseOne"
            :class="`accordion-collapse collapse ${index == 0 ? 'show' : ''}`"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              {{ Questions.answer }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Faq",
  data() {
    return {
      Faq: {
        title: "Frequently Asked Questions",
        text: "Our Engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
        Questions: [
          {
            questions: "How Can I contact with the manager ?",
            answer:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet.",
          },
          {
            questions: "How Can I contact with the manager ?",
            answer:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet.",
          },
          {
            questions: "How Can I contact with the manager ?",
            answer:
              "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam Voluptua. At Vero Eos Et Accusam Et Justo Duo Dolores Et Ea Rebum. Stet Clita Kasd Gubergren, No Sea Takimata Sanctus Est Lorem Ipsum Dolor Sit Amet.",
          },
        ],
      },
    };
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

