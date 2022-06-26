<template>
   <section class="together">
    <div class="container">
      <div class="row justify-content-center align-items-center text-center">
        <div class="col-8">
          <div class="logo">
            <img src="../../../assets/image/logo2.webp" alt="" />
          </div>
          <h2>Let's Build Something Genius Together</h2>
          <p>You Can Make You Appointment For Any Request Online Now</p>
          <div class="button">
            <router-link :to="{ name: 'Contact' }" class="secondary btn"
              >contact us</router-link
            >
          </div>
          <span> <strong>Or simply deal</strong> : +964-7726-100-178 </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
    name:'Together',

}
</script>

<style lang="scss" scoped>
.together {
  background-image: url(../../../assets/image/back.webp);
  padding: 3% 0;
  margin: 4% 0;
  .logo {
    img {
    }
  }
  h2 {
    color: var(--color-secound);
    font-family: "meduim";
    font-size: 2.22rem;
  }
  p {
    color: var(--color-fourth);
    font-family: "regular";
    font-size: 1.3rem;
  }
  span{
    color: var(--color-third);
    font-family: "regular";
    font-size: 1rem;
  }
  .button {
    justify-content: center;
    .btn {
      padding: 2%;
    }
  }
}
</style>