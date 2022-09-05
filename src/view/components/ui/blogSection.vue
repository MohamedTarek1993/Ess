<template>
  <section class="blog_section" data-aos="fade-up" data-aos-duration="2000" data-aos-easing="linear">
    <div class="container">
      <div class="main-title-center">
        <h6>{{ $t("Blog") }}</h6>
        <h2>{{ BlogsSection.title }}</h2>
        <p>{{ BlogsSection.text }}</p>
      </div>
      <div class="boxes">
        <div class="row">
          <div
            class="col-lg-4 col-md-6 col-12"
            v-for="(blogs, index) in BlogsSection.blogs.data"
            :key="index"
          >
            <!-- <router-link class="link" :to="`/blog/${blogs.id}`"> -->
            <router-link class="link" :to="`/blog/${blogs.id}`">
              <div class="card">
                <div class="img">
                  <img :src="blogs.image" />
                </div>
                <span class="data">{{ formatDate(blogs.date) }}</span>
                <h4>{{ blogs.title }}</h4>
                <p>{{ blogs.text }}</p>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="button">
        <router-link class="btn secondary" :to="{ name: 'Blogs' }">
          {{ $t("VIEW More") }}</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
//import axios
import axios from "axios";
//import formate date
import moment from "moment";
export default {
  name: "blogSection",
  data() {
    return {
      BlogsSection: {
        blogs: {
          data: [],
        }
      },
    };
  },

  methods: {
    fetch_blog_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/blogSection").then(({ data }) => {
        this.BlogsSection = data.data;
          // console.log(this.BlogsSection);
      });
    },

    formatDate(value) {
      return moment(value).format("DD/MM/YYYY");
    },
  },
  created() {
    this.fetch_blog_data();
  },
};
</script>

<style lang="scss" scoped>
.blog_section {
  .main-title-center {
    p {
      text-align: center;
      padding: 1% 5%;
    }
  }
  .boxes {
    .card {
      border: none;
      background: var(--color-white);

      transition: 0.25s all ease-in-out;
      &:hover {
        box-shadow: 0px 7px 60px rgba($color: #7a7a7a, $alpha: 0.16);
        transform: scale(1.03);
      }
      .img {
        height: 16.875rem;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .data {
        color: var(--color-fifth);
        font-family: "regular";
        font-size: 0.9rem;
      }
      h4 {
        color: var(--color-secound);
        font-family: "meduim";
        font-size: 1.22rem;
      }
      p {
        color: var(--color-fourth);
        font-family: "regular";
        font-size: 1rem;
        line-height: 1.5;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .button {
    justify-content: center;
    .btn {
      padding: 1%;
      width: 30%;
    }
  }
  .link {
    text-decoration: none;
  }
}
</style>