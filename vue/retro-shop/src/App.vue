<script setup>
import { ref, provide, onMounted } from 'vue'
import { RouterView } from 'vue-router'
import axios from 'axios'

import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Cart from './components/Cart.vue'

import { URL } from './constans'

const catalogCategories = ref([
  {
    id: 1,
    name: 'all',
    link: 'all',
    active: true
  },
  {
    id: 2,
    name: 'sofa',
    link: 'sofa',
    active: false
  },
  {
    id: 3,
    name: 'Lamp',
    link: 'lamp',
    active: false
  },
  {
    id: 4,
    name: 'chair',
    link: 'chair',
    active: false
  }
])
const productsActive = ref([])
const products = ref([])
const productsPerPage = ref(3)
const cartActive = ref(false)
const cartItems = ref([])

function categoryActivated(id) {
  productsPerPage.value = 3
  catalogCategories.value.forEach((el) => (el.active = false))

  catalogCategories.value.find((el) => {
    if (el.id === id) {
      el.active = true
      setProductActive(productsActive, el.name)
    }
  })
}
function setProductActive(arr, type) {
  if (type.toLowerCase() === 'all') {
    arr.value = products.value
    return
  }
  arr.value = []
  products.value.forEach((el) => {
    console.log(arr.value)

    if (el.type.toLowerCase() === type.toLowerCase()) {
      arr.value.push(el)
    }
  })
  console.log(arr)
  return arr
}

const getProducts = async (url) => {
  const { data } = await axios.get(`${url}items`)
  products.value = data
}

function shuffleArray(array) {
  function compareRandom() {
    return Math.random() - 0.5
  }
  return array.sort(compareRandom)
}

function cartActiveToggle() {
  cartActive.value = !cartActive.value
}

function addToCart(id) {
  if (cartItems.value.length) {
    if (cartItems.value.find((el) => el.id == id)) return
  }
  products.value.forEach((el) => {
    if (el.id === id) {
      el.cart = true
      cartItems.value.push(el)
    }
  })

  localStorage.setItem('cart', JSON.stringify(cartItems.value))
}

function deleteItemArr(arr, id) {
  return arr.filter((el) => el.id !== id)
}

function deleteItemCart(id) {
  cartItems.value.forEach((el) => {
    if (el.id === id) {
      el.cart = false
      cartItems.value = deleteItemArr(cartItems.value, el.id)
      localStorage.setItem('cart', JSON.stringify(cartItems.value))
    }
  })
}

function getPreviewProducts(arr, count, status) {
  // console.log('status', status);
  console.log('start', arr)
  return arr
    .filter((el) => (el.status ? el.status.toLowerCase() : el.status) === status.toLowerCase())
    .slice(0, count)
  console.log('arr', arr)
}

onMounted(async () => {
  cartItems.value = JSON.parse(localStorage.getItem('cart')) || []
  await getProducts(URL)
  await shuffleArray(products.value)

  productsActive.value = products.value
})

provide('productsPerPage', productsPerPage)
provide('catalogCategories', catalogCategories)
provide('categoryActivated', categoryActivated)
provide('products', productsActive)
provide('cartItems', cartItems)
provide('addToCart', addToCart)
provide('deleteItemCart', deleteItemCart)
provide('getPreviewProducts', getPreviewProducts)
</script>

<template>
  <div class="g-main" :class="{ 'is-active': cartActive }">
    <Header @cartActiveToggle="cartActiveToggle" :cartItems="cartItems"></Header>
    <RouterView />
    <Cart @cartActiveToggle="cartActiveToggle" :cartActive="cartActive"></Cart>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
