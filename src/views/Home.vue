<template>
  <div class="home">
    <!-- Banner -->

    <div id="banner" class="mx-auto box-content h-5/6 w-5/6">
      <div id="images">
        <img :src="bannerLipstick"  class="banner"/>
        <img :src="bannerEyeshadow" class="banner"/>
        <img :src="bannerBlush" class="banner"/>
      </div>

      <button @click="previousBtn">
        &lt;
      </button>
      <button @click="nextBtn">
        &gt;
      </button>

      <about></about>
    </div>
  </div>
</template>

<script>
import about from "@/components/About.vue";

export default {
  name: "Home",
  components: {
    about,
  },
  data() {
    return {
      bannerLipstick:
        "https://www.dior.com/couture/var/dior/storage/images/horizon/make-up/lips/lipstick/lipsticks/14203531-93-int-EN/lipsticks_1440_1200.jpg",

      bannerEyeshadow:
        "https://www.dior.com/couture/var/dior/storage/images/14208007/26-int-EN/eyeshadows2_1440_1200.jpg",

      bannerBlush:
        "https://www.dior.com/couture/var/dior/storage/images/14214663/27-int-EN/highlighter-luminizer2_1440_1200.jpg",
      imageElems: null,
      currentIndex: 0,
    };
  },
  methods: {
    displayImage(imageElems) {
      console.log(this.currentIndex);
      const lastIndex = this.imageElems.length - 1;
 

      if (this.currentIndex < 0) {       
        this.currentIndex = lastIndex;
        
      } else if (this.currentIndex > lastIndex) {
        this.currentIndex = 0;
      }
      const newImage = imageElems[this.currentIndex];
      newImage.scrollIntoView({ behavior: "smooth" });
      
    },
    previousBtn() {
      this.currentIndex--;
      this.displayImage(this.imageElems);

    },
    nextBtn() {
      this.currentIndex++;
      this.displayImage(this.imageElems);
    },
  },
  mounted() {
    this.imageElems = document.querySelectorAll(".banner");
  },
};
</script>