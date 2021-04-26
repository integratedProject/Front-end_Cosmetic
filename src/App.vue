<template>
  <div class="px-10 text-lg">
    <!-- navigationBar -->
    <div
      id="nav"
      :class="{ scrolled: !view.atTopOfPage }"
      class="sticky top-0 p-10 bg-white duration-500 z-10 "
    >
      <div id="titleName" class="border-b-2 border-black mx-40 mb-10 ">
        <span class="text-3xl">COSMETIC</span>
      </div>
      <div class="flex justify-center items-center space-x-28 ">
        <router-link
          to="/"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600 "
          >HOME</router-link
        >
        <router-link
          to="/brands"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600 "
          >PRODUCT</router-link
        >
        <router-link
          to="/cart"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600"
          >CART</router-link
        >
        <router-link
          to="/employees"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600"
          >EMPLOYEES</router-link
        >
        <searching-box></searching-box>
      </div>
    </div>
    <!-- Banner -->
    <div class="mx-auto box-content h-5/6 w-5/6 ">
      <vueper-slides>
        <vueper-slide
          v-for="(slide, i) in slides"
          :key="i"
          :image="slide.src"
        />
      </vueper-slides>

      <about></about>
    </div>
  </div>

  <router-view />
</template>

<style>
#app {
  font-family: Javanese Text;
  text-align: center;
  color: black;
}

#nav.scrolled {
  @apply p-1;
  transition-duration: 500ms;
}
#titleName {
  margin-bottom: 2.5rem;
}
</style>
<script>
import searchingBox from "@/components/SearchingBox.vue";
import about from "@/components/About.vue";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "App",
  components: {
    searchingBox,
    about,
    VueperSlides,
    VueperSlide,
  },
  data() {
    return {
      slides: [
        {
          id: "slide-1",
          src:
            "https://www.dior.com/couture/var/dior/storage/images/horizon/make-up/lips/lipstick/lipsticks/14203531-93-int-EN/lipsticks_1440_1200.jpg",
        },
        {
          id: "slide-2",
          src:
            "https://www.dior.com/couture/var/dior/storage/images/14208007/26-int-EN/eyeshadows2_1440_1200.jpg",
        },
        {
          id: "slide-3",
          src:
            "https://www.dior.com/couture/var/dior/storage/images/14214663/27-int-EN/highlighter-luminizer2_1440_1200.jpg",
        },
      ],

      view: {
        atTopOfPage: true,
      },
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false;
      } else {
        this.view.atTopOfPage = true;
      }
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
