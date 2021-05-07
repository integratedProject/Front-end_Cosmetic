<template>
  <div id="AllProduct">
    <searching-box></searching-box>
    <div
      class="mt-5 border-2 border-black px-10 py-5  w-1/6 mx-auto md:text-sm"
    >
      ALL PRODUCT
    </div>
    <div id="filter" class="flex justify-between">
      <div>{{sum}}products</div>
      <!-- Sort  -->
      <div class="flex space-x-2 absolute right-0 mr-20 group cursor-pointer">
        <div>
          Sort by
        </div>
        <div class="text-left  ">
          <ul>
            <li class="px-2 border-b-2 border-gray-300  ">
              {{ sort }} <span class="space-x-2">&nabla;</span>
            </li>
            <li
              class="transition ease-in duration-500 transform -translate-y-7 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
            >
              <input
                type="radio"
                id="HighToLow"
                value="PriceHighToLow"
                v-model="sort"
                class="hidden  "
                @click="changeSort(highToLow)"
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
                @click="changeSort(lowToHigh)"
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
                @click="changeSort(newArrival)"
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
                @click="changeSort(character)"
              />
              <label for="Character">Character</label>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-3 text-2xl md:text-xl ">
      <ul v-for="item in products" :key="item.productId">
        <div
          class=" m-20 border-2 border-white hover:shadow-md delay-200 duration-400"
        >
          <router-link :to="`/product/${item.productId}`">
            <img
              :src="url + 'product/photo/' + item.productImage"
            />
            {{ item.productName }}
          </router-link>
        </div>
      </ul>
    </div>

    <add-product></add-product>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "allProduct",

  data() {
    return {
      // products: null,
      sort: "none",
      url: "http://13.67.44.15/cosmeticbe/",
      products: [],
      productImage:"",
    };
  },
  methods: {
    fetchProduct() {
      axios
        .get(this.url + "product")
        .then((response) => {
          this.products = response.data;
          return response.data;
        })
        .then((data) => {
          this.products = data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  
    changeSort(){
      // if(sortBy == "")
      // console.log("change"+sortBy)
    }
  },
  computed: {
    sum() {
     return this.products.length;
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
