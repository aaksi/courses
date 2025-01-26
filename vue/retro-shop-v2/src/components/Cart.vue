<script setup>
import { computed } from 'vue'
import CartItem from './CartItem.vue'
import { useCartStore } from '@/stores/root'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)

const props = defineProps({
  cartActive: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['cartActiveToggle'])
</script>

<template>
  <div class="g-cart" :class="{ 'is-active': cartActive }">
    <div class="g-cart__inner">
      <div class="g-cart__header">
        <div class="g-cart__title">
          <h2>Cart</h2>
        </div>
        <div class="g-cart__btn-close" @click="emit('cartActiveToggle')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path
              d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
            ></path>
          </svg>
        </div>
      </div>
      <div class="g-cart__body">
        <div class="c-cart-items">
          <template v-for="item in cartItems" :key="item">
            <CartItem :item="item"></CartItem>
          </template>
        </div>
      </div>
      <div class="g-cart__footer" v-if="cartItems.length">
        <router-link :to="'/main'">
          <button class="e-btn">buy</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-cart {
  transform: translateX(100%);
  transition: all 0.3s ease-in-out;
  &.is-active {
    transform: translateX(0);
  }
}
.g-cart__inner {
  height: 100%;
  width: 100%;
  border-left: 1px solid var(--c-border);
  padding: 30px 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.g-cart__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
}
.g-cart__btn-close {
  width: 20px;
  height: 20px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
}

.g-cart__footer {
  margin-top: auto;
}
</style>
