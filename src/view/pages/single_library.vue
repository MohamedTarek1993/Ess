<template>
  <section
    class="library_section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <div class="row">
        <swiper
          :style="{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }"
          :loop="true"
          :spaceBetween="10"
          :navigation="true"
          :thumbs="{ swiper: thumbsSwiper }"
          class="mySwiper2"
          @swiper="setThumbsSwiperModal"
        >
          <swiper-slide
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModal' + library.id"
            v-for="media in libraryList"
            :key="media.id"
          >
            <img v-if="media.type == 'image'" :src="media.src" />
            <video
              v-else-if="media.type == 'video'"
              :src="media.src"
              controls
              muted
            ></video>
          </swiper-slide>
        </swiper>
        <swiper
          @swiper="setThumbsSwiper"
          :loop="true"
          :spaceBetween="10"
          :slidesPerView="5"
          :freeMode="true"
          :watchSlidesProgress="true"
          class="mySwiper mt-3"
        >
          <swiper-slide v-for="media in libraryList" :key="media.id">
            <img v-if="media.type == 'image'" :src="media.src" />
            <video v-else-if="media.type == 'video'" :src="media.src"></video>
          </swiper-slide>
        </swiper>

        <h2 class="title">{{ library.title }}</h2>
        <p class="text" v-html="library.text"></p>
      </div>
    </div>
  </section>
  <div class="lightboxhwhw">
    <!-- Modal -->
    <div
      class="modal fade"
      :id="'exampleModal' + library.id"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <swiper
              :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
              }"
              :loop="true"
              :spaceBetween="10"
              :navigation="true"
              :thumbs="{ swiper: thumbsSwiperModal }"
              class="mySwiper2"
            >
              <swiper-slide
                v-for="media in libraryList"
                :key="media.id"
                data-bs-toggle="modal"
                :data-bs-target="'#exampleModal' + library.id"
              >
                <img v-if="media.type == 'image'" :src="media.src" />
                <video
                  v-else-if="media.type == 'video'"
                  :src="media.src"
                  controls
                  muted
                ></video>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//import axios
import axios from "axios";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

import { ref } from "vue";

export default {
  name: "library",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      thumbsSwiper: null,
      thumbsSwiperModal: null,
      library: {},
      libraryList: [],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    setThumbsSwiperModal(swiper) {
      this.thumbsSwiperModal = swiper;
    },
    fetch_library_details_data() {
      let library_id = { library_id: this.$route.params.id };
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios
        .post("/v1/dashboard/DetailsLibrary", library_id)
        .then(({ data }) => {
          this.library = data.data;
          this.libraryList = data.data.libraryList;
          console.log(this.libraryList);
        });
    },
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0); // default 0
    const imgsRef = ref([]);
    // Img Url , string or Array of string
    // ImgObj { src: '', title: '', alt: '' }
    // 'src' is required
    // allow mixing

    const onShow = () => {
      visibleRef.value = true;
    };
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,
      onHide,
    };
  },
  created() {
    this.fetch_library_details_data();
  },
};
</script>

<style lang="scss" scoped>
.library_section {
  padding: 3rem 0;
  .swiper {
    img,
    video {
      width: 100%;
      height: 60vh;
      cursor: pointer;
    }
  }
  .mySwiper {
    img,
    video {
      width: 100%;
      height: 100px;
    }
  }
  .title {
    font-family: "semibold";
    color: #000;
    margin-top: 2rem;
  }
  .text {
    color: #000;
    font-family: "regular";
    font-size: 1rem;
  }
}
</style>