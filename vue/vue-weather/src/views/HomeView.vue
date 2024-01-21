<script setup>
import { ref } from "vue"
import API_KEY from "@/consts";

const searchQuery = ref("")

const test = fetch(`https://api.teleport.org/api/cities/?search=mos`)
  .then((response) => response.json())
  .then((data) => console.log(data))

</script>

<template>
  <main class="container text-white">
    <div class="pt-4 mb-8 relative">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search for a city"
        class="py-2 px-1 w-full bg-transparent border-b focus:border-weather-secondary focus:outline-none focus:shadow-[0px_1px_0_0_#004E71]"
      />
    </div>
  </main>
</template>
