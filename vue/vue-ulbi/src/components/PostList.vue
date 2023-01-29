<template>
  <div class="post" v-for="post in posts">
    <div><b>Название:</b> {{ post.title }}</div>
    <div><b>Описание</b> {{ post.body }}</div>
  </div>
</template>

<script>
export default {
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
}
</script>

<style  scoped>
.post {
  padding: 15px;
  border: 2px solid rgba(25, 99, 25, 0.411);
  margin-top: 15px;
}
</style>
