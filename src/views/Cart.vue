<template>
  <!-- insert navbar  -->
  <div class="border-2 border-black px-10 py-5  w-1/6 mx-auto md:text-sm">
    YOUR CART
  </div>

  <div class="flex justify-center items-start">
    <!-- List Order -->
    <div class="box-border ">
      <div v-for="cart in cartList" v-bind:key="cart.productid">
        <div class="grid grid-cols-2">
          <div >
            <img v-bind:src="cart.productimage" class="w-full" />
          </div>

          <div class="text-left m-5">
            <p>{{ cart.productname }}</p>
            <p>{{ cart.price }}</p>
            <p>x quantity</p>
            <!-- <p>{{ cart.description }}</p> -->  
          </div>
        </div>
      </div>
    </div>
    <!-- Order Summary -->
    <div class="border-2 border-black bg-gray-300 p-5 flex  flex-col min-w-max">
      ORDER SUMMARY:
      <div class="bg-white ">
        <div v-for="cart in cartList" v-bind:key="cart.productid">
          <div class="flex justify-between m-5 space-x-6">
            <p>{{ cart.productname }}</p>
            <p>{{ cart.price }}</p>
          </div>
        </div>
        <div class="border-t-2 border-black m-4 py-4 flex justify-between">
          <p>Total</p>
          <p>{{ getTotalPrice }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "product",
  created() {
    this.fetchCart();
  },
  data() {
    return {
      cartList: [],
      productURL: "http://localhost:5000/product",
    };
  },
  methods: {
    fetchCart() {
      axios
        .get(this.productURL)
        .then((response) => {
          this.cartList = response.data;

          // console.log(response.data);

          return response.data;
        })
        .then((data) => {
          this.cartList = data;
          // console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  computed: {
    getTotalPrice() {
      let price = 0;
      this.cartList.forEach((cart) => {
        price += parseFloat(cart.price);
      });

      return price;
    },
  },
};
</script>
