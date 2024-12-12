<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCartStore } from '@/stores/root'

const cartActual = useCartStore()
onMounted(() => {
  cartActual.getItemsFromLocalstorage()
})
</script>
<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
