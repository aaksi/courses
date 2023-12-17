<script setup>
const emit = defineEmits(['openDrawer'])

defineProps({
  totalPrice: Number
})
</script>

<template>
  <header class="flex justify-between px-10 py-8 border-b border-slate-100">
    <router-link to="/"
      ><div class="flex items-center gap-4">
        <img src="/public/logo.png" alt="logo" class="w-10" />
        <div>
          <h2 class="text-xl font-bold uppercase">Vue sneakers</h2>
          <p class="text-slate-400">Магазин лучших кроссовок</p>
        </div>
      </div>
    </router-link>

    <ul class="flex items-center gap-10">
      <li
        @click="() => emit('openDrawer')"
        class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer"
      >
        <img src="/public/cart.svg" alt="cart" />
        <b>{{ totalPrice }} р</b>
      </li>
      <router-link to="/favorites">
        <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
          <img src="/public/heart.svg" alt="cart" />
          <span>Закладки</span>
        </li>
      </router-link>
      <li class="flex items-center gap-3 text-gray-500 hover:text-black cursor-pointer">
        <img src="/public/profile.svg" alt="cart" />
        <span>Профиль</span>
      </li>
    </ul>
  </header>
</template>
