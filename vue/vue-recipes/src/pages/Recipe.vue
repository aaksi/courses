<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { RecipeService } from '@/service'
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'

const route = useRoute()
const recipeId = route?.params.id
const recipe = ref(RecipeService.getEmptyRecipe())
const recipeUpdate = ref(RecipeService.getEmptyRecipe())
const isCreatingMode = ref(true)

const fetchRecipe = async () => {
  try {
    const data = await RecipeService.getRecipeById(recipeId)
    recipe.value = data
    recipeUpdate.value = data
    isCreatingMode.value = false
  } catch {
    console.log('error')
  }
}

onMounted(() => {
  if (parseInt(recipeId)) {
    fetchRecipe()

  }
})
</script>

<template>
  <AppLayout>
    <template #title>{{ isCreatingMode ? 'Новый рецепт' : recipeUpdate.strMeal }} </template>
    <template #controls>
      <AppButton text="Сохранить"></AppButton>
    </template>
    <template #inner>
      {{ recipeUpdate }}
    </template>
  </AppLayout>
</template>
