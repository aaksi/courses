<script setup>
import cardRoom from './cardRoom.vue'

import { onMounted, ref, inject } from 'vue'
import axios from 'axios'
import { URL } from '../constans'

const productsPerPage = inject('productsPerPage')

const rooms = ref([])
const getRooms = async (url) => {
  const { data } = await axios.get(`${url}rooms`)
  rooms.value = data
}
onMounted(async () => {
  await getRooms(URL)
})
</script>
<template>
  <div class="section">
    <div class="c-rooms">
      <div class="container">
        <div class="c-rooms__inner">
          <div class="e-title-box">
            <div class="c-rooms__title e-title">Rooms</div>
            <div class="c-rooms__more" v-if="rooms.length > productsPerPage">
              <router-link class="e-link" :to="'/rooms'">
                <span>see all</span>
                <svg
                  width="32"
                  height="6"
                  viewBox="0 0 32 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="0.75" y="2.5" width="30" height="1" fill="#343339" />
                  <path d="M28.75 0.5L31.25 3L28.75 5.5" stroke="#343339" />
                </svg>
              </router-link>
            </div>
          </div>

          <div class="c-rooms__items">
            <template v-for="(room, idx) in rooms" :key="room.id">
              <template v-if="idx < productsPerPage">
                <cardRoom :card="room"></cardRoom>
              </template>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.c-rooms__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
}
</style>
