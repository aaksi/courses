<template>
  <hr />
  <h3>{{title}}</h3>
  <ul>
    <li v-for="item in news" >{{ item.title }} <span v-if="item.wasRead">!!!</span></li>
  </ul>
</template>

<script>
export default {
  inject: ['title', 'news']
};
</script>

<style lang="scss" scoped></style>
