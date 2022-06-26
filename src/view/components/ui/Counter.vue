<template>
  <section class="counter_section" id="counter_section">
    <div class="container">
      <div class="boxes" data-aos="fade-up" data-aos-duration="3000">
        <div class="box">
          <div class="img">
            <img
              :src="require(`../../../assets/image/${Statistics.image}.webp`)"
              alt="counter"
            />
          </div>
          <div class="content">
            <i class="bi bi-plus-lg"></i>
            <div id="counter" class="counter" data-target="200">
              {{ Statistics.number }}
            </div>
            <span class="head-categ"> {{ Statistics.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Counter",
  

  
};
</script>

<style lang="scss" scoped>
.counter_section {
  .boxes {
    .box {
      .img {
        img {
        }
      }
      .content {
        i {
        }
        .counter {
        }
        .head-categ {
        }
      }
    }
  }
}
</style>
