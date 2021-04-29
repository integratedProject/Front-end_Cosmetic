<template>
  <div id="app" class=" text-lg">
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
      
       
      </div>
      
    </div>

  <router-view />
     
  </div>

</template>

<style>
#app {
  font-family: Javanese Text;
  text-align: center;
  color: black;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}

#nav.scrolled {
  @apply p-1;
  transition-duration: 500ms;
}
#titleName {
  margin-bottom: 2.5rem;
}
.btn {
  border-color: black;
  border-width: 2px;
  border-radius: 9999px;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.btn:hover{
  transition-duration: 300ms;
  color:white;
  background-color:  rgb(209, 213, 219);
}
</style>
<script>



export default {
  name: "App",

  data() {
    return {
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
