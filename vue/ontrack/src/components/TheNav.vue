<script setup>
import { NAV_ITEMS } from '@/constans'
import NavItem from './NavItem.vue'
import {isPageValid} from '@/validators'

defineProps({
  currentPage: {
    required: true,
    type: String,
    validator: isPageValid
  }
})

const emit = defineEmits({
  navigate: isPageValid
})
</script>

<template>
  <nav class="sticky bottom-0 z-20 bg-white">
    <ul class="flex justify-between align-center border-t">
      <NavItem
        v-for="(icon, page) in NAV_ITEMS"
        :key="page"
        :href="`#${page}`"
        :class="{ 'bg-gray-200 pointer-events-none': page === currentPage }"
        @click="emit('navigate', page)"
      >
        <component :is="icon" class="w-6 h-6" />
        {{ page }}
      </NavItem>
    </ul>
  </nav>
</template>
