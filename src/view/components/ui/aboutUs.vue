d<template>
  <section class="about_section">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ About.title }}</h2>
        <p>{{ About.text }}</p>
      </div>
      <div class="row">
        <div class="col-lg-6 col-12">
          <div class="main-title">
            <h2>{{ About.why_title }}</h2>
            <p>{{ About.why_text }}</p>
          </div>
          <div class="boxes">
            <div
              class="box"
              v-for="(social_team, index) in About.social_team"
              :key="index"
            >
              <div class="icon">
                <img
                  :src="
                    require(`../../../assets/image/${social_team.image}.webp`)
                  "
                  alt="icon"
                />
              </div>
              <div class="text">
                <h6>{{ social_team.title }}</h6>
                <p>{{ social_team.text }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="img">
            <img
              :src="require(`../../../assets/image/${About.image}.webp`)"
              alt="about"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "about us",
  data() {
    return {
      About: {
        title: "About Us",
        text: "Our Engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
        why_title: "Why Choosing ESS ?",
        why_text:
          "ESS Is A Specialized Electrical Engineering Service Provider With A Combined Experience Of More Than 25 Years In Power And Control System Solutions, ESS Is Your One-Stop When It Comes To Electrical Designs, Construction Activities, And Procurement.",
        image: "about",
        social_team: [
          {
            image: "chooseus1",
            title: "Our Vission",
            text: "To Build An Extraordinary Customer-Client Bond In Order To Meet The Customer's Requirements And Needs",
          },
          {
            image: "chooseus2",
            title: "Our Mission",
            text: "By Applying Precise Methods And Technical Standards That Comply With The Customer's Field Of Work",
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.about_section {
  margin-top: 10%;
  .main-title-center {
    padding: 0 10%;
    p{
        text-align: center;
        padding: 0;
    }
  }
  .main-title {
  }
  .boxes {
    .box {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: row;
      .icon {
        width: 50px;
        height: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        background-color: rgba($color: #cad6d0, $alpha: 0.35);
        border-radius: 50%;
        padding: 8px;

        img {
          width: 100%;
          height: 100%;
        }
      }
      .text {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        padding-left: 2%;
        h6 {
          font-family: "semibold";
          color: var(--color-primary);
          font-size: 1.1rem;
          padding: 1% 0;
          margin-bottom: 0;
        }
        p {
          font-family: "regular";
          color: var(--color-fourth);
          font-size: 0.8rem;
          text-align: start;
          padding: 1% 0;
        }
      }
    }
  }
  .img{
    height: 350px;
    img{
        width: 100%;
        height: 100%;
    }
  }
}
//responsive

@media (max-width: 1200px){

}
@media (max-width: 1023.98px){

}
@media only screen and (max-width: 767.98px){

}
</style>

