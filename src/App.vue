<template>
  <div id="app" class="sm:text-xl text-sm sm:px-32 px-0">
    <!-- navigationBar -->
    <div
      id="nav"
      :class="{ scrolled: !view.atTopOfPage }"
      class="sticky bg-white duration-500 z-10  "
    >
      <div
        id="titleName"
        class="border-b-2 border-black mx-auto mb-5 sm:mb-10  mt-5"
      >
        <router-link to="/">
          <span class="xl:text-3xl sm:text-2xl text-xl">COSMETIC</span>
        </router-link>
      </div>
      <div class="flex justify-between items-center text-xs sm:text-lg mb-5">
        <router-link
          to="/"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600 "
          >HOME</router-link
        >
        <router-link
          to="/product"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600 "
          >PRODUCT</router-link
        >
        <router-link
          to="/cart"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600"
          >CART</router-link
        >
        <router-link
          to="/employees"
          class=" border-b border-black border-opacity-0 px-2 hover:border-opacity-100 hover:text-gray-600"
          >EMPLOYEES</router-link
        >
      </div>
    </div>
    <router-view
      @add="addToCart"
      @edit="editProduct"
      @exitPage="exitPage"
      @deletedProduct="deletedProduct"
      @addNewProduct="addNewProduct"
      :productCart="productCart"
      :products="products"
      :productEdited="productEdited"
    />
  </div>
</template>

<style>
#app {
  font-family: Javanese Text;
  text-align: center;
  color: black;
}

#nav.scrolled {
  @apply p-1;
  transition-duration: 500ms;
}

.btn {
  border-color: black;
  border-width: 2px;
  border-radius: 9999px;
}
.btn:hover {
  transition-duration: 300ms;
  color: white;
  background-color: rgb(209, 213, 219);
}
</style>
<script>
import axios from "axios";
export default {
  name: "App",

  data() {
    return {
      view: {
        atTopOfPage: true,
      },
      url: "http://13.67.44.15/cosmeticbe/",
      // url:" http://localhost:5000/",
      productCart: [],
      products: [],
      product: null,
      productEdited: null,
    };
  },
  methods: {
    handleScroll() {
      if (window.pageYOffset > 0) {
        this.view.atTopOfPage = false;
      } else {
        this.view.atTopOfPage = true;
      }
    },
    addToCart(addingProduct) {
      this.productCart = this.productCart.filter(
        (product) => product.productId != addingProduct.productId
      );
      this.productCart.push(addingProduct);
    },
    editProduct(editingProduct) {
      this.productEdited = editingProduct;
    },

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
    exitPage() {
      this.productEdited = null;
    },
    deletedProduct(deletingProduct) {
      this.products = this.products.filter(
        (product) => product.productId != deletingProduct
      );
      this.$router.push({ name: "All-product" });
    },
    addNewProduct(addingNewProduct) {
      this.products.push(addingNewProduct);
      this.$router.push({ name: "All-product" });
    },
  },

  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  mounted() {
    this.fetchProduct();
  },
};
</script>
