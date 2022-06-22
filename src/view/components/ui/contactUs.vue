<template>
  <section class="contact_section">
    <div class="container">
      <div class="img">
        <img
          :src="require(`../../../assets/image/${Statistics.image}.png`)"
          alt="background"
        />
      </div>
      <div class="box">
        <div class="logo">
          <img src="../../../assets/image/logo2.png" alt="logo" />
        </div>
        <h2>{{ Statistics.title }}</h2>
        <p>{{ Statistics.text }}</p>
        <div class="button">
          <router-link class="btn secondary" :to="{ name: 'Contact' }"
            >contact us
          </router-link>
        </div>
        <span> <strong>Or simply deal</strong> : {{ Statistics.number }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact us",
  data() {
    return {
      Statistics: {
        image: "back",
        title: "Lets Build Something Genius Together",
        text: "You Can Make You Appointment For Any Request Online Now",
        number: "+964-7726-100-178",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.contact_section {
  position: relative;
  padding: 3% 0;
  .img {
    img {
      width: 100%;
    }
  }
  .box {
    position: absolute;
    top: -34px;
    bottom: 23px;
    left: 28%;
    right: 0;
    display: flex;
    justify-content: center;
    align-content: center;
    flex-direction: column;
    .logo {
      img {
      }
    }
    h2{
          color: var(--color-secound);
        font-family: "meduim";
        font-size: 1.22rem;
    }
    p{
          color: var(--color-fourth);
        font-family: "regular";
        font-size:.71rem;
    }
  .button {
    justify-content: center ;
    .btn {
      padding: 1%;
      width: 30%;
    }
  }
    span{
        font-family: 'regular';
        font-size: 1rem;
        color: var(--color-third);

    }
  }
}
</style>