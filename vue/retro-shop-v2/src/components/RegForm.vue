<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Input from '@/components/AppInput.vue'
import AppBtn from './AppBtn.vue'
import { URL_REGISTRATION } from '@/constants'

const form = ref()

const inputs = ref([])
const formData = ref({})

function formHandler(event) {
  form.value = event.target.closest('.js-form')

  inputs.value = form.value.querySelectorAll('.f-input')
  formData.value = {}
  inputs.value.forEach((el) => {
    if (validator(el)) {
      formData.value[el.name] = el.value
    }
    
  })

  axios
    .post(URL_REGISTRATION, formData.value)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}

function validator(item) {
  if (!item.value) {
    item.classList.add('is-not-valid')
    return false
  } else {
    item.classList.remove('is-not-valid')
    return true
  }
}
</script>

<template>
  <form action="" class="f-form js-form">
    <Input placeholder="Name" :name="'name'"></Input>
    <Input placeholder="Email" :name="'email'"></Input>
    <Input placeholder="Password" :name="'password'"></Input>
    <Input placeholder="Confirm password" :name="'confirm_password'"></Input>
    <AppBtn @click="formHandler">Register</AppBtn>
  </form>
</template>

<style lang="scss" scoped></style>
