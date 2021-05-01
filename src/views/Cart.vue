
    <template>
      <!-- insert navbar  -->
      <div class="flex justify-start">YOUR CART</div>
      <div v-for="cart in cartList" v-bind:key="cart.productid">
        <div class="flex flex-row">
          <div>
            <img v-bind:src="cart.productimage" />
          </div>

          <div class="text-left">
            <p>{{ cart.productid }}</p>
            <p>{{ cart.productname }}</p>
            <p>{{ cart.price }}</p>
            <p>{{ cart.launch_date }}</p>
            <p>{{ cart.description }}</p>
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
            cartList: {},
            test: [1, 2, 3, 4, 5],
            productURL: "http://localhost:5000/product",

          };
        },
        methods: {
          fetchCart() {
            axios
              .get(this.productURL)
              .then((response) => {
                this.cartList = response.data

                console.log(response.data);

                return response.data;
              })
              .then((data) => {
                this.cartList = data;
                console.log(data);
              })
              .catch((error) => {
                console.log(error);
              });
          },
        },
      };
    </script>
