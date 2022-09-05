<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-3 col-md-6 col-12">
          <div class="logo">
            <router-link :to="{ name: 'Home' }">
              <img src="../../../assets/image/logo.png" alt="" />
            </router-link>
          </div>
          <div class="description">
            <p>
              {{ sitting.text }}
            </p>
            <ul class="social_icon">
              <li>
                <a target="__blank" :href="sitting.link_facebook">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>

              <li>
                <a target="__blank" :href="sitting.link_instgram">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>

              <li>
                <a target="__blank" :href="sitting.link_twitter">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a target="__blank" :href="sitting.link_linkedin">
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="important-information">
            <h2 class="text">{{ $t("Addresses") }}</h2>
            <div class="d-flex">
              <p class="email_footer">{{ $t("Address") }} :</p>
              <p class="data_footer">
                {{ sitting.address }}
              </p>
            </div>
            <div class="d-flex">
              <p class="email_footer">{{ $t("Phone Num") }} :</p>
              <p class="data_footer">
                <a
                  v-for="(number, index) in sitting.numbers"
                  :key="index"
                  :href="'mailto:' + number"
                  >{{ number }}</a
                >
              </p>
            </div>
            <div class="d-flex">
              <p class="email_footer">{{ $t("E-mail") }} :</p>
              <p class="data_footer">
                <a
                  v-for="(email, index) in sitting.emails"
                  :key="index"
                  :href="'mailto:' + email"
                  >{{ email }}</a
                >
              </p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="important-information">
            <h2 class="text">{{ $t("Quick Links") }}</h2>
            <ul class="link">
              <li>
                <router-link class="link_footer" :to="{ name: 'Home' }">
                  {{ $t("home") }}</router-link
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Home' }">
                  {{ $t("Our_Projects") }}</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Contact' }">{{
                  $t("contact")
                }}</routerLink>
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Privacy' }">
                  {{ $t("privacy") }}</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'About' }">
                  {{ $t("about") }}</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Blogs' }">{{
                  $t("blog")
                }}</routerLink>
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Faq' }">
                  {{ $t("faq") }}</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Terms' }">
                  {{ $t("terms") }}</routerLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="important-information">
            <h2 class="text">{{ $t("Newsletter") }}</h2>
            <form class="form_footer">
              <input
                type="email"
                class="form-control"
                :placeholder="$t('email_address')"
                v-model="email"
              />
              <div class="button">
                <button
                  class="btn secondary"
                  @click="fetch_subscripe_data"
                  type="button"
                >
                  {{ $t("Subscripe") }}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="lower_footer">
      <div class="left_side">
        <p>All copyright reserved@ESS 2022</p>
      </div>
      <div class="right_slide">
        Made With by <a href="https://crazyideaco.com">crazy idea</a>
        <br />
        Think Out of the box
      </div>
    </div>
  </footer>
</template>

<script>
import axios from "axios";
import Swal from "sweetalert2";
export default {
  name: "Footer",
  data() {
    return {
      sitting: {},
      email: "",
    };
  },
  methods: {
    fetch_sittengs_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/sitting").then(({ data }) => {
        this.sitting = data.data;
        // console.log(this.about);
      });
    },
    fetch_subscripe_data() {
      let data = {
        email: this.email,
      };
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.post("/v1/dashboard/newsletter", data).then(({ data }) => {
        if (data.status == true) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: data.msg,
            timer: 1500,
          });
        } else {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: data.message,
            timer: 1500,
          });
        }
      });
    },
  },
  created() {
    this.fetch_sittengs_data();
  },
};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--color-secound);
  margin-top: 2%;
  padding: 3% 0 1%;
  .logo {
    width: 8.125rem;
    height: 3.313rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .description {
    padding-top: 4%;
    p {
      color: var(--color-white);
      font-family: "regular";
      font-size: 1.1rem;
      line-height: 1.5;
    }
  }
  .social_icon {
    position: relative;
    padding-top: 3%;
    padding-left: 0;
    display: flex;
    justify-content: flex-start;
    align-items: start;
    flex-direction: row;
    flex-wrap: wrap;
    li {
      width: 20%;

      a {
        i {
          color: var(--color-sixth);
          transition: 0.25s color ease-in-out;
        }
        &:hover {
          i {
            color: var(--color-white);
          }
        }
      }
    }
  }
  .important-information {
    padding-top: 3%;
    .d-flex {
      align-items: start;
      justify-content: flex-start;
      flex-direction: row;
      p {
        &:first-child {
          // width: 30%;
          font-size: 0.8rem;
          color: var(--color-white);
          font-family: "bold";
        }
        &:last-child {
          // width: 70%;
          display: flex;
          justify-content: start;
          align-items: flex-start;
          flex-direction: column;
          padding-inline-start: 3%;
          a {
            color: var(--color-sixth);
            padding-bottom: 3%;
            font-family: "regular";

            font-size: 0.9rem;
          }
        }
      }
    }
    p {
      color: var(--color-sixth);
      font-family: "regular";
      padding-top: 9%;
      font-size: 0.9rem;

      span {
        font-size: 1.1rem;
        color: var(--color-white);
        font-family: "bold";
      }
      a {
        color: var(--color-sixth);
        font-family: "regular";
      }
    }
    .link {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      padding-top: 9%;
      padding-left: 0;
      width: 100%;
      li {
        width: 50%;
        margin-bottom: 4%;

        .link_footer {
          font-family: "meduim";
          color: var(--color-sixth);
          font-size: 1rem;
          width: 100%;
        }
      }
    }
    .form_footer {
      padding-top: 5%;
      .form-control {
        background: var(--color-sixth);
        &::placeholder {
          font-family: "regular";
          color: white;
        }
      }
    }
  }
  .lower_footer {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    padding: 2% 7% 0%;
    border-top: 1px solid #fff;

    .left_side {
      p {
        color: var(--color-sixth);
        font-family: "regular";
        font-size: 1rem;
      }
    }
    .right_slide {
      color: var(--color-white);
      font-family: "semibold";
      font-size: 1rem;
      text-align: center;
      a {
        color: #a8a8a8;
        font-family: "semibold";
        font-size: 1rem;
        text-align: center;
      }
    }
  }
}
@media (max-width: 768.98px) {
  footer {
    .lower_footer {
      margin-top: 6%;
    }
    footer .social_icon li {
      width: 12%;
    }
  }
}
@media (max-width: 425.98px) {
  footer .important-information .form_footer .form-control {
    width: 90%;
  }
  .button .secondary {
    padding: 1%;
  }
  footer .social_icon li {
    width: 8%;
  }
  footer .lower_footer {
    flex-direction: column;
    align-items: center;
    padding: 2% 0;
  }
}
</style>