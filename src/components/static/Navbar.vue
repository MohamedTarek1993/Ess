<template>
  <header>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="logo">
              <router-link class="header" :to="{ name: 'Home' }">
                <img src="../../assets/image/logo.png" alt="logo" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="nav-link">
              <ul v-show="!mobile">
                <router-link :to="{ name: 'Home' }" class="link-navbar active">
                  Home</router-link
                >
                <router-link :to="{ name: 'About' }" class="link-navbar">
                  About</router-link
                >
                <router-link :to="{ name: 'Projects' }" class="link-navbar">
                  Our Projects
                </router-link>
                <router-link :to="{ name: 'Blogs' }" class="link-navbar">
                  Blogs</router-link
                >
                <router-link :to="{ name: 'Contact' }" class="link-navbar">
                  Contact
                </router-link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div @click="showMenu" v-show="mobile" class="mobile-menu">
      <i class="bi bi-list"></i>
      <transition name="mobile-icon">
        <ul v-show="mobileNav" class="mobile-nav">
          <router-link :to="{ name: 'Home' }" class="link"> Home</router-link>
          <router-link :to="{ name: 'About' }" class="link"> About</router-link>
          <router-link :to="{ name: 'Projects' }" class="link">
            Projects
          </router-link>
          <router-link :to="{ name: 'Blogs' }" class="link">
            Blogs
          </router-link>
          <router-link :to="{ name: 'Contact' }" class="link">
            Contact</router-link
          >
        </ul>
      </transition>
    </div>
  </header>
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
  },
  methods: {
    checkScreen() {
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 1023) {
        this.mobile = true;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
    },
    showMenu() {
      this.mobileNav = !this.mobileNav;
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  direction: ltr;
  background: transparent;
  // padding: 0 25px;
  z-index: 99;
  //   display: flex;
  //   justify-content: space-between;

  nav {
    // display: flex;
    padding: 1% 0;

    .logo {
      align-items: center;
      img {
        width: 100px;
        height: 60px;
      }
    }
    .nav-link {
      position: relative;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      ul {
        margin: 0;
        padding: 0;
        width: 100%;
        .link-navbar {
          font-family: "bold";
          font-size: 1rem;
          text-transform: capitalize;
          margin-right: 2%;
          color: var(--color-sixth);
          transition:.25s all ease-in-out;
          &:hover {
            color: var(--color-white);
          }
        }
        .link-navbar.active {
          color: var(--color-white);
        }
      }
    }
  }
  .mobile-menu {
    cursor: pointer;
    position: absolute;
    top: 32px;
    right: 25px;
    height: 35px;
    width: 35px;
    i {
      font-size: 30px;
      color: var(--color-primary);
      border: 1px solid var(--color-secound);
      border-radius: 8px;
    }
  }
  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100%;
    background: #303030;
    top: 0;
    right: 0;
    .link {
      padding: 15px 0;
      color: white;
    }
  }

  //   animation of nav mobile
  .mobile-icon-enter-active,
  .mobile-icon-leave-active {
    transition: all 1s ease;
  }
  .mobile-icon-enter {
    transform: translateX(+250px);
  }
  .mobile-icon-enter-to {
    transform: translateX(0px);
  }
  .mobile-icon-leave-to {
    transform: translateX(+250px);
  }
}
</style>