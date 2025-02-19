<script setup>
const pageTitle = 'Тут покупают дешёвые авиабилеты'
</script>

<template>
  <div class="c-hero-section">
    <div class="c-hero-section__wrap">
      <div class="container">
        <div class="c-hero-section__inner">
          <h1>{{ pageTitle }}</h1>
        </div>
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
  padding: 100px 0;
}
</style>
