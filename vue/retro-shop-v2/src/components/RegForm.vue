<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Input from '@/components/AppInput.vue'
import AppBtn from './AppBtn.vue'
import { URL_REGISTRATION } from '@/constants'

const form = ref()

const inputs = ref([])
const formData = ref({})
const formValid = ref(true)
const passValid = ref(true)

function formHandler(event) {
  form.value = event.target.closest('.js-form')

  inputs.value = form.value.querySelectorAll('.f-input')
  formData.value = {}
  inputs.value.forEach((el) => {
    // if (validator(el)) {
    //   formData.value[el.name] = el.value
    // }
    // else{
    //   formValid.value = false
    // }

    formData.value[el.name] = el.value
  })

  validator(formData.value)

  // sendData(formData.value)
}

function validator(obj) {
  const pass = ''
  const data = {}
  
  inputs.value.forEach((el) => {
    data[el.name] = el.value

    if (!el.value) {
      el.classList.add('')
    }

    // if(el.password) pass = el.password.value
    // if(el.password_confirm) pass === el.password_confirm ? passValid.value = true : passValid.value = false
  })

  if(data.password !== data.password_confirm) {
    // inputs.map(el =>  )
  }

  console.log(data)
}
function sendData(data) {
  axios
    .post(URL_REGISTRATION, data)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
}
// function validator(item) {
//   const dataValid = {
//     name : 2,
//     email : 3,
//     password : 8,
//     confirm_password : 8
//   }
//   if (!item.value) {
//     item.classList.add('is-not-valid')
//     return false
//   } else {
//     item.classList.remove('is-not-valid')
//     return true
//   }
// }
</script>

<template>
  <form action="" class="f-form js-form">
    <Input placeholder="Name" :name="'name'"></Input>
    <Input placeholder="Email" :name="'email'" :typeInput="'email'"></Input>
    <Input placeholder="Password" :name="'password'"></Input>
    <Input placeholder="Confirm password" :name="'confirm_password'"></Input>
    <AppBtn :class="formValid ? '' : 'is-disabled'" @click="formHandler"
      >Register</AppBtn
    >
  </form>
</template>

<style lang="scss" scoped></style>
