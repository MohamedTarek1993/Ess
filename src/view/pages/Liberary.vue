<template>
  <section
    class="liberary_section"
    data-aos="fade-up"
    data-aos-duration="2000"
    data-aos-easing="linear"
  >
    <div class="container">
      <div class="main-title-center">
        <h2>{{ liberary.title }}</h2>
        <p>{{ liberary.text }}</p>
      </div>
      <div class="row">
        <div
          class="col-lg-6 col-md-6 col-12"
          v-for="(data, index) in libraries"
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
              v-for="(data, index) in libraries.data"
              :key="index"
            >
              
              <img :src="data.image" />
              <div class="text">
                <h2>{{data.title}}</h2>
                <p>{{data.text}}</p>
              </div>
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
              v-for="(imagethumbs, index) in libraryList.imagethumbs"
              :key="index"
            >
              <img :src="require(`../../assets/image/${imagethumbs}.png`)" />
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <!-- <div class="row">
          <pagination
            :data="liberary.data"
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
        </div> -->

      <vue-easy-lightbox

        :visible="visibleRef"
        :imgs="lightimg.image"
        :index="indexRef"
        @hide="onHide"
      ></vue-easy-lightbox>
    </div>
  </section>
  <light-box />
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

// import light box
import VueEasyLightbox from "vue-easy-lightbox";
import { ref } from "vue";

// import pagination
// import pagination from "laravel-vue-pagination";

export default {
  name: "Liberary",
  components: {
    Swiper,
    SwiperSlide,
    VueEasyLightbox,
    // pagination

  },
  data() {
    return {
      thumbsSwiper: null,
      liberary: [
      ],
      lightimg:{
        image:["blog1", "blog2", "blog3"],
      }
    };
  },
  methods: {
    setThumbsSwiper(swiper) {
      this.thumbsSwiper = swiper;
    },
    fetch_liberary_data() {
      const newLocal = this.$i18n.locale;
      axios.defaults.headers.common["Accept-Language"] = newLocal;
      axios.get("/v1/dashboard/library_page").then(({ data }) => {
        this.liberary = data.data;
        // console.log(this.ServicesSection);
      });
    },
  },
  setup() {
    const visibleRef = ref(false);
    const indexRef = ref(0); // default 0
    const imgsRef = ref([ ]);
    // Img Url , string or Array of string
    // ImgObj { src: '', title: '', alt: '' }
    // 'src' is required
    // allow mixing

    const onShow = () => {
      visibleRef.value = true;
    };

    const showMultiple = () => {
      imgsRef.value = [
        // "(../../assets/image/data.png)",
         "(../../assets/image/imgsRef.png)",
      
      ];
      // or
      // imgsRef.value = [
      //   { title: 'test img', src: 'http://via.placeholder.com/350x150' },
      //   'http://via.placeholder.com/350x150'
      // ]
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
    img {
      width: 100%;
      height: 400px;
    }
  }
  .mySwiper {
    img {
      width: 100%;
      height: 100px;
    }
  }
}
</style>