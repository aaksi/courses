<script setup>
import { ref, provide, onMounted } from 'vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Catalog from './components/Catalog.vue'
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
  try {
    const res = await fetch(`${url}items`)
    const data = await res.json()
    console.log('products: ', data)

    products.value = data
  } catch (err) {
    console.error(err)
  }
}

const getCartItems = async (url) => {
  try {
    const res = await fetch(`${url}cart`)
    const data = await res.json()
    console.log('cartItems: ', data)

    cartItems.value = data
  } catch (err) {
    console.error(err)
  }
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

onMounted(async () => {
  await getProducts(URL)
  await getCartItems(URL)
  await shuffleArray(products.value)
  productsActive.value = products.value
})

provide('productsPerPage', productsPerPage)
provide('catalogCategories', catalogCategories)
provide('categoryActivated', categoryActivated)
provide('products', productsActive)
</script>

<template>
  <div class="g-main" :class="{ 'is-active': cartActive }">
    <Header @cartActiveToggle="cartActiveToggle" :cartItems='cartItems'></Header>
    <h1 class="e-title">SHOP</h1>

    <Catalog :products="products"></Catalog>

    <Cart @cartActiveToggle="cartActiveToggle" :cartActive="cartActive"></Cart>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>
