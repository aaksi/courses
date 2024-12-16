<script setup>
import AppLayout from '@/layouts/AppLayout.vue'
import Input from '@/components/Input.vue'
import Form from '@/components/Form.vue'
</script>

<template>
  <AppLayout>
    <template #g-main>
      <div class="reg">
        <div class="container">
          <div class="reg__inner">
            <h1 class="e-title">Registration</h1>
            <Form>
              <template #inputs>
                <Input placeholder="Email" type="email"></Input>
                <Input placeholder="Password" type="password"></Input>
                <Input placeholder="Confirm password" type="password"></Input>
              </template>
            </Form>
          </div>
        </div>
      </div>
    </template>
  </AppLayout>
</template>

<style lang="scss" scoped></style>
