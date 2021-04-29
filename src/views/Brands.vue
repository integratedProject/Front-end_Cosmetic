<template>
  <div id="brands">
    <searching-box></searching-box>
  
    <div>
      <div class="grid grid-cols-3 text-2xl pt-10">
        <router-link to="/makeup-types">
        <img src="@/assets/logo/logo-chanel.jpg" />
</router-link>
        <img src="@/assets/logo/logo-dior.jpg" />

        <img src="@/assets/logo/logo-nars.jpg" />

        <!-- see more btn  -->
        <brand class="px-32 hover:border-gray-600"></brand>
        <brand class="px-32 hover:border-gray-600"></brand>
        <brand class="px-32 hover:border-gray-600"></brand>
      </div>
    </div>
    <add-product ></add-product>
    <!-- <div class="grid grid-cols-3 text-2xl">
      <ul v-for="item in brand" :key="item.brandid">
        <div
          class="p-10 m-20 border-2 border-black hover:bg-gray-300 duration-300 focus:outline-none"
        >
          <li>
            <button>{{ item.brandname }}</button>
          </li>
        </div>
      </ul>
    </div> -->
  </div>
</template>
<script>
import Brand from "@/components/Brand.vue";
import AddProduct from "@/components/AddProduct.vue";

export default {
  name: "Brands",
  components: {
    Brand,
    AddProduct

  },

  data() {
    return {
      brand: [],
    };
  },
  methods: {
    //   async fetchBrands() {
    //     try {
    //       console.log("fetch");
    //       const res = await fetch("http://localhost:5000/brand");
    //       const data = await res.json();
    //       this.brand = data;
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   },
    // },
    // mounted() {
    //   this.fetchBrands();
  },
};
</script>
