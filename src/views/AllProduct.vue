<template>
  <div id="AllProduct">
    <div
      class="border-2 border-black px-10 py-5  w-1/6 mx-auto "
    >
      ALL PRODUCT
    </div>

    <div class="grid grid-cols-3 text-2xl">
      <ul v-for="item in allProduct" :key="item.productid">
        <div class="p-10 m-20  ">
          <img :src="item.productimage" />
          {{ item.productname }}
        </div>
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
};
</script>
