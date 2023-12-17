<script setup>
import Card from './Card.vue'

defineProps({
  items: Array,
  isFavorites: Boolean
})

const emit = defineEmits(['addToFavorite', 'addToCart'])


const onClickFavorite = (item) => {
  emit('addToFavorite', item)
}

const onClickCart = (item) =>{
  emit('addToCart', item)
}


</script>

<template>
  <div class="grid grid-cols-4 gap-5 mt-8" v-auto-animate>
    <Card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :imageUrl="item.imageUrl"
      :title="item.title"
      :price="item.price"
      :isFavorite="item.isFavorite"
      :onClickFavorite="isFavorites ? null : () => onClickFavorite(item)"
      :onClickAdd="()=>onClickCart(item)"
      :isAdded="item.isAdded"
    />
  </div>
</template>
