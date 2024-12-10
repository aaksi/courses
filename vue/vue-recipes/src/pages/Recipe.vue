<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import { RecipeService, CommonService } from '@/service'
import { useRootStore } from '@/stores/root'
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
import AppLoader from '@/components/AppLoader.vue'
import { notify } from '@/utils'

const route = useRoute()
const rootStore = useRootStore()
const recipeId = route?.params.id
const recipe = ref(RecipeService.getEmptyRecipe())
const recipeUpdate = ref(RecipeService.getEmptyRecipe())
const isCreatingMode = ref(true)
const recipeIngredients = ref([CommonService.getEmptyIngredient()])
const areas = computed(() => rootStore.areas)
const categories = computed(() => rootStore.categories)
const ingredients = computed(() => rootStore.ingredients)
const isLoading = ref(false)

const fetchRecipe = async () => {
  try {
    isLoading.value = true
    const data = await RecipeService.getRecipeById(recipeId)
    isLoading.value = false
    recipe.value = { ...data }
    recipeUpdate.value = { ...data }
    isCreatingMode.value = false
  } catch {
    console.log('error')
  }
}

const normalizeRecipeIngredients = () => {
  const normalizeIngredients = []

  for (let i = 1; i < 21; i++) {
    if (recipe.value[`strIngredient${i}`]) {
      const ingr = {
        id: Math.random().toString(36).slice(2),
        title: recipe.value[`strIngredient${i}`],
        measure: recipe.value[`strMeasure${i}`],
      }

      normalizeIngredients.push(ingr)
    }
  }

  recipeIngredients.value = normalizeIngredients
}
const deNormalizeRecipeIngredients = (recipe) => {
  for (let i = 1; i < 21; i++) {
    const ingredient = recipeIngredients.value[i - 1]

    if (ingredient?.title && ingredient?.measure) {
      recipe[`strIngredient${i}`] = ingredient.title
      recipe[`strMeasure${i}`] = ingredient.measure
    } else {
      recipe[`strIngredient${i}`] = ''
      recipe[`strMeasure${i}`] = ''
    }
  }
}

const addIngredient = () => {
  recipeIngredients.value.push(CommonService.getEmptyIngredient())
}
const removeIngredient = (idx) => {
  recipeIngredients.value.splice(idx, 1)
}
const createRecipe = async () => {
  try {
    const params = { ...recipeUpdate.value }
    deNormalizeRecipeIngredients(params)
    isLoading.value = true
    await RecipeService.createRecipe()

    setTimeout(() => {
      isLoading.value = false
      notify('Создано', `Рецепт ${recipeUpdate.value.strMeal} создан`, 'success')
    }, 500)
  } catch (err) {
    console.log(err)
  }
}
const updateRecipe = async () => {
  try {
    const params = { ...recipeUpdate.value }
    deNormalizeRecipeIngredients(params)
    isLoading.value = true
    await RecipeService.updateRecipe()

    setTimeout(() => {
      isLoading.value = false
      notify('Обновлено', `Рецепт ${recipeUpdate.value.strMeal} обновлен`, 'success')
    }, 500)
  } catch (err) {
    console.log(err)
  }
}
const createUpdateRecipe = () => {
  isCreatingMode.value ? createRecipe() : updateRecipe()
}

onMounted(async () => {
  if (parseInt(recipeId)) {
    await fetchRecipe()
    normalizeRecipeIngredients()
  }
})
</script>

<template>
  <AppLayout>
    <template #title
      >{{ isCreatingMode ? 'Новый рецепт' : recipeUpdate.strMeal }}
    </template>
    <template #controls>
      <AppButton text="Сохранить" @click="createUpdateRecipe"></AppButton>
    </template>
    <template #inner>
      <AppLoader v-if="isLoading"></AppLoader>
      <div class="wrapper" v-else>
        <div class="row">
          <div class="col">
            <label for="">Title</label>
            <el-input v-model="recipeUpdate.strMeal" placeholder="Title" />
          </div>
          <div class="col">
            <label for="">Title</label>
            <el-select v-model="recipeUpdate.strArea" placeholder="Area">
              <el-option
                v-for="item in areas"
                :key="item.strArea"
                :label="item.strArea"
                :value="item.strArea"
              />
            </el-select>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <label for="">Title</label>
            <el-select
              v-model="recipeUpdate.strCategory"
              placeholder="Category"
            >
              <el-option
                v-for="item in categories"
                :key="item.strCategory"
                :label="item.strCategory"
                :value="item.strCategory"
              />
            </el-select>
          </div>
        </div>
        <div class="ingredients">
          <div class="subtitle">Ingredients</div>
          <div
            v-for="(item, idx) in recipeIngredients"
            class="row align-items-flex-end"
            :key="`${item.id}-${idx}`"
          >
            <div class="col col-small mb-2">
              {{ idx + 1 }}
            </div>
            <div class="col">
              <div class="label">Measure</div>
              <el-input
                v-model="recipeIngredients[idx].measure"
                placeholder="Measure"
              />
            </div>
            <div class="col">
              <div class="label">Title</div>
              <el-input
                v-model="recipeIngredients[idx].title"
                placeholder="Title"
              />
            </div>
            <div class="col col-small">
              <AppButton
                class="mb-2"
                circle
                icon="Delete"
                @click="() => removeIngredient(idx)"
              ></AppButton>
            </div>
          </div>
          <AppButton text="Add ingredient" @click="addIngredient"></AppButton>
        </div>
        <div class="row">
          <div class="col">
            <div class="subtitle">Instructions</div>
            <el-input
              v-model="recipeUpdate.strInstructions"
              :autosize="{ minRows: 2, maxRows: 5 }"
              type="textarea"
              placeholder="Instructions"
            />
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.ingredients {
  padding-bottom: 16px;
}
</style>
