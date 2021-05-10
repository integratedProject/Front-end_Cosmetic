<template>
  <div id="AllProduct">
    
    <div
      class="mt-5 border-2 border-black  px-10 py-5 w-max mx-auto md:text-sm"
    >
      ALL PRODUCT
    </div>
    <div id="filter" class="flex justify-around w-full mt-3">
      <div>{{ sum }}products</div>

    <div class="lg:grid lg:grid-cols-3 flex flex-col text-2xl md:text-xl ">
      <ul v-for="item in products" :key="item.productId">
        <div
          class=" lg:m-4 px-5  mb-20 border-2 border-white hover:shadow-md delay-200 duration-400"
          isShow="true"
        >
          <router-link :to="`/product/${item.productId}`">
            <img :src="url + 'product/photo/' + item.productImage" />
            {{ item.productName }}<br />
            {{ item.price }} &#xE3F;
          </router-link>
        </div>
      </ul> 
    </div>

    <add-product ></add-product>
    </div>
  </div>
</template>
<script>
// import axios from "axios";
export default {
  name: "allProduct",

  data() {
    return {
      sort: "none",
      url: "http://13.67.44.15/cosmeticbe/",
      productImage: "",     
    };
  },
  methods: {
    // fetchProduct() {
    //   axios
    //     .get(this.url + "product")
    //     .then((response) => {
    //       this.products = response.data;
    //       return response.data;
    //     })
    //     .then((data) => {
    //       this.products = data;
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },

    changeSort() {
      // if(sortBy == "")
      // console.log("change"+sortBy)
    },
   
  },
  computed: {
    sum() {
      return this.products.length;
    },
  },
  props: { products: Object },
};
</script>
