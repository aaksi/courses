<script setup>
import { defineProps } from 'vue'
import { inject } from 'vue'

const productsInject = inject('products')

const  props = defineProps({
  card: {
    type: String
  }
})
console.log(props.card);


</script>
<template>
  <div>page product</div>
  <pre>{{ $route }}</pre>
  <hr />
  <pre>PARAMS {{ $route.params }}</pre>
  <hr />
  {{ card }}
  <!-- <div>{{ productsInject }}</div> -->
</template>

<style lang="scss" scoped></style>
