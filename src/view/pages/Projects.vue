<template>
  <section class="project">
    <div class="main-title-center">
      <h6>{{ $t("Projects") }}</h6>
      <h2>{{ ProjectsSection.title }}</h2>
      <p>{{ ProjectsSection.text }}</p>
    </div>

    <div class="project_section">
      <div class="container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li
            class="nav-item"
            role="presentation"
            v-for="(project_name, index) in ProjectsSection.project_name"
            :key="index"
          >
            <button
              :class="`nav-link ${index == 0 ? 'active' : ''}`"
              :id="'index-tab' + index"
              data-bs-toggle="tab"
              :data-bs-target="'#index' + index"
              type="button"
              role="tab"
              :aria-controls="'index' + index"
              aria-selected="true"
            >
              {{ project_name.title_tab }}
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            v-for="(content, index) in ProjectsSection.project_name"
            :key="index"
            :class="`tab-pane fade  ${index == 0 ? ' show active' : ''}`"
            :id="'index' + index"
            role="tabpanel"
            :aria-labelledby="'index-tab' + index"
          >
            <div class="boxes">
             
              <div
                class="box-1"
                v-for="(content_image, index) in content.content"
                :key="index"
              >
               <router-link to="/project/2">
                <div class="caption-1">
                  <h3>{{ content_image.title }}</h3>
                  <p>{{ content_image.text }}</p>
                </div>
                </router-link>
                <div class="img">
                  
                  <img
                    :src="
                      require(`../../assets/image/${content_image.image}.png`)
                    "
                  />
                  
                </div>
              </div>
            
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="contact">
      <h2>{{ $t("title_project") }}</h2>
      <p>{{ $t("text_project") }}</p>
      <div class="button">
        <router-link class="secondary btn" :to="{ name: 'Contact' }">{{
          $t("Contact_Us")
        }}</router-link>
      </div>
    </div>

    <Testmonolise />
  </section>
</template>

<script>
import Testmonolise from "../components/ui/Testmonolise.vue";
export default {
  name: "Project",
  components: {
    Testmonolise,
  },
  data() {
    return {
      ProjectsSection: {
        title: "The Best Projects We Have Completed",
        text: "Our Engineering office is your right destination when you are looking for professional designs and electrical engineering solutions, we are devoting years of experience to come up with efficient, creative, and cost-effective solutions that suit every client.",
        project_name: [
          {
            title_tab: "All",
            content: [
              {
                image: "blog1",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
              {
                image: "blog2",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
              {
                image: "blog3",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
              {
                image: "blog1",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
              {
                image: "blog2",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
              {
                image: "blog3",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
            ],
          },
          {
            title_tab: "Electrical",
            content: [
              {
                image: "blog1",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
            ],
          },
          {
            title_tab: "Maintainance",
            content: [
              {
                image: "blog1",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
            ],
          },
          {
            title_tab: "Switch-board design",
            content: [
              {
                image: "blog2",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
            ],
          },
          {
            title_tab: "Procurements ",
            content: [
              {
                image: "blog3",
                title:
                  "Test and comission 132KV substation with Hyosong south of iraq",
                text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
              },
            ],
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.project {
  margin-top: 10%;
  .main-title-center {
    p {
      padding: 1% 15%;
      text-align: center;
    }
  }

  .contact {
    padding: 7% 5%;
    background: url(../../assets/image/back1.png);
    background-position: center;
    text-align: end;
    margin: 3% 0;
    h2 {
      color: var(--color-primary);
      font-family: "bold";
      font-size: 2.3rem;
    }
    p {
      color: var(--color-fourth);
      font-family: "regular";
      font-size: 1.5rem;
    }
    .button {
      justify-content: flex-end;
      margin-top: 2%;
      width: 76%;

      .btn {
        padding: 1%;
        width: 20%;
      }
    }
  }

  .project_section {
    padding: 5% 0;

    .nav-tabs {
      justify-content: center;
      border-bottom: 0;
      .nav-link {
        transition: 0.25s all ease-in;
        color: var(--color-sixth);
        font-family: "regular";
        font-size: 1rem;
      }
      .nav-link.active,
      .nav-item.show .nav-link {
        color: var(--color-primary);
        font-family: "semibold";
        font-size: 1.2rem;
        border: none;
        border-bottom: 1px solid var(--color-primary);
      }
    }
    .tab-content {
      margin: 3%;
      .boxes {
        display: flex;
        flex: 1;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: flex-start;
        .box-1 {
          position: relative;
          overflow: hidden;
          display: flex;
          margin: 1%;
          width: 48%;

          &::before {
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 200%;
            background-color: rgba(64, 28, 0, 0.67);
            position: absolute;
            opacity: 0.8;
            transition: all 0.5s;
            transform: translate(500px, 300px);
          }
          &:hover {
            &::before {
              transform: translate(0px, 0px);
            }
          }
          .caption-1 {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
            &:hover {
              h3 {
                transform: translate(-10px, 22px);
                padding-inline-start: 5%;
                transition-delay: 0.3s;
              }
              p {
                transform: translate(-10px, 37px);
                transition-delay: 0.3s;
                padding: 0 5%;
              }
            }
            h3 {
              transform: translate(200px, -200px);
              transition: all 0.25s;
              color: white;
              font-size: 1.4rem;
              font-family: "bold";
            }
            p {
              transform: translate(260px, -260px);
              transition: all 0.25s;
              font-family: "regular";
              color: white;
              font-size: 1rem;
            }
          }
          .img {
            height: 300px;
            width: 100%;
            img {
              display: block;
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
}

@media (max-width: 768.98px) {
  .project .contact {
    padding: 7% 0%;
    text-align: center;
  }
}
@media (max-width: 425.98px) {
  .main-title-center h2 {
    font-size: 1.2rem;
  }
  .project .main-title-center p {
    font-size: 1rem;
    padding: 1% 4%;
  }
  .project .project_section .tab-content .boxes .box-1 {
    width: 100%;
  }
  .project .contact h2 {
    font-size: 1.2rem;
  }
  .project .contact p {
    font-size: 1rem;
        padding: 1% 3%;
  }
  .project .contact .button{
width: 100%;
justify-content: center;
  }
  .project .contact .button .btn[data-v-19192d66]{
    width: 50%;
  }
}
</style>

