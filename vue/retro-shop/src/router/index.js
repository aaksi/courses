import { createRouter, createWebHistory } from 'vue-router'
import Catalog from '@/pages/CatalogPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import Home from '@/pages/Home.vue'
import Rooms from '@/pages/RoomsPage.vue'
import Room from '@/pages/RoomPage.vue'

const ROUTES_PATH = {
  HOME: '/',
  PRODUCT: '/catalog/:name/',
  CATALOG: '/catalog/',
  ROOMS: '/rooms/',
  ROOM: '/rooms/:name/',
  RANDOM: '/random',
}
const TRANSITION = 'fade'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: ROUTES_PATH.HOME,
      name: 'home',
      component: Home,
      // component: {default: Home, header: HeaderAbsolute }
      props: true,
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
      // props: true,
      props: {headerTest : true},

    },
    {
      path: ROUTES_PATH.ROOMS,
      name: 'rooms',
      component: Rooms,
      props: true,
    },
    {
      path: ROUTES_PATH.ROOM,
      name: 'room',
      component: Room,
      props: true,
    }
  ]
})

export default router
