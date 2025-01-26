<script setup>
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import { useCartStore, useAuthentication } from '@/stores/root'
import { getCookie, deleteCookie, userAuthCheck } from './service/auth'
import { URL_AUTH_CHECK } from './constants/api'

const cartActual = useCartStore()
const authentication = useAuthentication()

onMounted(() => {
  cartActual.getItemsFromLocalstorage()

  const cookie = getCookie()
  if (cookie.token) {
    authentication.auth = userAuthCheck(URL_AUTH_CHECK, cookie.token)
  } else {
    authentication.auth = false
    deleteCookie('token')
    deleteCookie('user')
  }
})
</script>
<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped></style>
