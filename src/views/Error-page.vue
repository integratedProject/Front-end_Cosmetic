<template>
  <div id="error" class="">
    <div class="mx-auto h-1/3 w-1/3">
      <img src="@/assets/error.png" class="px-20 " />
    </div>
    <path d="M0 0h24v24H0z" fill="none" />
    <path
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"
    />
    <div>
      <span class="text-3xl ">
        Sorry, Page not found!
      </span>
      <div class="p-10 text-xl">
        <router-link to="/" class="btn">Back to Home</router-link>
      </div>
    </div>
  </div>
</template>
