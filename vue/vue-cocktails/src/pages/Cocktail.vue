<script setup>
import axios from "axios"
import { computed, ref } from "vue"
import { useRoute} from "vue-router"
import AppLayout from "../components/AppLayout.vue"
import { COCKTAILS_BY_ID } from "@/constants/api"

const route = useRoute()


const cocktail = ref(null)
const cocktailId = computed(() => route.path.split("/").pop())

const ingredients = computed(() => {
  const ingredients = []

  for(let i = 1; i <= 15; i++) {
    if(!cocktail.value[`strIngredient${i}`]) break

    const ingredient = {
      name: cocktail.value[`strIngredient${i}`],
      measure: cocktail.value[`strMeasure${i}`]
    }
    ingredients.push(ingredient)
  }

  return ingredients
})


async function getCocktail() {
  const response = await axios.get(`${COCKTAILS_BY_ID}${cocktailId.value}`)
  cocktail.value = response?.data?.drinks[0]
}
getCocktail()



</script>
<template>
  <div v-if="cocktail" class="wrap">
    <AppLayout :imgUrl="cocktail.strDrinkThumb" >
      <div class="wrapper">
        <div class="info">
          <div class="title">{{ cocktail.strDrink }}</div>
          <div class="line"></div>
          <div class="list">
            <div v-for="(item, idx) in ingredients" :key="idx" class="list-item">
            {{ item.name }}
            <template v-if="item.measure">
              | {{ item.measure }}
            </template>
            </div>
          </div>
          <div class="instruction">{{ cocktail.strInstructions }}</div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";


</style>
