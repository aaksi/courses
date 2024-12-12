<script setup>
import { defineProps, computed, ref } from 'vue'
import { useCartStore } from '@/stores/root'

const props = defineProps(['product'])
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)
const isItemInCart = computed(() =>
  cartItems.value.some((el) => el.id === props.product.id)
)
</script>

<template>
  <div class="c-card">
    <div class="c-card__inner">
      <div class="c-card__link">
        <router-link :to="`/product/${product.id}`"></router-link>
      </div>
      <div class="c-card__promo" v-if="product.promo">
        {{ product.promo }}
      </div>
      <div class="c-card__img">
        <img
          :src="`../../public/img/products/${product.type}/${product.img}.png`"
          :alt="product.name"
        />
        <button
          class="c-card__btn"
          :class="{ 'is-disabled': isItemInCart }"
          @click="cartStore.addToCart(product)"
        >
          {{ isItemInCart ? 'Added' : 'Add' }} to cart
        </button>
      </div>
      <div class="c-card__cnt">
        <div class="c-card__name">{{ product.name }}</div>
        <div class="c-card__price">{{ product.price }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-card__inner {
  position: relative;
  &:hover {
  }
}
.c-card__link {
  position: absolute;
  inset: 0;
  z-index: 10;
  a {
    width: 100%;
    height: 100%;
    display: block;
  }
}
.c-card__img {
  width: 100%;
  height: 726px;
  position: relative;
  border-radius: 500px;
  margin-bottom: 30px;
  overflow: hidden;
  border: 5px solid transparent;
  transition: all 0.3s ease-in-out;

  img {
    min-height: 100%;
    width: 100%;
    // height: 100%;
    // width: 100%;
    // max-width: 100%;
    // max-height: 100%;
    transition: all 0.3s ease-in-out;
    transform: scale(1.2);
    .c-card__inner:hover & {
      transform: scale(1);
    }
  }
}

.c-card__cnt {
  text-align: center;
}
.c-card__name {
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 8px;
}
.c-card__price {
  font-weight: 500;
  font-size: 18px;
}
.c-card__btn {
  padding: 24px 40px;
  border-radius: 500px;
  background-color: var(--c-text);
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  transition: all 0.3s ease-in-out;
  display: inline-block;
  position: absolute;
  bottom: 100px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  z-index: 10;
  cursor: pointer;

  &:hover {
    transform: translateX(-50%) scale(1.1);
  }
  .c-card:hover & {
    opacity: 1;
  }

  &.is-disabled {
    filter: brightness(0.5);
    opacity: 0;
    &:hover {
      pointer-events: none;
      transform: translateX(-50%) scale(1);
    }
    .c-card:hover & {
      pointer-events: none;
      opacity: 0.5;
    }
  }
}
.c-card__promo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--c-text);
  color: #fff;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 18px;
  top: 20px;
  right: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
}
</style>
