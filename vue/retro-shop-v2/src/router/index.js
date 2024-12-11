import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Catalog from '../pages/Catalog.vue'



const routes = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: Catalog
    }
  ]
})

export default routes
