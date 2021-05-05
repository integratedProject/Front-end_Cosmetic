<template>
  <div id="product">
    <h1>Product Page</h1>
    <!-- picture  -->
    <div></div>
    {{productid}}
    <!-- data  -->
    <div></div>
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
    };
  },
};
</script>
