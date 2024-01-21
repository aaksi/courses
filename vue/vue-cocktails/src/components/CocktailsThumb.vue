<script setup>
const props = defineProps({
  cocktail: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="root">
    <RouterLink :to="`/cocktail/${props.cocktail.idDrink}`">
      <div
        :style="`background-image: url(${props.cocktail.strDrinkThumb})`"
        class="pic"
      ></div>
      <div class="name">{{ props.cocktail.strDrink }}</div>
    </RouterLink>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/styles/main.scss";

.root {
}

.pic {
  width: 120px;
  height: 120px;
  background-position: 50% 50%;
  background-size: 100%;
  margin: 0 auto;
}
.name {
  padding-top: 15px;
  letter-spacing: 0.1em;
}
</style>
