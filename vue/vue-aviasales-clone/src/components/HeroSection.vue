<script setup></script>

<template>
  <div class="c-hero-section">
    <div class="c-hero-section__wrap">
      <div class="container">
        <div class="c-hero-section__inner"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../src/assets/scss/variables';
.c-hero-section__wrap {
  background-color: $brand_primary_500;
}
.c-hero-section__inner {
  min-height: 80vh;
}
</style>
