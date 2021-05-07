<template>
  <div id="product" class="grid grid-cols-2 gap-6">
    <!-- picture  -->
    <div>
      <!-- test path -->
      <img :src="productimage" />
      {{ productid }}
    </div>

    <!-- data  -->
    <div class="text-left grid grid-cols-2">
      <div class="flex  col-span-2 space-x-6">
        <h1 class="text-3xl col-span-2">{{ productname }}</h1>
        <div class="flex space-x-2">
          <img src="@/assets/edit.png" class="h-6" />

          <img src="@/assets/delete.png" @click="deleteProduct()" class="h-6" />
        </div>
      </div>

      <p class="col-span-2">{{ description }}</p>
      <p class="text-2xl">{{ price }} &#xE3F;</p>
      <p class="mr-20">Launch: {{ launch_date }}</p>
      <!-- add to cart  -->
      <div>
        Add to cart
        <div class="flex m-3 ml-0 h-12">
          <img src="@/assets/shopping-cart.png" class="h-full mx-3" />
          <div class="border-2 border-black px-5 text-2xl flex items-center">
            {{ quantity }}
          </div>

          <div
            class="h-6 w-6 rounded-full border-2 border-gray-500 flex justify-center items-center hover:border-black m-3 mr-1 cursor-pointer"
            @click="decrement"
          >
            <div class="leading-none mt-1">-</div>
          </div>
          <div
            class="h-6 w-6 rounded-full border-2 border-gray-500 flex justify-center items-center hover:border-black m-3 ml-1 cursor-pointer"
            @click="increment"
          >
            <div class="leading-none mt-1">+</div>
          </div>
        </div>
      </div>
      <div class="flex flex-col justify-start ">
        <div class="">
          Select Color
        </div>
        <div class="">COLOR: {{ color }}</div>
        <div class="grid grid-cols-5 gap-4">
          <!-- เหลือ add click -->
          <span
            class="colorDot"
            :style="{ backgroundColor: item.code }"
            v-for="item in colors"
            :key="item.id"
            @click="setColorName(item.name)"
          ></span>
        </div>
      </div>
      <div>
        Total :
      </div>
      <button @click="addProduct">
        cart
      </button>
    </div>
  </div>
</template>
<style scoped>
.colorDot {
  height: 20px;
  width: 20px;
  border-radius: 50%;
  display: inline-block;
}
</style>
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
      color: "none",
      url: "http://localhost:5000/",

      colors: [
        {
          id: "col001",
          name: "red",
          code: "#FF0000",
        },
        {
          id: "col002",
          name: "blue",
          code: "#0000FF",
        },
        {
          id: "col003",
          name: "green",
          code: "#00FF00",
        },
        {
          id: "col001",
          name: "red",
          code: "#FF0000",
        },
        {
          id: "col002",
          name: "blue",
          code: "#0000FF",
        },
        {
          id: "col003",
          name: "green",
          code: "#00FF00",
        },
        {
          id: "col001",
          name: "red",
          code: "#FF0000",
        },
        {
          id: "col002",
          name: "blue",
          code: "#0000FF",
        },
        {
          id: "col003",
          name: "green",
          code: "#00FF00",
        },
        {
          id: "col001",
          name: "red",
          code: "#FF0000",
        },
        {
          id: "col002",
          name: "blue",
          code: "#0000FF",
        },
        {
          id: "col003",
          name: "green",
          code: "#00FF00",
        },
      ],
    };
  },
  methods: {
    increment() {
      this.quantity++;
    },
    decrement() {
      if (this.quantity <= 0) {
        this.quantity == 1;
      } else {
        this.quantity--;
      }
    },
    setColorName(name) {
      this.color = name;
    },
    addProduct() {
      this.$emit("add", { id: this.$route.params.id, quantity: this.quantity });
      // this.$router.push("/cart");
    },
    async deleteProduct() {
      console.log(this.productid);
      // try {
      //   await fetch(this.url + "product/" + this.productid, {
      //     method: "DELETE",
      //   });
      //   this.$router.push({ name: "All-product" });
      // } catch (error) { 
      //   console.error(error);
      // }
    },
  },
};
</script>
