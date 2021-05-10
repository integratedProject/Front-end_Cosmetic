<template>
  <!-- insert navbar  -->
  <div
    class="border-2 border-black px-5 lg:py-5 py-2   lg:w-1/6 mx-auto w-max  md:text-sm"
  >
    YOUR CART
  </div>

  <div class="lg:flex justify-center items-start my-3">
    <!-- List Order -->
    <div class="box-border ">
      <div v-for="cart in cartList" :key="cart.productId">
        <div class="grid grid-cols-2 ">
          <div>
            <img
              :src="url + 'product/photo/' + cart.productImage"
              class="w-full"
            />
          </div>
          <div class="text-left m-5">
            <p>{{ cart.productName }}</p>
            <p>{{cart.color}}</p>
            <p>{{ cart.price }}  &#xE3F;</p>
            <p>Total : {{ cart.quantity }}</p>

          </div>
        </div>
      </div>
    </div>
    <!-- Order Summary -->
    <div
      class="border-2 border-black bg-gray-300 p-5 flex  flex-col min-w-max m-5 lg:m-0  "
    >
      ORDER SUMMARY:
      <div class="bg-white ">
        <div v-for="cart in cartList" v-bind:key="cart.productid">
          <div class="flex justify-between m-5 space-x-6">
            <div>
               <p>{{ cart.productName }}</p>
               <p class="font-light leading-none ">x{{cart.quantity}}</p>
            </div>
           
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
export default {
  name: "product",
  data() {
    return {
      cartList: [],
       url: "http://13.67.44.15/cosmeticbe/",
    };
  },
  props: {
    productCart: Object,
  },
  computed: {

    getTotalPrice() {
      let price = 0;
      this.cartList.forEach((cart) => {
        price += parseFloat(cart.price * cart.quantity);
      });

      return price;
    },
  },
  mounted() {
    this.cartList = this.productCart;
    // console.log(this.cartList);
  },
};
</script>
