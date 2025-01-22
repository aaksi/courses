<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Input from '@/components/AppInput.vue'
import AppBtn from './AppBtn.vue'
import { URL_REGISTRATION, BASE_CHAR_COUNT_AUTH } from '@/constants'

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
  let pass = ''
  const data = {}
  let countValid = ref(true)

  Array.from(inputs.value).every((el) => {
    data[el.name] = el.value

    if (!el.value) {
      el.classList.add('is-not-valid')
      formValid.value = false
    }

    if (el.name === 'name' && el.value.length < BASE_CHAR_COUNT_AUTH.name) {
      el.classList.add('is-not-valid')
      formValid.value = false
    }
    if (el.name === 'email' && el.value.length < BASE_CHAR_COUNT_AUTH.mail) {
      el.classList.add('is-not-valid')
      formValid.value = false
    }
    if (
      el.name === 'password' &&
      el.value.length < BASE_CHAR_COUNT_AUTH.password
    ) {
      el.classList.add('is-not-valid')
      formValid.value = false
    }
    if (
      el.name === 'confirm_password' &&
      el.value.length < BASE_CHAR_COUNT_AUTH.password
    ) {
      el.classList.add('is-not-valid')
      formValid.value = false
    }

    if (el.name === 'password') pass = el.value
    if (el.name === 'confirm_password' && pass !== el.value) {
      el.classList.add('is-not-valid')
      formValid.value = false
      return false
    }

    if (countValid.value) {
      el.classList.remove('is-not-valid')
    } else {
      return false
    }

    el.classList.remove('is-not-valid')
    formValid.value = true
    sendData(data)
    return true
  })

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
    {{ formValid }}
    <AppBtn @click="formHandler">Register</AppBtn>
  </form>
</template>

<style lang="scss" scoped></style>
