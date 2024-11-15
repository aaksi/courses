<script setup>
  import CatalogList from './CatalogList.vue'

  const props = defineProps({
    previewName: String,
    previewCount: Number,
  })
</script>

<template>
  <section class="section">
    <div class="c-products-preview">
      <div class="container">
        <div class="c-products-preview__inner">
          <div class="e-title">{{ previewName }}</div>
          <CatalogList :preview="true" :previewCount="previewCount" > </CatalogList>
        </div>
      </div>
    </div>
  </section>
</template>



<style lang="scss" scoped></style>
