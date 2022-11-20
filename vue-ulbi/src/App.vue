<template>
  <div class="app">
    <post-form/>
    <post-list :posts="posts" />
  </div>
</template>

<script>
import postForm from '@/components/postForm'
import postList from '@/components/postList'
export default {
  components:{
    postForm, postList
  },
  data() {
    return {
      posts: [
        { id: 1, title: "JavaScript", body: "Описание поста" },
        { id: 2, title: "JavaScript 2", body: "Описание поста 2" },
        { id: 3, title: "JavaScript 3", body: "Описание поста 3" },
      ],
      title: "",
      body: "",
    }
  },
  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      }
      this.posts.push(newPost)
      this.title = ""
      this.body = ""
    },
  },
}
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  margin: 15px;
}



</style>
