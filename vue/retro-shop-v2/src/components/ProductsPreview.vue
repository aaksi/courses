<script setup>
import { ref, onMounted } from 'vue'
import Card from './Card.vue'
import { CommonService } from '@/service'


const products = ref([])

onMounted(async () => {
  products.value = await CommonService.getProductRelated()
})
</script>

<template>
  <div class="c-catalog">
    <div class="container">
      <div class="e-title-box">
        <div class="e-title">
          <slot name="title"></slot>
        </div>
      </div>
      <div class="c-catalog__list">
        <template v-for="(product, idx) in products" :key="product.id">
          <Card :product="product"></Card>
        </template>
      </div>
    </div>
  </div>
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
