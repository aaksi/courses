<script setup>
import { PAGE_TIMELINE, PAGE_PROGRESS } from '@/constans';
import TheLogo from './TheLogo.vue'
import TheHeaderProgress from './TheHeaderProgress.vue'
import { isPageValid } from '@/validators';


const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <header class="sticky top-0 z-20 flex items-center justify-between bg-white p-3 border-b">
    <TheLogo @click="emit('navigate', PAGE_TIMELINE)" />
    <TheHeaderProgress @click="emit('navigate', PAGE_PROGRESS)" />
  </header>
</template>
