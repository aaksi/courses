import { createRouter, createWebHistory } from 'vue-router'
import { ROUTES_PATH } from '@/constants/router'
import Home from '../pages/Home.vue'
import Cocktail from '../pages/Cocktail.vue'
import CocktailRandom from '../pages/CocktailRandom.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME,
      name: ROUTES_PATH.HOME,
      component: Home
    },
    {
      path: ROUTES_PATH.COCKTAIL,
      name: ROUTES_PATH.COCKTAIL,
      component: Cocktail
    },
    {
      path: ROUTES_PATH.RANDOM,
      name: ROUTES_PATH.RANDOM,
      component: CocktailRandom
    },
    
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
