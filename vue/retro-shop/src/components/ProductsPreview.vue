<script setup>
import CatalogList from './CatalogList.vue'

const props = defineProps({
  previewName: String,
  previewCount: Number
})
</script>

<template>
  <div class="c-products-preview">
    <div class="container">
      <div class="c-products-preview__inner">
        <div class="e-title-box">
          <div class="e-title">{{ previewName }}</div>
        </div>
        <CatalogList :preview="true" :previewCount="previewCount"> </CatalogList>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
