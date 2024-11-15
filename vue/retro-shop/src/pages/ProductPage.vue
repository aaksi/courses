<script setup>



</script>
<template>
  <div>
     CARD {{ card-test }}
     {{ key }}
  </div>
  <hr>
  <div>page product</div>
  <pre>{{ $route }}</pre>
  <hr />
  <pre>PARAMS {{ $route.params }}</pre>
  <hr />
  {{ card }}
  <!-- <div>{{ productsInject }}</div> -->
</template>

<style lang="scss" scoped></style>
