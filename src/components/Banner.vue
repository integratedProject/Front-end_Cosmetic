<template>
  <div>
      <div class="slideshow-container max-w-full relative m-auto w-4/5">
        <div
          class="mySlides fade"
          v-for="(slide, index) in slides"
          :key="index"
        >
          <img :src="slide" class="w-full align-middle" />
        </div>
      </div>
      <br />

      <div class="text-center hidden sm:block">
        <span
          class="dot cursor-pointer w-3 h-3 bg-gray-300  inline-block hover:bg-gray-500"
          @click="currentSlide(1)"
        ></span>
        <span
          class="dot cursor-pointer w-3 h-3 bg-gray-300  inline-block hover:bg-gray-500"
          @click="currentSlide(2)"
        ></span>
        <span
          class="dot cursor-pointer w-3 h-3 bg-gray-300  inline-block hover:bg-gray-500"
          @click="currentSlide(3)"
        ></span>
      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      slides: [
        "https://www.dior.com/couture/var/dior/storage/images/horizon/make-up/lips/lipstick/lipsticks/14203531-93-int-EN/lipsticks_1440_1200.jpg",
        "https://www.dior.com/couture/var/dior/storage/images/14208007/26-int-EN/eyeshadows2_1440_1200.jpg",
        "https://www.dior.com/couture/var/dior/storage/images/14214663/27-int-EN/highlighter-luminizer2_1440_1200.jpg",
      ],
      slideIndex: 1,
      interval: null,
    };
  },
  methods: {
    // plusSlides(index) {
    //   this.showSlides((this.slideIndex += index));
    // },

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

    this.interval = setInterval(() => {
      this.showSlides(++this.slideIndex);
    }, 5000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
};
</script>

<style>
.dot {
  margin: 0 2px;
  transition: background-color 0.6s ease;
}
.active {
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
</style>
