<script setup>
import { ref, defineProps, inject, onMounted, toRefs, watch } from 'vue'
import Card from './Card.vue'

const productsInject = inject('products')
const catalogCategories = inject('catalogCategories')
const productsPerPage = ref(3)
const activeCategory = ref('all')
function getCategoryActive(arr) {
  return arr.find((el) => el.active)
}

watch(
  catalogCategories,
  () => {
    activeCategory.value = getCategoryActive(catalogCategories.value).name.toLowerCase()
 
  },
  { deep: true }
)
</script>

<template>
  <div class="c-catalog-list">
    <template v-for="(product, idx) in productsInject" :key="product.id">
      <template v-if="idx < productsPerPage ">
        <Card :card="product"></Card>
   
      </template>
    </template>
  </div>
  <button
    class="c-catalog__more"
    @click="productsPerPage += 3"
    v-if="productsPerPage < productsInject.length"
  >
    <span>Show more</span>
  </button>
</template>

<style lang="scss" scoped>
.c-catalog-list {
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
