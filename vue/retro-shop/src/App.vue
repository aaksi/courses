<script setup>
import { ref, provide, onMounted } from 'vue'
import Header from './components/Header.vue'
import Catalog from './components/Catalog.vue'
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

function categoryActivated(id) {
  catalogCategories.value.forEach((el) => (el.active = false))

  catalogCategories.value.find((el) => {
    if (el.id === id) {
      el.active = true
    }
  })
}

const products = ref([])
const getProducts = async (url) => {
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)

    products.value = data
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

onMounted(async () => {
  await getProducts(URL)
  await shuffleArray(products.value)
})

provide('catalogCategories', catalogCategories)
provide('categoryActivated', categoryActivated)
provide('products', products)
</script>

<template>
  <Header></Header>
  <h1 class="e-title">SHOP</h1>
  <Catalog :products="products"></Catalog>
</template>

<style scoped></style>
