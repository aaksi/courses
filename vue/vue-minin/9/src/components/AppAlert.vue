<template>
  <div class="alert " :class="type">
    <p class="alert-title">{{ title }}</p>
    <p>{{ text }}</p>
    <button class="btn" :class="type" v-if="closable" @click="$emit('close')">Закрыть</button>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: {
    text: String,
    title: String,
    closable: {
      type: Boolean,
      default: false,
      required: false
    },
    type:{
      type: String,
      default: 'primary',
      required: false,
      validator(val){
        return ['primary', 'danger', 'warning'].includes(val)
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
