<script setup>
import { onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
</script>
<template>
  <div class="c-product">
    <div class="c-product__wrap">
      <div class="container">
        <div class="c-product__inner">
          <div class="c-product__img">
            <slot name="test123">{{ test123 }}</slot>
            <hr />
            <pre>

              {{ $route }}
            </pre>
            {{ $route.params }}
            <div>{{ inactiveClass }}</div>
            <hr />
            <pre>
                  {{ $route.params }}
                </pre
            >

            <span>
              {{ $route.params.name }}
            </span>
            <img
              :src="`../../public/img/products/${$route.params.name}.jpg`"
              :alt="$route.params.name"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
