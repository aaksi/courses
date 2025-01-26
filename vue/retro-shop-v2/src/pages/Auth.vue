<script setup>
import { ref, onMounted } from 'vue'
import AppLayout from '@/layouts/AppLayout.vue'
import AuthForm from '@/components/AuthForm.vue'

import { useAuthentication } from '@/stores/root'

const authentication = useAuthentication()
const auth = authentication.auth
const authLogin = ref(true)

onMounted(() => {
  if (authentication.auth) {
  }
})
</script>

<template>
  <AppLayout>
    <template #g-main>
      <div class="reg">
        <div class="container">
          <div class="reg__inner">
            <h1 class="e-title">{{authLogin ? 'Login' : 'Registration'}}</h1>
            <AuthForm :auth="auth"></AuthForm>
            
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
