<script setup>
import AppLayout from "../components/AppLayout.vue"
import CocktailsThumb from "../components/CocktailsThumb.vue"
import { useRootStore } from "../stores/root"
import { storeToRefs } from "pinia"
import CocktailsThumbVue from "@/components/CocktailsThumb.vue"

const rootStore = useRootStore()
rootStore.getIngredients()

const { ingredients, ingredient, cocktails } = storeToRefs(rootStore)


function getCocktails() {
  rootStore.getCocktails(rootStore.ingredient)
}

function removeIngredient() {
  rootStore.setIngredient(null)
}
</script>

<template>
  <AppLayout imgUrl="/src/assets/img/bg-1.jpg" :backFunc="removeIngredient" :is-back-button-visible="!!ingredient">
    <div class="wrapper">
      <div v-if="!ingredient || !cocktails" class="info">
        <div class="title">Choose your drink</div>
        <div class="line"></div>
        <div class="select-wrap">
          <el-select
            v-model="ingredient"
            class="select"
            placeholder="Choose main ingredient"
            size="large"
            filterable
            allow-create
            @change="getCocktails"
          >
            <el-option
              v-for="item in ingredients"
              :key="item.strIngredient1"
              :label="item.strIngredient1"
              :value="item.strIngredient1"
            />
          </el-select>
        </div>
        <div class="text">
          Try our delicious cocktail recipes for every occasion. Find delicious
          cocktail recipes by ingredient through our cocktail generator.
        </div>
        <img src="/src/assets/img/cocktails.png" alt="Cocktails" class="img">
      </div>
      <div v-else class="info">
        <div class="title">COCKTAILS WITH {{ rootStore.ingredient }} </div>
        <div class="line"></div>
        <div class="cocktails">
          <CocktailsThumb v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail"/>
        </div>
      </div>
    </div>
  </AppLayout>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";



.select-wrap {
  padding-top: 50px;
}
.select {
  width: 220px;
}
.text{
  padding-top: 50px;
  line-height: 2;
  letter-spacing: 0.1em;
  color: $text-muted;
  max-width: 70%;
  margin: 0 auto;
}
.img{
  margin-top: 60px;
}

.cocktails{
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap: 40px 60px;
  align-items: center;
  margin-top: 60px;
  flex-wrap: wrap;
  max-height: 60dvh;
  overflow-y: auto;
  align-items: start;
}
</style>
