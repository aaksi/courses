<script setup>
import { ref, onMounted, computed, watch } from 'vue'
import { CommonService } from '@/service'
import Card from './Card.vue'
import { useCatalogStore } from '@/stores/root'
import { BASE_COUNT_PRODUCTS } from '@/constants'

const catalogStore = useCatalogStore()
const activeCategory = computed(() => catalogStore.activeCategory)
const products = ref([])
const productsFiltered = ref([])
const promo = ref(false)
const productsLength = ref(0)
const blockProductsLength = ref(BASE_COUNT_PRODUCTS)

async function fetchProducts() {
  try {
    products.value = await CommonService.getProducts()
  } catch (err) {
    console.log(err)
  }
}

function shuffleArray(array) {
  function compareRandom() {
    return Math.random() - 0.5
  }
  return array.sort(compareRandom)
}

watch(
  activeCategory,
  () => {
    blockProductsLength.value = BASE_COUNT_PRODUCTS
    if (activeCategory.value !== 'all') {
      productsFiltered.value = products.value.filter(
        (el) => el.type === activeCategory.value
      )
    } else {
      productsFiltered.value = products.value
    }
  },
  { deep: true }
)

onMounted(async () => {
  await fetchProducts()
  productsLength.value = productsFiltered.value.length
  productsFiltered.value = shuffleArray(products.value)
})
</script>

<template>
  <template v-if="productsFiltered.length">

    <div class="c-catalog__list">
      <template v-for="(product, idx) in productsFiltered" :key="product.id">
        <template v-if='idx < blockProductsLength'>
          <Card :product="product"></Card>
        </template>
      </template>
    </div>

    <template v-if="productsFiltered.length >= blockProductsLength">
      <button
        class="c-catalog__more"
        @click="blockProductsLength += BASE_COUNT_PRODUCTS"
      >
        <span>Show more</span>
      </button>
    </template>
  </template>
</template>

<style lang="scss" scoped>
.c-catalog__list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 90px 70px;
}
.c-catalog__more {
  width: max-content;
  margin: 50px auto 0;
  display: flex;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 500;
  background-color: var(--c-text);
  color: var(--c-white);
  padding: 24px 40px;
  border-radius: 500px;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
}
</style>
