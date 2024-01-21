<script setup>
import TimeLineItem from '../components/TimeLineItem.vue'
import { validateTimeLineItems } from '@/validators'

defineProps({
  timelineItems: {
    required: true,
    type: Array,
    validator: validateTimeLineItems
  }
})
</script>

<template>
  <div class="mt-7">
    <ul>
      <TimeLineItem
        v-for="timeLineItem in timelineItems"
        :key="timeLineItem.hour"
        :timeline-item="timeLineItem"
      />
    </ul>
  </div>
</template>
