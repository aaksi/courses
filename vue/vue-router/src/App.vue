<script setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const activePage = ref(1)

function handleClick(){
  router.push({ name: 'Component2', params: { id: 333 } })
}
</script>

<template>
  <div class="app-wrapper">
    <div class="left-bar">
      <div @click="$router.push({ name: 'Component2' })">component2 push</div>
      <div
        @click="$router.push({ name: 'Component3', params: { id: 112233 } })"
      >
        component3 push params
      </div>
      <router-link to="/">component1</router-link>
      <router-link to="/component2">component2</router-link>
      <router-link to="/component3">component3</router-link>
    </div>
    <div class="app-main">
      <router-view></router-view>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
