<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRootStore } from '@/stores/root'
import AppLayout from '@/layouts/AppLayout.vue'

const rootStore = useRootStore()

const categories = computed(() => rootStore.categories)

onMounted(() => {
  rootStore.getCategories()
})
</script>

<template>
  <AppLayout>
    <template #title> Категории </template>
    <template #inner>
      <el-table :data="categories" style="width: 100%">
        <el-table-column label="Category" prop="strCategory" />
      </el-table>
    </template>
  </AppLayout>
</template>
