<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
</script>
<template>
  <AppLayout>
    <template #g-main>
      <div class="c-product">
        <pre>
          {{ $route }}
        </pre>
        <div class="c-product__wrap">
          <div class="container">
            <div class="c-product__inner">
              <div class="c-product__img"></div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
