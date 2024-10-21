<script setup>
import { inject } from 'vue'
import CartItem from './CartItem.vue'

const cartItems = inject('cartItems')
</script>

<template>
  <div class="c-cart-items">
    <CartItem v-for="item in cartItems" :key="item.id" :item="item" />
  </div>
</template>

<style lang="scss" scoped>

</style>
