<script setup>
import {ref, onMounted } from 'vue'
import AppBtn from './AppBtn.vue'
import { AuthService } from '@/service';



const formHandler = ref(null)
formHandler.value = AuthService.form

onMounted(() => {
  console.log(formHandler.value)

  
})

</script>

<template>
  <form action="" class="f-form js-form">
    <slot name="inputs"></slot>
    <AppBtn @click="formHandler">Register</AppBtn>
  </form>
</template>

<style lang="scss" scoped></style>
