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
        <!-- image -->
        <div class="m-5">
          <label class="label" for="image">PRODUCT image : </label>
          <input
            type="file"
            id="image"
            accept="image/*,.pdf"
            class="m-3 "
            @input="fileChange"
            required
          />
          <!-- @input="entered.image" -->
          <p v-if="invalid.imageInput" class="text-red-500">
            Please enter product image!
          </p>
        </div>
        <!-- price  -->
        <div class="m-5">
          <label class="label" for="price">PRODUCT PRICE : </label>
          <input
            type="number"
            id="price"
            step="any"
            v-model.trim="entered.price"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.priceInput" class="text-red-500">
            Please enter product price!
          </p>
        </div>

        <!-- launch date -->
        <div class="m-5">
          <label class="label" for="date">PRODUCT DATE : </label>
          <input
            type="date"
            id="date"
            placeholder="dd-mm-yyyy"
            v-model.trim="entered.launchDate"
            class="m-3 border-black border-b-2 focus:outline-none"
          />
          <p v-if="invalid.dateInput" class="text-red-500">
            Please enter product date!
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

        <!-- brand  -->
        <div>
          <label class="label" for="brand">PRODUCT BRAND : </label>
          <select
            id="brand"
            class="m-3 border-black border-b-2 focus:outline-none"
            v-model.trim="entered.brand"
          >
            <option v-for="item in brand" :key="item.brandId" :value="item">{{
              item.brandName
            }}</option>
          </select>
          <p v-if="invalid.brandInput" class="text-red-500">
            Please enter product brand!
          </p>
        </div>

        <!-- colors  -->
        <div class="m-5">
          <label class="label" for="color">PRODUCT COLOR : </label>
          <select
            class="m-3 border-black border-b-2 focus:outline-none"
            v-model.trim="entered.colors"
            multiple
          >
            <option
              v-for="color in colors"
              :key="color.colorId"
              :value="color"
              >{{ color.colorName }}</option
            >
          </select>
          <p v-if="invalid.colorInput" class="text-red-500">
            Please enter product color!
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
import axios from "axios";
export default {
  data() {
    return {
      entered: {
        name: "",
        image: "",
        price: "",
        launchDate: "",
        description: "",
        brand: null,
        colors: [],
      },
      invalid: {
        nameInput: false,
        imageInput: false,
        priceInput: false,
        launchDateInput: false,
        descriptionInput: false,
        brandInput: false,
        colorsInput: false,
      },
      // url: "http://localhost:5000/Product ",
      url: "http://13.67.44.15/cosmeticbe/",
      isEditing: false,
      editProductData: [],
      colors: [],
      brand: [],
    };
  },
  methods: {
    submitForm() {
      this.invalid.nameInput =
        this.entered.name === undefined || this.entered.name === ""
          ? true
          : false;
      this.invalid.imageInput =
        this.entered.image === undefined || this.entered.image === ""
          ? true
          : false;
      this.invalid.priceInput =
        this.entered.price === undefined || this.entered.price === ""
          ? true
          : false;
      this.invalid.launchDateInput =
        this.entered.launchDate === undefined || this.entered.launchDate === ""
          ? true
          : false;

      this.invalid.descriptionInput =
        this.entered.description === undefined ||
        this.entered.description === ""
          ? true
          : false;
      this.invalid.brandInput =
        this.entered.brand === undefined || this.entered.brand === ""
          ? true
          : false;

      this.invalid.colorsInput =
        this.entered.colors === undefined || this.entered.colors === ""
          ? true
          : false;

      console.log(`${this.entered.name}`);
      console.log(`${this.entered.image}`);
      console.log(`${this.entered.price}`);
      console.log(`${this.entered.launchDate}`);
      console.log(`${this.entered.description}`);
      console.log(`${this.entered.brand}`);
      console.log(`${this.entered.colors}`);

      if (this.isEditing) {
        this.editProduct();
      } else {
        this.addProduct();
      }
      this.entered.name = "";
      this.entered.image = "";
      this.entered.price = "";
      this.entered.description = "";
      this.entered.launchDate = "";
      this.entered.brand = "";
      this.entered.colors = "";
    },
    addProduct() {
      let data = {
        productName: this.entered.name,
        productImage: this.entered.image.name,
        price: this.entered.price,
        launchDate: this.entered.launchDate,
        description: this.entered.description,
        brandId: this.entered.brand,
        colors: this.entered.colors,
      };
      console.log(data);
      let jsonData = JSON.stringify(data);
      let blob = new Blob([jsonData], {
        type: "application/json",
      });
      let form = new FormData();
      form.append("file", this.entered.image);
      form.append("product", blob);
      fetch(this.url + "product/add ", {
        method: "POST",
        body: form,
      })
        .then((response) => {
          if (response.ok) {
            console.log("data saved");
            this.$emit("addNewProduct", data);
          } else {
            throw new Error("Could not save data!");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async editProduct() {
      let data = {
        productName: this.entered.name,
        productImage: this.entered.image.name,
        price: this.entered.price,
        launchDate: this.entered.launchDate,
        description: this.entered.description,
        brandId: this.entered.brand,
        colors: this.entered.colors,
      };
      console.log(data);
      let jsonData = JSON.stringify(data);
      let blob = new Blob([jsonData], {
        type: "application/json",
      });
      let form = new FormData();
      form.append("file", this.entered.image);
      form.append("product", blob);
      fetch(this.url + "product/edit/" + this.productEdited.productId, {
        method: "PUT",
        body: form,
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
    fetchColor() {
      axios
        .get(this.url + "color")
        .then((res) => res.data)
        .then((data) => {
          this.colors = data;
        });
    },
    fetchBrand() {
      axios
        .get(this.url + "brand")
        .then((res) => res.data)
        .then((data) => {
          this.brand = data;
        });
    },
    fileChange(e) {
      this.entered.image = e.target.files[0];
      // console.log(this.entered.image.name);
    },
  },
  mounted() {
    this.fetchColor();
    this.fetchBrand();
    this.editProductData = this.editingProduct;

    if (this.productEdited != null) {
      this.isEditing = true;

      console.log(this.productEdited);
      this.entered.name = this.productEdited.productName;
      this.entered.image = this.productEdited.productImage;
      this.entered.price = this.productEdited.price;
      this.entered.launchDate = this.productEdited.launchDate;
      this.entered.description = this.productEdited.description;
      this.entered.brand = this.productEdited.brandId;
      this.entered.colors = this.productEdited.colors;
    }
  },
  props: {
    products: Array,
    productEdited: Object,
  },
  updated() {
    console.log(this.entered.colors);
  },
  beforeUnmount() {
    this.$emit("exitPage");
  },
};
</script>
