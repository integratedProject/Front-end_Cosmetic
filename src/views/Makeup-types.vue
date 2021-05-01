<template>
  <div id="makeupTypes">
    <searching-box></searching-box>

    <div class="mt-10">
      <div class="content-header flex justify-between">
        <div class="border-2 border-black px-10 flex items-center">
          LIPSTICK
        </div>
        <div>
          <button class="btn">
            ALL
          </button>
        </div>
      </div>
      <div class="grid grid-cols-3 text-2xl">
        <ul v-for="item in product" :key="item.productid">
          <div class="p-10 m-20  ">
            <img :src="item.productimage" />
          </div>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Makeup-types",
  data() {
      return {
          product : null
      }
  },
  methods: {
    async fetchProduct() {
      try {
        const res = await fetch("http://localhost:5000/product");
        const data = await res.json();
        this.product = data;
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
