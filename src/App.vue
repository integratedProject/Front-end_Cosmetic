<template>
  <div class="px-10">
    <!-- navigationBar -->
    <div
      id="nav"
      :class="{ scrolled: !view.atTopOfPage }"
      class="sticky top-0 p-10 bg-white duration-500 "
    >
      <div id="titleName" class="border-b-2 border-black mx-40 mb-10 ">
        <span class="text-3xl">COSMETIC</span>
      </div>
      <div class="flex justify-center items-center space-x-28 ">
        <router-link to="/">HOME</router-link>
        <router-link to="/brands" class="font-light">PRODUCT</router-link>
        <router-link to="/cart">CART</router-link>
        <router-link to="/employees">EMPLOYEES</router-link>
        <searching-box></searching-box>
      </div>
    </div>
    <!-- Banner -->
    <div id="banner" class="mx-auto box-content h-5/6 w-5/6">
      <div id="images">
        <img :src="bannerLipstick" />
        <img :src="bannerEyeshadow" />
      </div>
    <h1 class="text-red-500">bannerจะต้องมีอันเดียวแต่ยังไม่ได้ทำ</h1>
      <!-- <button @click="previousBtn">
        &lt;
      </button>
      <button @click="nextBtn">
        &gt;
      </button> -->
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

export default {
  name: "App",
  components: {
    searchingBox,
    about
  },
  data() {
    return {
      bannerLipstick:
        "https://www.dior.com/couture/var/dior/storage/images/horizon/make-up/lips/lipstick/lipsticks/14203531-93-int-EN/lipsticks_1440_1200.jpg",
      bannerEyeshadow:
        "https://www.dior.com/couture/var/dior/storage/images/14208007/26-int-EN/eyeshadows2_1440_1200.jpg",
      view: {
        atTopOfPage: true,
      },
      // imageElems: document.querySelectorAll("img"),
      // currentIndex: 0,
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
    // displayImage(imageElems, newIndex) {
    //   const lastIndex = this.imageElems - 1;
    //   if (newIndex < 0) {
    //     newIndex = lastIndex;
    //   } else if (newIndex > lastIndex) {
    //     newIndex = 0;
    //   }
    // },
    // previousBtn() {
    //   this.displayImage(this.imageElems, this.currentIndex - 1);
    // },
    // nextBtn() {
    //   this.displayImage(this.imageElems, this.currentIndex + 1);
    // },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
};
</script>
