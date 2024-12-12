<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <Header> </Header>
  <main>
    <slot name="g-main"></slot>
  </main>
  <Footer />
</template>

<style lang="scss" scoped></style>
