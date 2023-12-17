<script setup>
defineProps({
  id: Number,
  title: String,
  imageUrl: String,
  price: Number
})

const emit = defineEmits('onClickRemove')
</script>

<template>
  <div class="flex items-center gap-4 border border-slate-200 rounded-xl p-4">
    <img class="w-16" :src="imageUrl" :alt="title" />

    <div class="flex flex-col flex-1">
      <p>{{ title }}</p>
      <div class="flex justify-between mt-2 items-center">
        <b class="flex-1">{{ price }}р</b>
        <img
          @click="emit('onClickRemove')"
          class="opacity-40 hover:opacity-100 cursor-pointer transition"
          src="/public/close.svg"
        />
      </div>
    </div>
  </div>
</template>
