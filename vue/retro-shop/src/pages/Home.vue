<script setup>
import ProductsPreview from '../components/ProductsPreview.vue'
</script>
<template>
  <section class="c-hero-section section section--hero">
    <div class="c-hero-section__wrap">
      <div class="c-hero__bg" style="background-image: url('../../public/hero-bg.jpg')"></div>
      <div class="container">
        <div class="c-hero-section__inner">
          <h1 class="c-hero-section__title">Design Furniture</h1>
          <router-link class="c-hero-section__btn e-btn" :to="'/catalog'">Shop now</router-link>
        </div>
      </div>
    </div>
  </section>

  
  <ProductsPreview :previewName='"Featured"'></ProductsPreview>
</template>

<style lang="scss" scoped></style>
