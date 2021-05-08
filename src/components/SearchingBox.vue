<template>
  <div id="searchingBox" class="mx-40">
    <div
      class="flex justify-around rounded-full p-2 border-2 border-black hover:border-gray-600"
    >
      <input
        type="text"
        id="searching"
        v-model="searchInput"
        placeholder="  What are you looking for ?"
        class="w-4/5 focus:outline-none px-2 text-sm "
      />

      <button
        v-if="isSearching"
        type="button"
        class="w-8 mx-1 focus:outline-none"
      >
        <img src="@/assets/clear.png" />
      </button>

      <button v-else type="submit" class="w-8 mx-1 focus:outline-none">
        <img src="@/assets/search.png" />
      </button>
    </div>
    <!-- <div id="noPhoto" v-if="isNoPhoto">
      <p class="text-2xl text-center">No photo</p>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "SearchingBox",
  data() {
    return {
      isSearching: false,
      searchedResult: [],
      searchInput: "",
      // isShow: false,
      // showSrc: "",
      // isNoPhoto: false,
    };
  },
  methods: {
    search(searchInput) {
      console.log(searchInput);
    },
    // searchFunc(searching) {
    //   let sumPhoto = this.products.length;
    //   let index = 0;
    //   this.products.forEach((product) => {
    //     if (product.name.includes(searching)) {
    //       product.isShow = true;
    //     } else {
    //       product.isShow = false;
    //       index++;
    //     }
    //   });
    //   if (sumPhoto == index) {
    //     this.isNoPhoto = true;
    //   }
    // },
    // show(products) {
    //   this.isSow = true;
    //   this.showSrc = products.productImage;
    // },
  },
  updated() {
    if (this.searchInput == "") {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      this.search(this.searchInput);
    }
  },
};
</script>
