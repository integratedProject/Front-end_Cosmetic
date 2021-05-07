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
          class="rounded-full h-28 w-28 flex items-center opacity-75 cursor-pointer"
        >
          <a href="https://www.facebook.com/chanel"><img class="p-3 w-32" src="@/assets/facebook.png" /></a>
        </div>
        <div
          class="rounded-full h-28 w-28 flex items-center opacity-75 cursor-pointer"
        >
          <a href="https://www.instagram.com/narsissist/"><img class="p-3 w-32" src="@/assets/instagram.png" /></a>
        </div>
        <div
          class="rounded-full h-28 w-28 flex items-center opacity-75 cursor-pointer"
        >
          <a href="https://twitter.com/Dior?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><img class="p-3" src="@/assets/twitter.png" /></a>
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
