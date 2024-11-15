<script setup>
import { ref, onMounted } from 'vue'
import CatalogNav from '../components/CatalogNav.vue'
import CatalogList from '../components/CatalogList.vue'
</script>

<template>
  <div class="c-catalog">
    <div class="container">
      <h1 class="e-title">SHOP</h1>
      <div class="c-catalog__inner">
        <CatalogNav></CatalogNav>
        <CatalogList></CatalogList>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
