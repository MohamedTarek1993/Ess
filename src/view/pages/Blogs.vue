<template>
  <section class="blogs_collection">
    <div class="container">
      <div class="main-title-center">
        <h2>{{ BlogsSection.title }}</h2>
        <p>{{ BlogsSection.text }}</p>
      </div>
      <div class="content">
        <div class="row">
          <div
            class="col col-lg-4 col-md-6 col-12 py-4"
            v-for="(blogs, index) in BlogsSection.blogs.data"
            :key="index"
          >
            <router-link :to="`/blog/${blogs.id}`">
              <div class="img">
                <img :src="blogs.image" />
              </div>
              <div class="mx-4">
                <span class="data">{{ formatDate(blogs.date) }}</span>
                <h4>{{ blogs.title }}</h4>
                <p>{{ blogs.text }}</p>
              </div>
            </router-link>
          </div>
        </div>
        <div class="row">
          <pagination
            :data="BlogsSection.blogs"
            class="
              mx-auto
              d-flex
              align-items-center
              justify-content-center
              pagination
            "
            @pagination-change-page="fetch_blogs_data"
          >
            <span slot="prev-nav">&lt;</span>
            <span slot="next-nav">&gt;</span>
          </pagination>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import moment from "moment";
import pagination from "laravel-vue-pagination";

export default {
  name: "Blogs",
  data() {
    return {
      BlogsSection: {
        blogs: {
          data: [],
        },
      },
    };
  },
  components: {
    pagination,
  },
  methods: {
    fetch_blogs_data(page = 1) {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/blogIndex?page=" + page).then(({ data }) => {
        this.BlogsSection = data.data;
        console.log(this.BlogsSection);
      });
    },

    formatDate(value) {
      return moment(value).format("DD/MM/YYYY");
    },
  },
  created() {
    this.fetch_blogs_data();
  },
};
</script>

<style lang="scss" scoped>
.blogs_collection {
  margin-top: 10%;
  .main-title-center {
    p {
      padding: 0 15%;
      text-align: center;
    }
  }
  .content {
    margin-bottom: 3%;

    .img {
      img {
        width: 100%;
        height: 100%;
      }
    }
    .data {
      color: var(--color-fifth);
      font-size: 0.8rem;
      font-family: "regular";
    }
    h4 {
      color: var(--color-secound);
      font-size: 1.2rem;
      font-family: "bold";
    }
    p {
      color: var(--color-fourth);
      font-size: 1rem;
      font-family: "regular";
      line-height: 1.8;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .col {
      &:first-child {
        width: 100% !important;
        a {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
          .img {
            width: 60%;
            height: 300px;

            img {
              width: 100%;
              height: 100%;
            }
          }
          h4 {
            font-size: 2rem;
            padding-inline-end: 8%;
          }
          p {
            -webkit-line-clamp: 5;
          }
        }
      }
    }
    .pagination {
      .sr-only {
        display: none !important;
      }
    }
  }
}
.sr-only {
  display: none !important;
}

@media (max-width: 425.98px) {
  .blogs_collection .content .col:first-child a .img{
    width: 100%;
    height: 185px;
  }
  .blogs_collection .content .col:first-child a h4{
  font-size: 1.1rem;
  }
  .blogs_collection .content .col:first-child a p{
    font-size: .9rem;
  }
}
</style>
