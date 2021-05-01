import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import searchingBox from "@/components/SearchingBox.vue";
import addProduct from "@/components/AddProductBtn.vue";
import footer from "@/components/Footer.vue";


createApp(App).component('searching-box', searchingBox)
.component('add-product',addProduct)
.component('footer-component',footer)
.use(router).mount('#app')
