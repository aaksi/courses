<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'

import CardList from '../components/CardList.vue'

const favorites = ref([])
onMounted(async ()=>{
  try{
    const {data} = await axios.get('https://c969c0d4a1032ddb.mokky.dev/favorites?_relations=items')

    favorites.value = data.map(obj => obj.item)
  }
  catch(err){
    console.log(err);
  }
})
</script>

<template>
  <h2 class="text-3xl font-bold">Мои закладки</h2>
   <CardList :items="favorites" isFavorites />
</template>
