<script setup>
import { ref } from 'vue'
import TheHeader from './components/TheHeader.vue'
import TheNav from './components/TheNav.vue'
import TheTimeline from './pages/TheTimeline.vue'
import TheActivities from './pages/TheActivities.vue'
import TheProgress from './pages/TheProgress.vue'

import { PAGE_TIMELINE, PAGE_ACTIVITIES, PAGE_PROGRESS } from './constans'
import {normalizePageHash, generateTimelineItems} from './functions'

const currentPage = ref(normalizePageHash())

function goTo(page) {
  currentPage.value = page
}


const timelineItems = generateTimelineItems()
const activities = ['Coding', 'Reading', 'Training']
</script>

<template>
  <TheHeader @navigate="goTo($event)" />

  <main class="flex-grow flex flex-col">
    <TheTimeline v-show="currentPage === PAGE_TIMELINE" :timeline-items="timelineItems" />
    <TheActivities v-show="currentPage === PAGE_ACTIVITIES" :activities="activities" />
    <TheProgress v-show="currentPage === PAGE_PROGRESS" />
  </main>

  <TheNav :current-page="currentPage" @navigate="goTo($event)" />
</template>
