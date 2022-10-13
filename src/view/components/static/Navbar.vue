<template>
  <nav class="navbar navbar-expand-lg" id="navbar">
    <div class="container">
      <router-link class="navbar-brand" :to="{ name: 'Home' }">
        <img src="../../../assets/image/logo.png" alt="logo" />
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link :to="{ name: 'Home' }" class="nav-link">
              {{ $t("home") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'About' }" class="nav-link">
              {{ $t("about") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Projects' }" class="nav-link">
              {{ $t("Our_Projects") }}
            </router-link>
          </li>

          <li class="nav-item">
            <router-link :to="{ name: 'Blogs' }" class="nav-link">
              {{ $t("blog") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Liberary' }" class="nav-link">
              {{ $t("liberary") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Services' }" class="nav-link">
              {{ $t("Services") }}</router-link
            >
          </li>
          <li class="nav-item">
            <router-link :to="{ name: 'Contact' }" class="nav-link">
              {{ $t("contact") }}
            </router-link>
          </li>
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
  </nav>
  <!-- <nav>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-6">
            <div class="logo">
              <router-link class="header" :to="{ name: 'Home' }">
                <img src="../../../assets/image/logo.png" alt="logo" />
              </router-link>
            </div>
          </div>
          <div class="col-lg-8 col-6">
            <div class="nav-link">
              <ul v-show="!mobile">
                <router-link :to="{ name: 'Home' }" class="nav-link">
                  {{ $t("home") }}</router-link
                >
                <router-link :to="{ name: 'About' }" class="nav-link">
                  {{ $t("about") }}</router-link
                >
                <router-link :to="{ name: 'Projects' }" class="nav-link">
                  {{ $t("Our_Projects") }}
                </router-link>
                <router-link :to="{ name: 'Blogs' }" class="nav-link">
                  {{ $t("blog") }}</router-link
                >
                <router-link :to="{ name: 'Contact' }" class="nav-link">
                  {{ $t("contact") }}
                </router-link>
              </ul>
              <div class="dropdown lang" v-show="!mobile">
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
                  <div class="dropdown lang" v-show="mobile">
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
                    <ul
                      class="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
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
                </ul>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </nav> -->
</template>

<script>
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
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
    const html = document.documentElement; // returns the html tag
    html.setAttribute("lang", this.$i18n.locale);
  },
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale;
      const html = document.documentElement; // returns the html tag
      html.setAttribute("lang", locale);
      localStorage.setItem("lang", locale);
      location.reload();
    },
  },
}
</script>

<style lang="scss" scoped>
//start navbar

.navbar {
  background-color: var(--color-primary);
  z-index: 100;

  transition: 0.25s all ease-in-out;

  .navbar-brand {
    width: 170px;
    height: 90px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navbar-collapse {
    .navbar-nav {
      width: 85%;
      justify-content: center;
      .nav-item {
        transition: 0.35s all ease-in;
        position: relative;

        .nav-link {
          font-size: 1.2rem;
          font-family: "regular";
          color: #CAD6D0;
          padding-left: 1.5rem;
          padding-right: 1.5rem;
          position: relative;
          overflow: hidden;
          z-index: 1;
          transition: 0.25s all;
          &:hover {
            color: #fff;
          }
        }
        .nav-link.active {
          color: #fff;
          font-family: "bold";
          transition: 0.25s all ease-in-out;
          border-bottom: 1px solid var(--color-text);

          &:hover {
            color: #fff;
          }
        }
      }
    }

    .dropdown {
      widows: 20%;
      .dropdown-toggle {
        background-color: transparent;
        border: 1px solid white;
        font-size: 1rem;
        font-family: "regular";
        color: var(--color-white);
        i {
          margin-inline-end: 17%;
          font-size: 1.5rem;
        }
      }
      .dropdown-menu {
        min-width: 4rem;
        .dropdown-item {
          font-family: "regular";
          font-size: 0.8rem;
          color: var(--color-text);
        }
      }
    }
  }
}
.navbar.change {
  background-color: rgba($color: #f56542, $alpha: 0.7);
  .navbar-nav {
    width: 100%;
    .nav-item {
      position: relative;

      .nav-link {
        padding-right: 1.8rem;
        padding-left: 1.8rem;
        color: var(--color-white);
      }
    }
  }
}

/* hamburger icon */
.navbar .navbar-toggler {
  cursor: pointer;
  border: 1px solid var(--color-white);
  width: 1.8em !important;
  height: 1.8em !important;
  padding: 0 7px 2px 7px !important;
  outline: none !important;
}
.navbar .navbar-toggler-icon {
  transition: all 0.2s ease-out;
  transform: rotate(0 deg);
}
.navbar .navbar-toggler-icon,
.navbar .navbar-toggler-icon::before,
.navbar .navbar-toggler-icon::after {
  width: 1em !important;
  height: 2px !important;
  /* padding: 0 0 0 0.15em !important; */
  display: flex;
  background-image: none;
  background-color: var(--color-white);
  position: absolute !important;
  transition: all 0.2s ease-in;
}
.navbar .navbar-toggler-icon::before {
  content: "";
  display: block;
  top: -0.3em;
}
.navbar .navbar-toggler-icon::after {
  content: "";
  display: block;
  bottom: -0.3em;
}
.navbar .navbar-toggler:focus {
  /* outline: none !important; */
  box-shadow: none;
  cursor: pointer;
  border: 1px solid var(--color-white) !important;
  width: 1.8em !important;
  height: 1.8em !important;
  padding: 0 7px 2px !important;
}
.active-hamburger .navbar-toggler-icon {
  transition: 0.2s;
  transform: rotate(405deg); /*45+360 */
}
.active-hamburger .navbar-toggler-icon::before {
  top: 0;
  opacity: 0;
}
.active-hamburger .navbar-toggler-icon::after {
  transition: 0.2s;
  transform: rotate(-90deg);
  display: flex;
  justify-content: center;
  text-align: center;
  top: 0;
  left: 0;
}
/* hamburger icon */
//finish navbar
</style>

