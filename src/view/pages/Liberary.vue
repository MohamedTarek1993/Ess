<template>
  <section
    class="liberary_section"
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
          v-for="(data, index) in libraryList"
          :key="index"
        >
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
          >
            <swiper-slide
              @click="showMultiple"
              v-for="(libraryList, index) in data.libraryList"
              :key="index"
            >
              <img v-if="libraryList.type == 'image'" :src="libraryList.url" />
              <video
                v-else-if="libraryList.type == 'video'"
                :src="libraryList.url"
                controls
                muted
              ></video>
              <!-- <div class="text">
                <h2>{{data.title}}</h2>
                <p v-html="data.text"></p>
              </div> -->
            </swiper-slide>
          </swiper>
          <swiper
            @swiper="setThumbsSwiper"
            :loop="true"
            :spaceBetween="10"
            :slidesPerView="4"
            :freeMode="true"
            :watchSlidesProgress="true"
            class="mySwiper"
          >
            <swiper-slide
              v-for="(libraryList, index) in data.libraryList"
              :key="index"
            >
              <img v-if="libraryList.type == 'image'" :src="libraryList.url" />
              <video
                v-else-if="libraryList.type == 'video'"
                :src="libraryList.url"
              ></video>
            </swiper-slide>
          </swiper>
          <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="images"
            :index="indexRef"
            @hide="onHide"
          ></vue-easy-lightbox>
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
          @pagination-change-page="fetch_liberary_data"
        >
          <span slot="prev-nav">&lt;</span>
          <span slot="next-nav">&gt;</span>
        </pagination>
      </div>
    </div>
  </section>
  <light-box />
</template>

<script>
//import axios
import axios from "axios";

// import pagination
import pagination from "laravel-vue-pagination";

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

// import light box
import VueEasyLightbox from "vue-easy-lightbox";
import { ref } from "vue";

export default {
  name: "Liberary",
  components: {
    Swiper,
    SwiperSlide,
    VueEasyLightbox,
    pagination,
  },
  data() {
    return {
      thumbsSwiper: null,
      library: [],
      libraryList: [],
      images: [
        "https://placekitten.com/801/800",
        "https://placekitten.com/802/800",
        "https://placekitten.com/803/800",
        "https://placekitten.com/804/800",
        "https://placekitten.com/805/800",
        "https://placekitten.com/806/800",
        "https://placekitten.com/807/800",
        "https://placekitten.com/808/800",
        "https://placekitten.com/809/800",
        "https://placekitten.com/810/800",
      ],
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    fetch_liberary_data(page = 1) {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/library_page?page=" + page).then(({ data }) => {
        this.library = data.data;
        this.libraryList = data.data.libraries.data;
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

    const showMultiple = () => {
      imgsRef.value = [];
      indexRef.value = 0; // index of imgList
      onShow();
    };
    const onHide = () => (visibleRef.value = false);

    return {
      visibleRef,
      indexRef,
      imgsRef,
      showMultiple,
      onHide,
    };
  },
  created() {
    this.fetch_liberary_data();
  },
};
</script>

<style lang="scss" scoped>
.liberary_section {
  .swiper {
    img,
    video {
      width: 100%;
      height: 400px;
    }
  }
  .mySwiper {
    img,
    video {
      width: 100%;
      height: 100px;
    }
  }
}
</style>