<script setup>
import axios from "axios"
import { computed, ref } from "vue"
import AppLayout from "../components/AppLayout.vue"
import { COCKTAILS_RANDOM, INGREDIENTS_PIC } from "@/constants/api"

import { Swiper, SwiperSlide } from "swiper/vue"
import "swiper/css"


const cocktail = ref(null)

const ingredients = computed(() => {
  const ingredients = []

  for (let i = 1; i <= 15; i++) {
    if (!cocktail.value[`strIngredient${i}`]) break

    const ingredient = cocktail.value[`strIngredient${i}`]
    ingredients.push(ingredient)
  }

  return ingredients
})

async function getCocktail() {
  const response = await axios.get(`${COCKTAILS_RANDOM}`)
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
          <div class="slider">
            <swiper
              :slides-per-view="3"
              :space-between="50"
              class="slider-swiper"
            >
              <swiper-slide v-for="(item, idx) in ingredients" :key="idx">
                <img :src="`${INGREDIENTS_PIC}${item}.png`" alt="" />
                <div class="name">
                  {{ item }}
                </div>
              </swiper-slide>
            </swiper>
          </div>
          <div class="instruction">{{ cocktail.strInstructions }}</div>
        </div>
      </div>
    </AppLayout>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.slider {
  padding: 50px 0;
}
.slider-swiper {
  width: 586px;
  img {
    width: 100px;
    height: 100px;
  }
}
.name {
  text-align: center;
  padding-top: 20px;
}
</style>
