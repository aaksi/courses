<script setup>
import { defineProps } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

const props = defineProps({
  headerAbsolute: {
    type: Boolean,
    default: false,
  },
  headerColorInverse: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <Header :headerAbsolute="headerAbsolute" :headerColorInverse="headerColorInverse"> </Header>
  <main>
    <slot name="g-main"></slot>
  </main>
  <Footer />
</template>

<style lang="scss" scoped></style>
