<template>
  <section
    class="library_section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <div class="main-title-center">
        <h2>{{ library.title }}</h2>
        <p>{{ library.text }}</p>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-12"
          v-for="(data, list) in libraryList"
          :key="list"
        >
          <div class="boxes">
            <router-link class="box-1" :to="`/library/${data.id}`">
              <div class="caption-1">
                <h3>{{ data.title }}</h3>
                <p v-html="data.text"></p>
              </div>
              <div class="img">
                <img :src="data.image" />
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div class="row mt-5">
        <pagination
          :data="library.libraries"
          class="
            mx-auto
            d-flex
            align-items-center
            justify-content-center
            pagination
          "
          @pagination-change-page="fetch_library_data"
        >
          <span slot="prev-nav">&lt;</span>
          <span slot="next-nav">&gt;</span>
        </pagination>
      </div>
    </div>
  </section>
</template>

<script>
//import axios
import axios from "axios";

// import pagination
import pagination from "laravel-vue-pagination";

export default {
  name: "library",
  components: {
    pagination,
  },
  data() {
    return {
      library: [],
    };
  },
  methods: {
    fetch_library_data(page = 1) {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/library_page?page=" + page).then(({ data }) => {
        this.library = data.data;
        this.libraryList = data.data.libraries.data;
        // console.log(this.libraryList);
      });
    },
  },
  created() {
    this.fetch_library_data();
  },
};
</script>


<style lang="scss">
.library_section {
  padding: 5% 0;
  .main-title-center {
    P {
      padding: 1% 10%;
      text-align: center;
    }
  }
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
      width: 100%;
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
            transform: translate(-10px, 15px);
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
        width: 100%;
        height: 300px;
        img {
          display: block;
          width: 100%;
          height: 100%;
          object-fit: cover;
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
@media (max-width: 425.98px) {
  .project .tab-content .boxes .box-1 .img {
    height: 220px;
  }
  .project .tab-content .boxes .box-1 {
    width: 90%;
  }
}
</style>
