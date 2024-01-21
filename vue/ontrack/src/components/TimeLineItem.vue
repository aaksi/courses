<script setup>
import { ref } from 'vue'
import { isTimeLineValid } from '@/validators'
import BaseSelect from './BaseSelect.vue'
import TimeLineHour from './TimeLineHour.vue'

const props = defineProps({
  timelineItem: {
    required: true,
    type: Object,
    validator: isTimeLineValid
  }
})


const options = [
  {
    value: 1,
    label: 'Coding'
  },
  {
    value: 2,
    label: 'Reading'
  },
  {
    value: 3,
    label: 'Training'
  }
]

const selectActivityId = ref(1 )
</script>

<template>
  <li class="relative flex flex-col gap-2 border-t border-gray-200 py-10 px-4">
    <TimeLineHour
      :hour="timelineItem.hour"
    />

    <BaseSelect
      @select="selectActivityId = $event"
      :options="options"
      placeholder="Rest"
      :selected="selectActivityId"
    />
  </li>
</template>
