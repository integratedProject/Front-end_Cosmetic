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
          <product-preview>
            <router-link :to="`/product/${item.productId}`">
              <img :src="url + 'product/photo/' + item.productImage" />
              {{ item.productName }}<br />
              {{ item.price }} &#xE3F;
            </router-link>
          </product-preview>
        </ul>
      </div>
      <add-product></add-product>
    </div>
  </div>
</template>
<script>
import productPreview from "@/components/ProductPreview.vue";
export default {
  name: "allProduct",
  components: {
    productPreview,
  },

  data() {
    return {
      sort: "none",
      url: "http://13.67.44.15/cosmeticbe/",
      productImage: "",
    };
  },
  
  computed: {
    sum() {
      return this.products.length;
    },
  },
  props: { products: Object },
};
</script>
