<script setup>
import { computed, ref } from 'vue'

const activePage = ref(1)
const url = computed({
  get() {
    return window.location.href
  },
  set(value) {
    window.history.pushState({}, '', value)
  },
})
</script>

<template>
  <div class="app-wrapper">
    <div class="left-bar">
      <a href="#" @click="activePage = 1">Страница 1</a>
      <a href="#" @click="activePage = 2">Страница 2</a>
    </div>
    <div class="app-main">
      <div v-if="activePage === 1">Содержимое страницы 1</div>
      <div v-else-if="activePage === 2">Содержимое страницы 2</div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
