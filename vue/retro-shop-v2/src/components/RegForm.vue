<script setup>
import { ref, onMounted, reactive, watch } from 'vue'
import axios from 'axios'
import Input from '@/components/AppInput.vue'
import AppBtn from './AppBtn.vue'
import { URL_REGISTRATION, BASE_CHAR_COUNT_AUTH } from '@/constants'
import { formHandler } from '@/service/auth'

const url = URL_REGISTRATION
const data = reactive({
  name: '',
  email: '',
  password: '',
})
</script>

<template>
  {{ data }}
  <form @submit.prevent.stop="formHandler(url, data)" class="f-form js-form">
    <Input v-model="data.name" placeholder="Name"></Input>
    <Input v-model="data.email" placeholder="E-mail"></Input>
    <Input
      v-model="data.password"
      :typeInput="'password'"
      placeholder="Password"
    ></Input>
    <AppBtn>Register</AppBtn>
  </form>
</template>

<style lang="scss" scoped></style>
