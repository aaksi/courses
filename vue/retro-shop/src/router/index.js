import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/pages/Catalog.vue'
import ProductPage from '@/pages/ProductPage.vue'
import Home from '@/pages/Home.vue'

const ROUTES_PATH = {
  HOME: '/',
  PRODUCT: '/catalog/:name/',
  CATALOG: '/catalog/',
  RANDOM: '/random',
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME,
      name: 'home',
      component: Home,
    },
    {
      path: ROUTES_PATH.CATALOG,
      name: 'catalog',
      component: Catalog,
      props: true,
      
    },
    {
      path: ROUTES_PATH.PRODUCT,
      name: 'product',
      component: ProductPage,
      props: true,
      
    }
  ]
})

export default router
