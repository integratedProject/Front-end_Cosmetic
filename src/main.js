import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import searchingBox from "@/components/SearchingBox.vue";



createApp(App).component('searching-box', searchingBox)
.use(router).mount('#app')
