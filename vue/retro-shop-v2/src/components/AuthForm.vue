<script setup>
import { ref, onMounted, reactive, computed } from 'vue'
import { useRouter } from 'vue-router'
import axios from 'axios'
import Input from '@/components/AppInput.vue'
import AppBtn from './AppBtn.vue'
import { URL_REGISTRATION, URL_AUTH } from '@/constants'
import { setCookie } from '@/service/auth'

const router = useRouter()
const props = defineProps({
  auth: {
    type: Boolean,
    default: false,
  },
})
const data = reactive({
  name: '',
  email: '',
  password: '',
})
const authLogin = ref(true)

const url = computed(() => {
  return authLogin.value ? URL_AUTH : URL_REGISTRATION
})

const formHandler = async (url, data) => {
  try {
    const res = await axios.post(url, data)
    setCookie('token', res.data.token)
    setCookie('user', res.data.data)
    router.push('/main')
    return res
  } catch (err) {
    console.log(err)
  }
}
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
    <AppBtn>{{ authLogin ? 'Login' : 'Registration' }}</AppBtn>
  </form>
  <button class="e-center mt-def" @click="authLogin = !authLogin">
    {{ authLogin ? 'Registration' : 'Login' }}
  </button>
</template>

<style lang="scss" scoped></style>
