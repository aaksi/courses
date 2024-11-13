import './assets/main.css'

import { createRouter, createWebHistory } from 'vue-router'
import { createApp } from 'vue'
import App from './App.vue'

import Component1 from './components/Component1.vue'
import Component2 from './components/Component2.vue'
import Component3 from './components/Component3.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
    name: 'Component1',
    path: '/',
    component: () => import('./components/Component1.vue')
  },
    {
    name: 'Component2',
    path: '/component2',
    component: () => import('./components/Component2.vue')
  },
    {
    name: 'Component3',
    path: '/component3/:id(\\d+)',
    component: () => import('./components/Component3.vue')
  },
]
})
createApp(App).use(router).mount('#app')

