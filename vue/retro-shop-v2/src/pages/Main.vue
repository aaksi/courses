<script setup>
import { computed, ref } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import CartItem from '@/components/CartItem.vue'
import { getCookie , logOut } from '@/service/auth'
import { useCartStore } from '@/stores/root'


const cookie = getCookie()
const cartStore = useCartStore()
const cartItems = computed(() => cartStore.cartItems)
</script>

<template>
  <AppLayout>
    <template #g-main>
      <div class="c-account">
        <div class="container">
          <h1 class="e-title">Hello! {{ cookie?.user?.name }}</h1>
          <template v-for="item in cartItems" :key="item.id">
            <CartItem :item="item"></CartItem>
          </template>
          <button class="e-btn mt-def e-center" v-show="cartItems.length">
            place an order
          </button>
          <button class="mt-def e-center" @click='logOut'>
            logout
          </button>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
