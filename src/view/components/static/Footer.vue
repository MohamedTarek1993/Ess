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
              ESS is a specialized electrical engineering a service provider
              with a combined experience of more than 25 years in power and
              control system solutions
            </p>
            <ul class="social_icon">
              <li>
                <a target="__blank" href="#">
                  <i class="bi bi-linkedin"></i>
                </a>
              </li>

              <li>
                <a target="__blank" href="#">
                  <i class="bi bi-facebook"></i>
                </a>
              </li>

              <li>
                <a target="__blank" href="#">
                  <i class="bi bi-twitter"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="important-information">
            <h2 class="text">Addresses</h2>
            <p>
              <span>Address </span>: Baghdad, Al Karadah st, Dimond mall, 6th
              Floor, Business avenue, Office No C-9
            </p>

            <p>
              <span>Phone Num </span>:
              <a href="mailto:020109310277">+964-7822-735-152 </a>
              <a href="mailto:020109310277">+964-7822-735-152 </a>
            </p>

            <p>
              <span>E-mail </span>:
              <a href="mailto:someone@yoursite.com">
                Haidar.Ghazi@Essiraq.com</a
              >
              <a href="mailto:someone@yoursite.com">Zaid.Shaker@Essiraq.com</a>
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
          <div class="important-information">
            <h2 class="text">Quick Links</h2>
            <ul class="link">
              <li><router-link class="link_footer" :to="{ name: 'Home' }">Home</router-link></li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Home' }">Our Projects</routerLink>
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Contact' }">Contact Us</routerLink>
              </li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Privacy' }">Privacy Policy</routerLink>
              </li>
              <li><routerLink class="link_footer" :to="{ name: 'About' }">About Us</routerLink></li>
              <li><routerLink class="link_footer" :to="{ name: 'Blogs' }">Blog</routerLink></li>
              <li><routerLink class="link_footer" :to="{ name: 'Faq' }">FAQ</routerLink></li>
              <li>
                <routerLink class="link_footer" :to="{ name: 'Terms' }"
                  >Terms & Conditions</routerLink
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-12">
            
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--color-primary);
  margin-top: 2%;
  padding: 3% 0;
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
      font-size: .9rem;
      line-height: 1.7;
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
    p {
      color: var(--color-sixth);
      font-family: "regular";
      padding-top: 9%;
      font-size: .9rem;

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
    .link{
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        flex-wrap: wrap;
            padding-top: 9%;
            padding-left: 0;
            width: 100%;
        li{
            width: 50%;
            margin-bottom: 4%;

            .link_footer{
                font-family: 'meduim';
                color: var(--color-sixth);
                font-size: .8rem;
                width: 100%;
                
            }
        }
    }
  }
}
</style>