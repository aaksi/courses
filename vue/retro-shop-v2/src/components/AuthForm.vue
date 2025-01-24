<script setup>
import { ref, onMounted, reactive, watch } from 'vue'
import axios from 'axios'
import Input from '@/components/AppInput.vue'
import AppBtn from './AppBtn.vue'
import { URL_REGISTRATION, BASE_CHAR_COUNT_AUTH } from '@/constants'
// import { setAuthTokenCookie } from '@/service/auth'
// import { formHandler } from '@/service/auth'

const formHandler = async (url, data) => {
  try {
    const res = await axios.post(url, data)
    console.log(res.data.token)
    setAuthTokenCookie(res.data.token)
    return res
  } catch (err) {
    console.log(err)
  }
}

const setAuthTokenCookie = (token) => {
  document.cookie = `token=${token}`
}
// console.log(document.cookie)

const getCookie = () => {
  const res = document.cookie.split('; ').reduce((acc, item) => {
    const [name, val] = item.split('=')
    acc[name] = val
    return acc
  },{})

  return res
}



const url = URL_REGISTRATION
const data = reactive({
  name: '',
  email: '',
  password: '',
})
onMounted(() => {
  console.log(getCookie().token)
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
