<script setup>
import axios from 'axios'
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCartStore, useAuthentication } from '@/stores/root'
import { getCookie } from './service/auth'
import { URL_AUTH_CHECK } from './constants/api'

const cartActual = useCartStore()
const authentication = useAuthentication()

const getUserAuth = async (url, token) => {
  //   const res = await axios.get({
  //     url: url,
  //     headers: { Authorization: `Bearer dfafddf1` },
  //   })
  //   console.log(res)
  // }
  const res = await fetch('https://30ac92c0b48f317b.mokky.dev/auth_me', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((resp) => resp.json())
    .then((json) => console.log(json))
}

onMounted(() => {
  cartActual.getItemsFromLocalstorage()

  const cookie = getCookie()
  if (cookie.token) {
    authentication.auth = true
    getUserAuth(URL_AUTH_CHECK, authentication.auth)
  } else {
    authentication.auth = false
  }
  console.log(authentication.auth)
})
</script>
<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
