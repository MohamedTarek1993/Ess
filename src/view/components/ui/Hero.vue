<template>
  <section class="hero_section">
    <div class="container">
      <div class="content">
        <div class="header">
          <h2 class="text">{{ header.title }}</h2>
          <p class="discription">{{ header.text }}</p>
          <div class="button">
            <router-link class="btn primary" :to="{ name: 'Contact' }"
              >Contact us</router-link
            >
          </div>
        </div>

        <div class="img">
          <img :src="require(`../../../assets/image/${header.image}.png`)" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  data() {
    return {
      header: {
        image: "hero",
        title:
          "ESS Is The Ideal Solutions Of The Power And Control System Solutions",
        text: "our engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
      },
    };
  },
};
</script>   

<style lang="scss" scoped>
.hero_section {
  background-color: var(--color-primary);
  height: 100vh;
  .content {
    display: flex;
    justify-content: space-between;
    align-content: start;
    flex-direction: row;
    padding: 3% 0 8%;
    .img {
      width: 50%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .header {
      width: 50%;
      padding: 12% 0 5%;
      .text {
        color: white;
        font-family: "bold";
        font-size: 2.4rem;
        line-height: 1.3;
      }
      .discription {
        color: var(--color-sixth);
        font-family: "regular";
        font-size: 1.2rem;
        line-height: 1.4;
      }
      .button {
        display: flex;
        justify-content: flex-start;
        align-content: center;
        width: 100%;
        margin-top: 8%;
        .primary {
          background-color: var(--color-white);
          font-family: "semibold";
          color: var(--color-primary);
          font-size: 1rem;
          padding: 1% 2%;
          width: 30%;
          border: 1px solid var(--color-sixth);
          transition: 0.3s all ease-in-out;
          &:hover {
            background-color: var(--color-primary);
            color: var(--color-white);
          }
        }
      }
    }
  }
}
@media (max-width: 1023.98px) {
  .hero_section {
    .content {
      .header {
        .text {
          font-size: 1.5rem;
        }
        .discription {
          font-size: 1.1rem;
        }
        .button {
          .primary {
            width: 52%;
          }
        }
      }
    }
  }
}
@media (max-width: 425.98px) {
  .hero_section {
    height: auto;
    .content .header {
      padding: 2% 0;
      .text {
        font-size: 1.3rem;
      }
      .discription {
        font-size: 0.8rem;
      }
    }
  }
}
</style>