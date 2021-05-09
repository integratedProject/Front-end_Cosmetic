<template>
  <div id="add-product">
    <div class="border-2 border-black px-8 py-5  w-max mx-auto md:text-sm">
      NEW PRODUCT
    </div>
    <!-- form  -->
    <div>
      <form
        name="add-form"
        @submit.prevent="submitForm"
        class="lg:mx-28 text-left"
      >
        <!-- id  -->
        <div class="m-5">
          <label class="label" for="id">PRODUCT ID: </label>
          <input
            type="text"
            id="id"
            v-model.trim="entered.id"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.idInput" class="text-red-500">
            Please enter product id!
          </p>
        </div>
        <!-- name  -->
        <div class="m-5">
          <label class="label" for="name">PRODUCT NAME : </label>
          <input
            type="text"
            id="name"
            v-model.trim="entered.name"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.nameInput" class="text-red-500">
            Please enter product name!
          </p>
        </div>
        <!-- description -->
        <div class="m-5">
          <label class="label" for="description">PRODUCT DESCRIPTION : </label>
          <input
            type="text"
            id="description"
            v-model.trim="entered.description"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.descriptionInput" class="text-red-500">
            Please enter product description!
          </p>
        </div>
        <!-- price  -->
        <div class="m-5">
          <label class="label" for="price">PRODUCT PRICE : </label>
          <input
            type="text"
            id="price"
            v-model.trim="entered.price"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.priceInput" class="text-red-500">
            Please enter product price!
          </p>
        </div>
        <!-- color  -->
        <!-- <div class="m-5">
          <label class="label" for="color">PRODUCT COLOR : </label>
          <select
            id="colors"
            class="m-3 border-black border-b-2 focus:outline-none"
            v-model.trim="entered.color"
            multiple
          >
            <option
              v-for="item in product.colors"
              :key="item.colorId"
              :value="item.colorId"
              >{{ item.colorName }}</option
            >
          </select>
          <p v-if="invalid.colorInput" class="text-red-500">
            Please enter product color!
          </p>
        </div> -->
        <!-- launch date -->
        <div class="m-5">
          <label class="label" for="date">PRODUCT DATE : </label>
          <input
            type="date"
            id="date"
            placeholder="dd-mm-yyyy"
            v-model.trim="entered.date"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.dateInput" class="text-red-500">
            Please enter product date!
          </p>
        </div>
        <!-- picture -->
        <div class="m-5">
          <label class="label" for="picture">PRODUCT PICTURE : </label>
          <input
            type="file"
            id="picture"
            accept="image/*,.pdf"
            class="m-3 "
            required
          />
          <!-- @input="entered.picture" -->
          <p v-if="invalid.pictureInput" class="text-red-500">
            Please enter product picture!
          </p>
        </div>
        <div class="flex justify-center">
          <input type="submit" class="btn px-5 py-0.5" />
        </div>
      </form>
    </div>
    <footer-component></footer-component>
  </div>
</template>
<script>
export default {
  data() {
    return {
      color: "none",
      entered: {
        id: "",
        name: "",
        description: "",
        price: "",
        color: "",
        date: "",
        picture: "",
      },
      invalid: {
        idInput: false,
        nameInput: false,
        descriptionInput: false,
        priceInput: false,
        colorInput: false,
        dateInput: false,
        pictureInput: false,
      },
      url: "http://localhost:5000/Product ",
      isEditing: false,
    };
  },
  methods: {
    submitForm() {
      this.invalid.idInput =
        this.entered.id === undefined || this.entered.id === "" ? true : false;
      this.invalid.nameInput =
        this.entered.name === undefined || this.entered.name === ""
          ? true
          : false;
      this.invalid.descriptionInput =
        this.entered.description === undefined ||
        this.entered.description === ""
          ? true
          : false;
      this.invalid.priceInput =
        this.entered.price === undefined || this.entered.price === ""
          ? true
          : false;
      this.invalid.colorInput =
        this.entered.color === undefined || this.entered.color === ""
          ? true
          : false;
      this.invalid.dateInput =
        this.entered.date === undefined || this.entered.date === ""
          ? true
          : false;
      this.invalid.pictureInput =
        this.entered.picture === undefined || this.entered.picture === ""
          ? true
          : false;

      // console.log(`${this.name}`);
      // console.log(`${this.description}`);
      // console.log(`${this.price}`);
      // console.log(`${this.color}`);
      // console.log(`${this.date}`);
      // console.log(`${this.picture}`);
      if (this.isEditing) {
        this.editProduct();
      } else {
        this.addProduct();
      }
      this.entered.name = "";
      this.entered.description = "";
      this.entered.price = "";
      this.entered.color = "";
      this.entered.date = "";
      this.entered.picture = "";
    },
    addProduct() {
      fetch(this.url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: this.entered.id,
          name: this.entered.name,
          description: this.entered.description,
          price: this.entered.price,
          color: this.entered.color,
          date: this.entered.date,
          picture: this.entered.picture,
        }),
      })
        .then((response) => {
          if (response.ok) {
            console.log("data saved");
          } else {
            throw new Error("Could not save data!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  props: {
    products: Array,
  },
};
</script>
