<template>
  <div id="preloader" class="page-loader" v-if="!isloaded"></div>
</template>

<script>
export default {
  name: "page laoder",
  data() {
    return {
      isloaded: false,
    };
  },
  mounted() {
      document.onreadystatechange = () => {
        if (document.readyState == "complete") { 
          this.isloaded = true;
        } 
      }
    },
};
</script>

<style lang="scss" scoped>
#preloader {
    background-image: url(../../../assets/image/loader.svg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-color: #2e493a;
    background-size: 15%;
    height: 100vh;
    width: 100%;
    position: fixed;
    z-index: 1100;
}
</style>
