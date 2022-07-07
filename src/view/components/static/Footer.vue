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
              {{ Description.text }}
            </p>
            <ul class="social_icon">
              <li>
                <a target="__blank" href="{{SocialTeam.link_facebook}}">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>

              <li>
                <a target="__blank" href="{{SocialTeam.link_instgram}}">
                  <i class="bi bi-instagram"></i>
                </a>
              </li>

              <li>
                <a target="__blank" href="{{SocialTeam.link_twitter}}">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
              <li>
                <a target="__blank" href="{{SocialTeam.link_linkedin}}">
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="important-information">
            <h2 class="text">{{ $t("Addresses") }}</h2>
            <p>
              <span>{{ $t("Address") }} </span>:{{ Sitting.address }}
            </p>
            <div class="d-flex">
              <p>{{ $t("Phone Num") }} :</p>
              <p>
                <a
                  v-for="(number, index) in Sitting.numbers"
                  :key="index"
                  :href="'mailto:' + number"
                  >{{ number }}</a
                >
              </p>
            </div>
            <div class="d-flex">
              <p>{{ $t("E-mail") }} :</p>
              <p>
                <a
                  v-for="(email, index) in Sitting.emails"
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
                <router-link class="link_footer" :to="{ name: 'Home' }"
                  >Home</router-link
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Home' }"
                  >Our Projects</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Contact' }"
                  >Contact Us</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Privacy' }"
                  >Privacy Policy</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'About' }"
                  >About Us</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Blogs' }"
                  >Blog</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Faq' }"
                  >FAQ</routerLink
                >
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Terms' }"
                  >Terms & Conditions</routerLink
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
                <button class="btn secondary">{{ $t("Subscripe") }}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="lower_footer">
      <div class="left_side">
        <p>{{ $t("All copyright reserved@ESS 2022") }}</p>
      </div>
      <div class="right_slide">
        {{ $t("Made With     by crazy idea") }}
        <br />
        {{ $t("Think Out of the box") }}
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      Description: {
        text: "ESS is a specialized electrical engineering a service provider with a combined experience of more than 25 years in power and  control system solutions",
      },
      SocialTeam: {
        link_facebook: "#",
        link_twitter: "#",
        link_linkedin: "#",
        link_instgram: "#",
      },
      Sitting: {
        address:
          " Baghdad, Al Karadah st, Dimondmall, 6th Floor, Business avenue, Office No C-9",
        emails: ["Haidar.Ghazi@Essiraq.com", "Haidar.Ghazi@Essiraq.com"],
        numbers: ["+964-7726-100-178", "+964-7726-100-178"],
      },
      email: "",
    };
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
          font-size: 1.1rem;
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
    }
  }
}
@media (max-width: 768.98px) {
  footer {
    .lower_footer {
          margin-top: 6%;

    }
  }
 
}
@media (max-width: 425.98px){
  footer .important-information .form_footer .form-control {
    width: 90%;
  }
  .button .secondary{
    padding: 1%;
  }
}
</style>