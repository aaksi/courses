<script setup>
import { ref, onMounted } from 'vue'
import { RecipeService } from '@/service'
import { ROUTES_PATHS } from '@/constants'
import AppLayout from '@/layouts/AppLayout.vue'
import AppButton from '@/components/AppButton.vue'
import AppLoader from '@/components/AppLoader.vue'

const recipes = ref()
const isLoading = ref(false)

const fetchRecipes = async () => {
  try {
    isLoading.value = true
    recipes.value = await RecipeService.getRecipesByLetter()
    isLoading.value = false
  } catch (err) {
    console.log(err)
  }
}

const getRecipePath = (id) => {
  return `${ROUTES_PATHS.RECIPE.split(':')[0]}${id}`
}

onMounted(fetchRecipes)
</script>

<template>
  <AppLayout>
    <template #title> Рецепты </template>
    <template #controls>
      <router-link :to="getRecipePath('new')">
        <AppButton text="Добавить рецепт"></AppButton>
      </router-link>
    </template>
    <template #inner>
      <AppLoader v-if="isLoading"></AppLoader>
      <div v-else class="wrapper">
        <el-table :data="recipes" style="width: 100%">
          <el-table-column prop="idMeal" label="Id" />
          <el-table-column label="Image">
            <template #default="scope">
              <router-link :to="getRecipePath(scope.row.idMeal)">
                <img :src="scope.row.strMealThumb" alt="" class="img" />
              </router-link>
            </template>
          </el-table-column>
          <el-table-column prop="strMeal" label="Name" />
          <el-table-column prop="strArea" label="Area" />
          <el-table-column prop="strCategory" label="Category" />
          <el-table-column label="Tags">
            <template #default="scope">
              <template v-if="scope?.row?.strTags">
                <el-tag
                  type="primary"
                  v-for="(tag, key) in scope.row.strTags.split(',')"
                  :key="key"
                  class="tag"
                  >{{ tag }}</el-tag
                >
              </template>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';
.img {
  width: 70px;
  height: 70px;
}
.tag {
  margin: 2px 3px;
}
</style>
