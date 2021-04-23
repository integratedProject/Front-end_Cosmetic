<template>
  <div id="nav" class="sticky top-0  m-5 p-10 ">
    <div class="border-b-2 border-black mx-40 mb-10 ">
      <span class="text-3xl">COSMETIC</span>
    </div>  
    <div class="flex justify-center items-center space-x-28 ">
      <router-link to="/" >HOME</router-link>
      <router-link to="/brands" class="font-light">PRODUCT</router-link>
      <router-link to="/cart">CART</router-link>
      <router-link to="/employees">EMPLOYEES</router-link>
      <searching-box></searching-box>
    </div>
  </div>
  <router-view />
</template>

<style>
#app {
  font-family: Javanese Text;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

</style>
<script>
import searchingBox from '@/components/SearchingBox.vue'

export default ({
  name:'App',
components:{
  searchingBox
}
})
</script>

