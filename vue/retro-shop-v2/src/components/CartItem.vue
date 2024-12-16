<script setup>
import { defineProps, computed } from 'vue'
import { useCartStore } from '@/stores/root'
const props = defineProps(['item'])

const cartStore = useCartStore()

</script>

<template>
  <div class="c-cart-item">
    <div class="c-cart-item__inner">
      <div class="c-cart-item__img">
        <img
          :src="`../../public/img/products/${item.type}/${item.img}.png`"
          :alt="item.name"
        />
      </div>
      <div class="c-cart-item__cnt">
        <div class="c-cart-name">{{ item.name }}</div>
        <div class="c-cart-price">{{ item.price }}</div>
      </div>
      <button
        class="c-cart-item__btn-close"
        @click="cartStore.deleteItemCart(item.id)"
      >
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
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-cart-item {
  padding-top: 20px;
  & + & {
    margin-top: 20px;
    border-top: 1px solid var(--c-border);
  }
}

.c-cart-item__inner {
  display: grid;
  grid-template-columns: 70px 1fr 20px;
  gap: 20px;
  align-items: center;
}
.c-cart-item__btn-close {
  width: 20px;
  height: 20px;
  display: block;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
}
.c-cart-item__img {
  width: 70px;
  height: 100px;
  border-radius: 500px;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  img {
    width: 100%;
    height: 100%;
  }

  .c-cart-item:hover & {
    transform: scale(1.05);
  }
}
.c-cart-name {
  font-size: 24px;
  margin-bottom: 10px;
}
</style>
