<template>
  <form @submit.prevent>
    <h3>Создание поста</h3>
    <input
      v-model="post.title"
      class="input"
      type="text"
      placeholder="Название "
    />
    <input
      v-model="post.body"
      class="input"
      type="text"
      placeholder="Описание "
    />
    <button class="btn" @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post ={
        title: "",
        body: "",
      }
    },
  },
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.btn {
  align-self: flex-end;
  margin-top: 15px;
  background: none;
  background-color: teal;
  border: none;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
}
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}
</style>
