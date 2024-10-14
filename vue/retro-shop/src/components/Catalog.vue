<script setup>
import { ref, onMounted } from 'vue'
import CatalogNav from './CatalogNav.vue'
import CatalogList from './CatalogList.vue'
</script>

<template>
  <div class="c-catalog">
    <div class="container">
      <div class="c-catalog__inner">
        <CatalogNav></CatalogNav>
        <CatalogList> </CatalogList>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
