<template>
  <div
    id="footer"
    class="my-12 border-t-2 pt-4 border-grey flex justify-center gap-4 w-auto text-xs sm:text-lg"
  >
    <div class="w-3/5">
      <div class="sm:text-2xl text-md items-center">
        FOLLOW US
      </div>

      <div id="iconSocial" class="flex justify-between">
        <div
          class="rounded-full h-28 w-28 flex items-center opacity-75 cursor-pointer"
        >
          <a href="https://www.facebook.com/chanel"><img class="w-4/5" src="@/assets/facebook.png" /></a>
        </div>
        <div
          class="rounded-full h-28 w-28 flex items-center opacity-75 cursor-pointer"
        >
          <a href="https://www.instagram.com/narsissist/"><img class="w-4/5" src="@/assets/instagram.png" /></a>
        </div>
        <div
          class="rounded-full h-28 w-28 flex items-center opacity-75 cursor-pointer"
        >
          <a href="https://twitter.com/Dior?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img class="w-4/5" src="@/assets/twitter.png" /></a>
        </div>
      </div>
    </div>
    <div class="items-center ">
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
