<template>
  <section class="project_section">
    <div class="container">
      <div class="main-title-center">
        <span>Projects</span>
        <h2>{{ ProjectsSection.title }}</h2>
        <p>{{ ProjectsSection.text }}</p>
      </div>
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
              <div class="caption-1">
                <h3>{{ content_image.title }}</h3>
                <p>{{ content_image.text }}</p>
              </div>
              <div class="img">
                <img
                  :src="
                    require(`../../../assets/image/${content_image.image}.png`)
                  "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Project",
  data() {
    return {
      ProjectsSection: {
        title: "The Best Projects We Have Completed",
        text: "Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam ",
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

<style lang="scss">
.project_section {
  padding: 5% 0;
  .main-title-center {
    P {
      padding: 1% 10%;
      text-align: center;
    }
  }
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
          margin-bottom: 4%;
                  width: 48%;

          &:first-child {
            .img {
              height: 400px;
              img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
            &:nth-child(2) {
            .img {
              height: 300px;
              img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
            &:nth-child(4) {
            .img {
              height: 400px;
              img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
              }
            }
          }
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
              transform: translate(-22px, 0px);
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
</style>
