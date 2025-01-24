<script setup>
import { ref, computed, defineProps } from 'vue'
import { useCartStore } from '@/stores/root'
import Cart from './Cart.vue'

const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)

const cartActive = ref(false)
const toggleCart = () => {
  cartActive.value = !cartActive.value
}

const props = defineProps({
  headerAbsolute: {
    type: Boolean,
    default: false,
  },
  headerColorInverse: {
    type: Boolean,
    default: false,
  },
})

const logoSrc = props.headerColorInverse
  ? '../../public/img/logo-inverse.png'
  : '../../public/img/logo.png'

</script>

<template>
  <div
    class="g-header"
    :class="{
      'g-header--absolute': headerAbsolute,
      'g-header--inverse': headerColorInverse,
    }"
  >
    <div class="container">
      <div class="g-header__inner">
        <div class="g-header__logo">
          <router-link :to="'/'">
            <img :src="logoSrc" alt="Логотип" />
          </router-link>
        </div>
        <ul class="g-header__links">
          <li class="g-header__item">
            <a href="#" class="g-header__link">Catalog</a>
          </li>
          <li class="g-header__item">
            <a href="#" class="g-header__link"
              >Cart
              <span class="g-header__link-count">{{
                cartItems.length
              }}</span></a
            >
          </li>
          <li>
            <button class="g-header__burger" @click="toggleCart">
              <svg
                width="56"
                height="15"
                viewBox="0 0 56 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="6" y="0.5" width="50" height="1" fill="#343339" />
                <rect x="16" y="13.5" width="40" height="1" fill="#343339" />
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="g-header__cart">
      <Cart :cartActive="cartActive" @cartActiveToggle="toggleCart"></Cart>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.g-header {
  padding-top: 60px;
  &--absolute {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
  }

}

.g-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.g-header__logo {
  img {
    object-fit: contain;
  }
}
.g-header__links {
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 40px;
}
.g-header__link {
  &:has(.g-header__link-count) {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
.g-header__link-count {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background-color: var(--c-text);
  color: var(--c-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.g-header__logo {
  width: 97px;
  height: 35px;
  img {
    width: 100%;
    height: 100%;
  }
}
.g-header__burger {
  width: 56px;
  height: 15px;

  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
    .g-header--inverse & {
      fill: var(--c-white);
    }
  }
}
.g-header--inverse  {
  .g-header__inner{
    color: var(--c-white);
    *{
      color: var(--c-white);
    }
  }
  .g-header__burger {
    svg, rect{
      fill: var(--c-white);
    }
  }
}
</style>
