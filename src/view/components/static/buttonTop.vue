<template>
  <div>
      <transition name="fade">
    <button v-show="hight > 300" id="button" @click="go_up">
      <i class="bi bi-chevron-up"></i>
    </button>
    </transition>
  </div>
</template>

<script>
export default {
  name: "butto2Top",
  data() {
    return {
      hight: 0,
      scTimer: 0,
      class: 'show',
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll: function () {
      if (this.scTimer) return;
      this.scTimer = setTimeout(() => {
        this.hight = window.scrollY;
        clearTimeout(this.scTimer);
        this.scTimer = 0;
        
      }, 100);
    },
    go_up: function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
#button {
  display: inline-block;
  background-color: var(--color-white);
  border-radius: 10px;
  width: 40px;
  height: 40px;
  text-align: center;
  position: fixed;
  bottom: 40px;
  left: 30px;
  transition: background-color 0.5s, opacity 0.5s, visibility 0.5s;
  // opacity: 0;
  // visibility: hidden;
  z-index: 1000;
  border: 1px solid var(--color-primary);
  animation: move-toggs 3s linear infinite;

  &::after {
    font-weight: normal;
    font-style: normal;
    font-size: 2em;
    line-height: 50px;
    color: var(--color-primary);
  }

  i {
    color: var(--color-primary);
    margin: auto;
    font-size: 22px;
    transition: 0.3s all;
  }

  &:hover {
    background-color: var(--color-fourth);
    border-color: var(--color-fourth);
    cursor: pointer;
    i {
      color: var(--color-white);
    }
  }

  &:active {
    background-color: #555;
  }

  &.show {
    opacity: 1;
    visibility: visible;
  }
}
</style>

