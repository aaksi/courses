<template>
  <form class="card card-w30" @submit.prevent="formHandler">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="type">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" rows="3" v-model.trim="value"></textarea>
    </div>

    <button class="btn primary" :disabled="textAreaFilled" >Добавить</button>
  </form>
</template>

<script>
export default {
  emits:['formHandler'],
  data() {
    return {
      type: 'title',
      value: '',
    }
  },
  methods:{
    formHandler(){
      this.$emit('block-added', {
        type: this.type,
        value: this.value,
        id: Date.now()
      })

      this.value = ''
      this.type = 'title'
    }
  },
  computed: {
    textAreaFilled() {
      if (this.value.length < 3) {
        return true
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
