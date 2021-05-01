import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Brands from '@/views/Brands.vue'
import MakeupTypes from '@/views/Makeup-types.vue'
import Lipstick from '@/views/Lipstick.vue'
import Blush from '@/views/Blush.vue'
import EyeShadow from '@/views/Eye-shadow.vue'
import Cart from '@/views/Cart.vue'
import AddProduct from '@/views/Add-product.vue'
import Employees from '@/views/Employees.vue'
import ErrorPage from '@/views/Error-page.vue'
import AllProduct from '@/views/AllProduct.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/brands',
    name: 'Brands',
    component:Brands
  },
  {
    path: '/makeup-types',
    name: 'Makeup-types',
    component:MakeupTypes
  },
  {
    path: '/lipstick',
    name: 'Lipstick',
    component:Lipstick
  },
  {
    path: '/blush',
    name: 'Blush',
    component:Blush
  },
  {
    path: '/eye-shadow',
    name: 'Eye-shadow',
    component:EyeShadow
  },
  {
    path: '/cart',
    name: 'Cart',
    component:Cart
  },
  {
    path: '/add-product',
    name: 'Add-product',
    component:AddProduct
  },
  {
    path: '/employees',
    name: 'Employees',
    component:Employees
  },
  {
    path: '/all-product',
    name: 'All-product',
    component: AllProduct
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
