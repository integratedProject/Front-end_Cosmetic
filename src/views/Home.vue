<template>
  <div id="home" class="box-border">
    <!-- Banner -->
    <div class="slideshow-container max-w-full relative m-auto px-40">
      <div class="mySlides fade" v-for="(slide, index) in slides" :key="index">
        <img :src="slide" class="w-full align-middle" />
      </div>
      <div class="flex justify-between text-white font-bold">
        <a
          class="prev cursor-pointer absolute top-1/2 w-auto hover:bg-black "
          @click="plusSlides(-1)"
          >&lt;</a
        >
        <a
          class="next cursor-pointer absolute top-1/2 w-auto right-0  hover:bg-black "
          @click="plusSlides(1)"
          >&gt;</a
        >
      </div>
    </div>
    <br />

    <div style="text-align:center ">
      <span
        class="dot cursor-pointer w-3 h-3 bg-gray-300 rounded-2xl inline-block hover:bg-gray-500"
        @click="currentSlide(1)"
      ></span>
      <span
        class="dot cursor-pointer w-3 h-3 bg-gray-300 rounded-2xl inline-block hover:bg-gray-500"
        @click="currentSlide(2)"
      ></span>
      <span
        class="dot cursor-pointer w-3 h-3 bg-gray-300 rounded-2xl inline-block hover:bg-gray-500"
        @click="currentSlide(3)"
      ></span>
    </div>

    <div class="m-10">
      <router-link to="/all-product" class="btn ">
        Shop Now
      </router-link>
    </div>
    <about></about>
    <footer-component></footer-component>
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
      slides: [
        "https://www.dior.com/couture/var/dior/storage/images/horizon/make-up/lips/lipstick/lipsticks/14203531-93-int-EN/lipsticks_1440_1200.jpg",
        "https://www.dior.com/couture/var/dior/storage/images/14208007/26-int-EN/eyeshadows2_1440_1200.jpg",
        "https://www.dior.com/couture/var/dior/storage/images/14214663/27-int-EN/highlighter-luminizer2_1440_1200.jpg",
      ],
      slideIndex: 1,
    };
  },
  methods: {
    plusSlides(index) {
      this.showSlides((this.slideIndex += index));
    },

    currentSlide(index) {
      this.showSlides((this.slideIndex = index));
    },

    showSlides(index) {
      let i;
      let slides = document.getElementsByClassName("mySlides");
      let dots = document.getElementsByClassName("dot");
      if (index > slides.length) {
        this.slideIndex = 1;
      }
      if (index < 1) {
        this.slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[this.slideIndex - 1].style.display = "block";
      dots[this.slideIndex - 1].className += " active";
    },
  },
  mounted() {
    this.showSlides(this.slideIndex);
  },
};
</script>

<style scoped>
.mySlides {
  display: none;
}
/* Next & previous buttons */
.prev,
.next {
  padding: 16px;
  margin-top: -22px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  border-radius: 3px 0 0 3px;
}

/* The dots/bullets/indicators */
.dot {
  margin: 0 2px;
  transition: background-color 0.6s ease;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@keyframes fade {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}

@media only screen and (max-width: 300px) {
  .prev,
  .next {
    font-size: 11px;
  }
}
</style>
