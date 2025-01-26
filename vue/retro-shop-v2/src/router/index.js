import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Catalog from '@/pages/Catalog.vue'
import Product from '@/pages/Product.vue'
import Auth from '@/pages/Auth.vue'
import Main from '@/pages/Main.vue'

import { getCookie } from '@/service/auth'


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
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,

    },
    {
      path: '/auth',
      name: 'auth',
      component: Auth
    },
    {
      path: '/main',
      name: 'main',
      component: Main
    }
  ]
})

routes.beforeEach((to, from, next) => {
  const cookie = getCookie()

  if (cookie?.token && to.name === 'auth') {
    next({ name: 'main' })
  }
  else if (!cookie?.token && to.name === 'main') {
    next({ name: 'auth' })
  }
  else {
    next()
  }
})

export default routes
