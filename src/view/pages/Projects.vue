<template>
  <section class="project">
    <div class="container">
      <div class="main-title-center">
        <h6>{{ $t("Projects") }}</h6>
        <h2>{{ ProjectsSectionTitle.title }}</h2>
        <p>{{ ProjectsSectionTitle.text }}</p>
      </div>
      <ul class="nav nav-tabs" id="myTab" role="tablist">
        <li
          class="nav-item"
          role="presentation"
          v-for="(project_name, index) in ProjectsSection"
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
            {{ project_name.title }}
          </button>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div
          v-for="(content, index) in ProjectsSection"
          :key="index"
          :class="`tab-pane fade  ${index == 0 ? ' show active' : ''}`"
          :id="'index' + index"
          role="tabpanel"
          :aria-labelledby="'index-tab' + index"
        >
          <div class="boxes">
            <router-link
              class="box-1"
              v-for="(content_image, index) in content.projects.data"
              :to="`/project/${content_image.id}`"
              :key="index"
            >
              <div class="caption-1">
                <h3>{{ content_image.title }}</h3>
                <!-- <p v-html="content_image.text"></p> -->
              </div>
              <div class="img">
                <img :src="content_image.image" />
              </div>
            </router-link>
          </div>
          <div class="row">
            <pagination
              :data="content.projects"
              class="mx-auto d-flex align-items-center justify-content-center pagination"
              @pagination-change-page="fetch_tab_project_data"
            >
              <span slot="prev-nav">&lt;</span>
              <span slot="next-nav">&gt;</span>
            </pagination>
          </div>
        </div>
      </div>
      <!-- <div class="button">
        <router-link class="secondary btn" :to="{ name: 'Projects' }">{{
          $t("VIEW More")
        }}</router-link>
      </div> -->
    </div>
  </section>
</template>

<script>
//import axios
import axios from "axios";
import pagination from "laravel-vue-pagination";

export default {
  name: "Project",
  data() {
    return {
      ProjectsSectionTitle: {},
      ProjectsSection: {},
    };
  },
  components: {
    pagination,
  },
  methods: {
    fetch_header_project_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/ProjectsSectionHeader").then(({ data }) => {
        this.ProjectsSectionTitle = data.data;
        //  console.log(this.ProjectsSection);
      });
    },

    fetch_tab_project_data(page = 1) {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios
        .get("/v1/dashboard/ProjectsSection?page=" + page)
        .then(({ data }) => {
          this.ProjectsSection = data.data;
          //  console.log(this.ProjectsSection);
        });
    },
  },
  created() {
    this.fetch_header_project_data();
    this.fetch_tab_project_data();
  },
};
</script>

<style lang="scss">
.project {
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
  .button {
    justify-content: center;
    margin: 3% 0;
    .btn {
      padding: 1%;
      width: 32%;
    }
  }
}
</style>
