<template>
  <div id="product" class="grid grid-cols-2 gap-6">
    <!-- picture  -->
    <div>
      <!-- test path -->
      <img :src="productimage" />
      {{ productid }}
    </div>

    <!-- data  -->
    <div class="text-left">
      <h1>{{ productname }}</h1>
      <p>{{ description }}</p>
      <div>
        <p>{{ price }}</p>
        <p>Launch: {{ date }}</p>
        <!-- add to cart  -->
        Add to cart
        <div class="flex m-3">
          <img src="@/assets/shopping-cart.png" class="w-1/12 h-1/12 mx-3" />
          <span class="border-2 border-black px-5 text-2xl flex items-center">{{ quantity }}</span>
          <span >+</span>
          <span>-</span>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Product",
  data() {
    return {
      productid: this.$route.params.id,
      productname: "Rouge Dior",
      productimage:
        "https://www.dior.com/beauty/version-5.1610097138806/resize-image/ep/460/498/90/0/%252FY0172009%252FV007%252FY0172009_C017500999_E01_GHC.jpg?imwidth=460",
      price: "1750.00",
      launch_date: "20/02/1997",
      description:
        "Rouge Dior is the Dior lipstick with couture colors. True floral lip care, it is enriched with red peony and pomegranate flower extracts of natural origin. Rouge Dior dresses the lips in 75 bold colors with satin, matte, metallic or velvet finishes. Long-wear lipstick that ensures 16 hours of comfort* on the lips.",
      brand_brandid: "B02",
      quantity: 1,
    };
  },
};
</script>
