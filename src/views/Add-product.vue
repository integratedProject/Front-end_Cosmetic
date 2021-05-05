<template>
  <div id="add-product">
    <div class="border-2 border-black px-10 py-5  w-1/6 mx-auto">
      NEW PRODUCT
    </div>
    <!-- form  -->
    <div>
      <form name="add-form">
        <div class="m-5">
          <label class="label" for="name">NAME: </label><br />
          <input type="text" id="name" v-model.trim="enteredName" class="m-3" />
          <p v-if="invalidNameInput" class="text-red-500">
            Please enter product name!
          </p>
        </div>
        <div class="m-5">
          <label class="label" for="description">PRODUCT DESCRIPTION: </label><br />
          <input type="text" id="description" v-model.trim="enteredDescription" class="m-3" />
          <p v-if="invalidDescriptionInput" class="text-red-500">
            Please enter product description!
          </p>
        </div>
         <div class="m-5">
          <label class="label" for="price">PRODUCT PRICE: </label><br />
          <input type="text" id="price" v-model.trim="enteredPrice" class="m-3" />
          <p v-if="invalidPriceInput" class="text-red-500">
            Please enter product price!
          </p>
        </div>
        
      </form>
    </div>
  </div>
</template>
