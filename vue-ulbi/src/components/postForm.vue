<template>
  <div>
    <form @submit.prevent>
      <h3>Создание поста</h3>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"
      />
      <button class="btn" >Создать</button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style  scoped>
.input {
  width: 100%;
  border: 1px solid teal;
  padding: 10px 15px;
  margin-top: 10px;
}

form {
  display: flex;
  flex-direction: column;
}

.btn {
  margin-top: 15px;
  align-self: flex-start;
  padding: 10px 15px;
  background: none;
  border: 1px solid teal;
  color: teal;
}
</style>
