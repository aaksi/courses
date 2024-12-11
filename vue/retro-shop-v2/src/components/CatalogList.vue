<script setup>
import { ref, onMounted, computed, defineProps, inject } from 'vue'
import { CommonService } from '@/service'
import Card from './Card.vue'
import { useCatalogStore } from '@/stores/root'
const catalogStore = useCatalogStore()
const activeCategory = computed(() => catalogStore.activeCategory)
const products = ref()

async function fetchProducts() {
  try {
    products.value = await CommonService.getProducts()
  } catch (err) {
    console.log(err)
  }
}
onMounted(() => {
  console.log('catalogList: ', activeCategory.value);
  fetchProducts()
  
})
</script>

<template>
  <div class="c-catalog-list">
    {{ activeCategory }}
    <template>
      <template>
        <Card></Card>
      </template>
    </template>
  </div>
  <div class="c-catalog-list">
    <template>
      <template>
        <Card></Card>
      </template>
    </template>
  </div>

  <template>
    <button class="c-catalog__more">
      <span>Show more</span>
    </button>
  </template>
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
