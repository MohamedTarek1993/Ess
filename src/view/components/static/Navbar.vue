<template>
  <header>
    <nav>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-12">
            <div class="logo">
              <router-link class="header" :to="{ name: 'Home' }">
                <img src="../../../assets/image/logo.png" alt="logo" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-8 col-12">
            <div class="nav-link">
              <ul v-show="!mobile">
                <router-link :to="{ name: 'Home' }" class="link-navbar">
                  {{ $t("home") }}</router-link
                >
                <router-link :to="{ name: 'About' }" class="link-navbar">
                  {{ $t("about") }}</router-link
                >
                <router-link :to="{ name: 'Projects' }" class="link-navbar">
                  {{ $t("Our_Projects") }}
                </router-link>
                <router-link :to="{ name: 'Blogs' }" class="link-navbar">
                  {{ $t("blog") }}</router-link
                >
                <router-link :to="{ name: 'Contact' }" class="link-navbar">
                  {{ $t("contact") }}
                </router-link>
              </ul>
              <div class="dropdown lang">
                <a
                  class="btn dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-globe2"></i>
                </a>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                  <li>
                    <a
                      class="dropdown-item"
                      v-for="entry in languages"
                      :key="entry.title"
                      @click="changeLocale(entry.language)"
                      :iso="entry.flag"
                      v-bind:squared="false"
                    >
                      <flag :iso="entry.flag" v-bind:squared="false" />
                      {{ entry.title }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div @click="showMenu" v-show="mobile" class="mobile-menu">
      <i class="bi bi-list"></i>
      <transition name="mobile-icon">
        <ul v-show="mobileNav" class="mobile-nav">
         <span class="close">
            <i class="bi bi-x"></i>
          </span>
          <router-link :to="{ name: 'Home' }" class="link">{{
            $t("home")
          }}</router-link>
          <router-link :to="{ name: 'About' }" class="link">
            {{ $t("about") }}</router-link
          >
          <router-link :to="{ name: 'Projects' }" class="link">
            {{ $t("Our_Projects") }}
          </router-link>
          <router-link :to="{ name: 'Blogs' }" class="link">
            {{ $t("blog") }}
          </router-link>
          <router-link :to="{ name: 'Contact' }" class="link">
            {{ $t("contact") }}</router-link
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
      setting: {},
      profile: {},
      auth: false,
      languages: [
        { flag: "us", language: "en", title: "En" },
        { flag: "eg", language: "ar", title: "Ar" },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.checkScreen);
    this.checkScreen();
    // changeLocale(locale)
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", this.$i18n.locale);
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
    changeLocale(locale) {
      this.$i18n.locale = locale;
      const html = document.documentElement; // returns the html tag
      html.setAttribute("lang", locale);
      localStorage.setItem("lang", locale);
      location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  background: var(--color-primary);
  // padding: 0 25px;
  z-index: 99;
  //   display: flex;
  //   justify-content: space-between;

  nav {
    // display: flex;
    padding: 1% 0;
    position: fixed;
    top: 0;
    width: 100%;
    background: var(--color-primary);

    .logo {
      align-items: center;
      img {
        width: 130px;
        height: 52px;
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
          margin: 0 1rem;
          color: var(--color-sixth);
          text-decoration: none;
          transition: 0.25s all ease-in-out;
          &:hover {
            color: var(--color-white);
          }
        }
        .link-navbar.active {
          color: var(--color-white);
        }
      }
    }
    .dropdown {
      .dropdown-toggle {
        border: 1px solid var(--color-white);
        border-radius: 5px;
        transition: 0.25s all ease-in-out;
        &:after {
          color: var(--color-white);
          margin-right: 22%;
          transition: 0.25s all ease-in-out;
        }
        &:hover {
          background: var(--color-white);
          &:after {
            color: var(--color-primary);
          }
          i {
            color: var(--color-primary);
          }
        }
        i {
          color: white;
          transition: 0.25s all ease-in-out;
        }
      }
      .dropdown-menu {
        li {
          cursor: pointer;
          .dropdown-item {
            font-family: "regular";
            color: var(--color-secound);
            text-align: center;
          }
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
      color: var(--color-white);
      border: 1px solid var(--color-white);
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
    background: rgba($color: #18261e, $alpha: 0.88);
    top: 0;
    right: 0;
    .link {
      padding: 15px 0;
      color: white;
    }
    .close {
      right: 0;
      left: 20px;
      i {
      }
    }
  }

  //   animation of nav mobile
  .mobile-icon-enter-active,
  .mobile-icon-leave-active {
    transition: all 1s ease;
  }
  .mobile-icon-enter ,.mobile-icon-leave {
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