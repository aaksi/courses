<script setup>
defineProps({
  title: String,
  descr: String,
  imageUrl: String
})
</script>

<template>
  <div class="flex flex-col items-center text-center w-72 mx-auto">
    <img height="100" width="100" :src="imageUrl" alt="info image" />
    <h2 class="mt-4 text-2xl font-medium">{{ title }}</h2>
    <p class="text-gray-400 mt-2">{{ descr }}</p>
  </div>
</template>
