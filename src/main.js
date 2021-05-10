import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import addProduct from "@/components/AddProductBtn.vue";
import footer from "@/components/Footer.vue";


createApp(App).component('add-product',addProduct)
.component('footer-component',footer)
.use(router).mount('#app')
