<template>
  <div class="box-border">
    <!-- Banner -->

    <div class="slideshow-container">
      <div class="mySlides fade" v-for="(slide, index) in slides" :key="index">
        <img :src="slide" class="w-full" />
      </div>
      <div class="flex justify-between">
        <a class="prev" @click="plusSlides(-1)">&lt;</a>
        <a class="next" @click="plusSlides(1)">&gt;</a>
      </div>
    </div>
    <br />

    <div style="text-align:center">
      <span class="dot" @click="currentSlide(1)"></span>
      <span class="dot" @click="currentSlide(2)"></span>
      <span class="dot" @click="currentSlide(3)"></span>
    </div>

    <about></about>
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
* {
  box-sizing: border-box;
}

.mySlides {
  display: none;
}
img {
  vertical-align: middle;
}

/* Slideshow container */
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -22px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom: 8px;
  width: 100%;
  text-align: center;
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

/* The dots/bullets/indicators */
.dot {
  cursor: pointer;
  height: 15px;
  width: 15px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active,
.dot:hover {
  background-color: #717171;
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

/* On smaller screens, decrease text size */
@media only screen and (max-width: 300px) {
  .prev,
  .next,
  .text {
    font-size: 11px;
  }
}
</style>
