import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Brands from '@/views/Brands.vue'
import Cart from '@/views/Cart.vue'
import AddProduct from '@/views/Add-product.vue'
import Employees from '@/views/Employees.vue'
import ErrorPage from '@/views/Error-page.vue'
import AllProduct from '@/views/AllProduct.vue'
import Product from '@/views/Product.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brands',
    name: 'Brands',
    component: Brands
  },
  
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/add-product',
    name: 'Add-product',
    component: AddProduct
  },
  {
    path: '/employees',
    name: 'Employees',
    component: Employees
  },
  {
    path: '/product',
    name: 'All-product',
    component: AllProduct
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product 
  },
  {
    path: '/:catchNotMatchPath(.*)',
    name: 'Error-page',
    component: ErrorPage
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
