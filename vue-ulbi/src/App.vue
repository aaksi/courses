<!-- <template>
  <div>
    <div>
      <button v-on:click="addLike">Like</button>
      <button @click="addDislike">Dislike</button>
    </div>
    <div>
      Количество лайков <b>{{ likes }}</b>
    </div>
    <div>
      Количество дизлайков <b>{{ dislikes }}</b>
    </div>
  </div>
</template> -->

<template>
  <div class="app">
    <post-form  @create="createPost"></post-form>
    <post-list v-bind:posts="posts"></post-list>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "js", body: "Описание поста" },
        { id: 2, title: "js 2", body: "Описание поста 2" },
        { id: 3, title: "js 3", body: "Описание поста 3" },
        { id: 4, title: "js 4", body: "Описание поста 4" },
      ],
      title: "",
      body: "",
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    },
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 20px;
}
</style>
