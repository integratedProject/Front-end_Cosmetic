<template>
  <div id="home">
    <!-- Banner -->
    <banner></banner>
    <div class="mt-4">
      <router-link to="/product" class="btn px-5 py-0.5">
        Shop Now
      </router-link>
    </div>

    <about></about>
    <footer-component></footer-component>
  </div>
</template>

<script>
import about from "@/components/About.vue";
import banner from "@/components/Banner.vue";
export default {
  name: "Home",
  components: {
    about,
    banner,
  },
};
</script>

<style scoped>
</style>
