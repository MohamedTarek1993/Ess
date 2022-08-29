<template>
  <section class="counter_section" id="counter_section">
    <div class="container">
      <div class="boxes">
        <div class="box" v-for="(Statistic, index) in Statistics" :key="index">
          <div class="img">
            <img
              :src="Statistic.image"
              alt="counter"
            />
          </div>
          <div class="content">
            <div class="d-flex align-items-center justify-content-start">
              <i class="bi bi-plus-lg"></i>
              <div class="counter" :data-target="Statistic.number">{{Statistic.number}} </div>
            </div>
            <span class="head-categ"> {{ Statistic.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  name: "Counter",
  data() {
    return {
      Statistics: [ ],
    };
  },
 
   methods: {
    fetch_static_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/statistics").then(({ data }) => {
        this.Statistics = data.data;
        // console.log(this.about);
      });
    },
  },
  created() {
    this.fetch_static_data();
  },
   mounted() {
    const counters = document.querySelectorAll(".counter");
    counters.forEach((counter) => {
      counter.innerText = "0";

      const updateCounter = () => {
        const target = counter.getAttribute("data-target");
        const x = +counter.innerText;
        const increment = target / 400;
        if (x < target) {
          counter.innerText = `${Math.ceil(x + increment)}`;
          setTimeout(updateCounter, 1);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  },
};
</script>

<style lang="scss" scoped>
.counter_section {
  background: var(--color-primary);
  padding: 4% 0;
  margin: 3% 0;
  .boxes {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    flex: 1;
    .box {
      width: 33%;

      display: flex;
      flex-direction: row;
      align-items: center;
      .img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background: rgba($color: #fff, $alpha: 0.24);
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-inline-end: 4%;

        img {
          width: 27px;
          height: 22px;
        }
      }
      .content {
        i {
          color: var(--color-white);
          font-size: 1.5rem;
        }
        .counter {
          font-family: "semibold";
          color: var(--color-white);
          font-size: 2.5rem;
        }
        .head-categ {
          font-family: "regular";
          color: var(--color-sixth);
          font-size: 1.5rem;
        }
      }
    }
  }
}

@media (max-width: 425.98px) {
  .counter_section .boxes .box {
    width: 57%;
    align-items: start;
    margin-bottom: 3%;
  }
  .counter_section .boxes .box .content .counter {
    font-size: 1.5rem;
  }
  .counter_section .boxes .box .content .head-categ {
    font-size: 1rem;
  }
 
}
</style>
