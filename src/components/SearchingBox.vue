<template>
  <div id="searchingBox">
    <form>
      <div class="flex justify-around rounded-full p-2 border-2 border-black">
        <input
          type="text"
          id="searching"
          v-model="searchInput"
          placeholder="  What are you looking for ?"
          class="w-4/5 focus:outline-none px-2 "
        />
        
          <button v-if="isSearching" type="button" class="w-8 mx-1 ">
            <img src="@/assets/clear.png" />
          </button>
      
        <button v-else type="submit" class="w-8 mx-1">
          <img src="@/assets/search.png" />
        </button>
      </div>
    </form>
  </div>
</template>
<script>
export default {
  name: "SearchingBox",
  data() {
    return {
      isSearching:false,
      searchedResult: [],
      searchInput: "",
    };
  },
  methods: {
    search(searchInput) {
      console.log(searchInput);
    },
  },
  updated() {
    if (this.searchInput =='' ) {
      this.isSearching = false;
    } else {
      this.isSearching = true;
      this.search(this.searchInput);
    }
  },
};
</script>
