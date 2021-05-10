<template>
  <div
    id="product"
    class="lg:grid lg:grid-cols-2 flex flex-col gap-6 lg:mt-24 mt-12"
  >
    <!-- picture  -->
    <div>
      <img :src="url + 'product/photo/' + product.productImage" />
    </div>

    <!-- data  -->
    <div class="text-left grid grid-cols-2 gap-y-8 mx-5 gap-x-4">
      <div class="flex  col-span-2 space-x-6">
        <h1 class="text-3xl col-span-2">{{ product.productName }}</h1>
        <div class="flex md:space-x-2 space-x-0.5">
          <img
            src="@/assets/edit.png"
            @click="editButton()"
            class="h-6 cursor-pointer"
          />

          <img
            src="@/assets/delete.png"
            @click="deleteButton()"
            class="h-6 cursor-pointer"
          />
        </div>
      </div>
      <p class="text-gray-500 mx-2">{{ product.brandId.brandName }}</p>
      <p class="col-span-2">{{ product.description }}</p>
      <p class="text-2xl">{{ product.price }}</p>
      <p>Launch: {{ product.launchDate }}</p>
      <!-- add to cart  -->
      <div>
        Add to cart
        <div class="flex m-3 ml-0 h-12 w-full flex-wrap">
          <img src="@/assets/shopping-cart.png" class="h-full mx-3" />
          <div class="border-2 border-black px-5 text-2xl flex items-center">
            {{ quantity }}
          </div>

          <div class="flex">
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
      </div>
      <div class="flex flex-col justify-start ">
        <div>
          Select Color
        </div>
        <div>COLOR: {{ color }}</div>
        <div class="grid grid-cols-5 gap-4">
          <span
            class="colorDot cursor-pointer"
            :style="{ backgroundColor: item.codeColor }"
            v-for="item in product.colors"
            :key="item.colorId"
            @click="setColorName(item.colorName)"
          ></span>
        </div>
        <div class="text-red-500" v-if="isSelectedColor">
          Please select color
        </div>
      </div>

      <button @click="addProduct" class="btn px-5 py-0.5 focus:outline-none">
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
      color: "none",
      url: "http://13.67.44.15/cosmeticbe/",

      product: {
        productId: null,
        productName: null,
        productImage: null,
        price: null,
        launchDate: null,
        description: null,
        brandId: {
          brandId: null,
          brandName: null,
        },
      },
      quantity: 1,
      isSelectedColor: false,
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
      this.isSelectedColor = false;
    },
    addProduct() {
      if (this.color != "none") {
        let addingProduct = this.product;
        addingProduct.quantity = this.quantity;
        addingProduct.color = this.color;
        this.$emit("add", addingProduct);
        this.$router.push("/cart");
      } else {
        this.isSelectedColor = true;
      }
    },
    async deleteButton() {
      let confirmDelete = confirm("Do you want to delete ?");
      if (confirmDelete) {
        try {
          await fetch(this.url + "product/" + this.product.productId, {
            method: "DELETE",
          });

          this.$emit("deletedProduct", this.product.productId);
        } catch (error) {
          console.error(error);
        }
      }
    },
    editButton() {
      console.log("edit func");
      this.$emit("edit", this.product);
      this.$router.push("/add-product");
    },
  },
  props: {
    products: Array,
  },
  mounted() {
    this.products.forEach((product) => {
      if (product.productId == this.$route.params.id) {
        this.product = product;
        console.log(this.product);
      }
    });

    if (this.product.productId == null) {
      this.$router.push("/pageNotFound");
    }
  },
};
</script>
