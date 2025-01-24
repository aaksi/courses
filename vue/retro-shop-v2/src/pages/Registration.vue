<script setup>
import AppLayout from '@/layouts/AppLayout.vue'

import RegForm from '@/components/AuthForm.vue'
</script>

<template>
  <AppLayout>
    <template #g-main>
      <div class="reg">
        <div class="container">
          <div class="reg__inner">
            <h1 class="e-title">Registration</h1>
            <RegForm></RegForm>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
