<template>
  <div
    id="footer"
    class="my-12 mx-52 border-t-2 border-grey flex justify-center gap-4 w-auto"
  >
    <div>
      <div class="text-2xl p-10">
        FOLLOW US
      </div>

      <div id="iconSocial" class="grid grid-cols-3 gap-6">
        <div
          class="rounded-full h-24 w-24 flex items-center border-4 border-gray-500 hover:border-black "
        >
          <img class="p-3 w-32" src="@/assets/facebook.png" />
        </div>
        <div
          class="rounded-full h-24 w-24 flex items-center border-4 border-gray-500 hover:border-black"
        >
          <img class="p-3 w-32" src="@/assets/instagram.png" />
        </div>
        <div
          class="rounded-full h-24 w-24 flex items-center border-4 border-gray-500 hover:border-black"
        >
          <img class="p-3" src="@/assets/twitter.png" />
        </div>
      </div>
    </div>
    <div class="p-10 ">
      Address : <br />
      30 Avenue Montaigne, 75008 Paris, France <br />
      Phone : +33 1 45 63 12 51
    </div>
  </div>
</template>
<style scoped>
#footer {
  color: gray;
}
</style>
<script>
export default {
  name: "Footer",
};
</script>
