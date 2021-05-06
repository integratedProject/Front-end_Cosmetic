<template>
  <div id="AllProduct" >
    <searching-box></searching-box>
    <div
      class="mt-5 border-2 border-black px-10 py-5  w-1/6 mx-auto md:text-sm"
    >
      ALL PRODUCT
    </div>
    <div id="filter" class="flex justify-between">
      <div>
        1xx products
      </div>
      <!-- Sort  -->
      <div class="flex space-x-2 absolute right-0 mr-20 group cursor-pointer">
        <div>
          Sort by
        </div>
        <div class="text-left  ">
          <ul>
            <li class="border-2 px-2 group-hover:border-black">{{ sort }}  <span class="space-x-2" >&nabla;</span></li>
            <li
              class="transition ease-in duration-500 transform -translate-y-7 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <input
                type="radio"
                id="HighToLow"
                value="PriceHighToLow"
                v-model="sort"
                class="hidden  "
              />
              <label for="HighToLow">Price High to Low</label>
            </li>
            <li
              class="transition ease-in duration-500 transform -translate-y-7 opacity-0 delay-150 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <input
                type="radio"
                id="LowToHigh"
                value="PriceLowToHigh"
                v-model="sort"
                class="hidden"
              />
              <label for="LowToHigh">Price Low to High</label>
            </li>
            <li
              class="transition ease-in duration-500 transform -translate-y-7 opacity-0 delay-300 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <input
                type="radio"
                id="New"
                value="New Arrival"
                v-model="sort"
                class="hidden"
              />
              <label for="New">New Arrival</label>
            </li>
            <li
              class="transition ease-in duration-500 transform -translate-y-7 opacity-0 delay-500 group-hover:opacity-100 group-hover:translate-y-0"
            >
              <input
                type="radio"
                id="Character"
                value="Character"
                v-model="sort"
                class="hidden"
              />
              <label for="Character">Character</label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 text-2xl md:text-xl ">
      <ul v-for="item in allProduct" :key="item.productid">
        <router-link :to="`/product/${item.productid}`">
          <div class="p-10 m-20 border-2 border-white hover:shadow-md delay-200 duration-400">
            <img :src="item.productimage" />
            {{ item.productname }}
          </div>
        </router-link>
      </ul>
    </div>
  
      <add-product></add-product>
 
  </div>
</template>
<script>
export default {
  name: "allProduct",
  data() {
    return {
      allProduct: null,
      sort: "none",
    };
  },
  methods: {
    async fetchProduct() {
      try {
        const res = await fetch("http://localhost:5000/product");
        const data = await res.json();
        this.allProduct = data;
      } catch (error) {
        console.log(error);
      }
    },
  },
  mounted() {
    this.fetchProduct();
  },
  updated() {
    console.log(this.sort);
  },
};
</script>
