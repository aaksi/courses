<script setup>
import { ref } from 'vue'
import { TrashIcon } from '@heroicons/vue/24/solid'
import BaseButton from './BaseButton.vue'
import BaseSelect from './BaseSelect.vue'
import { PERIOD_SELECT_OPTIONS, BUTTON_TYPE_DANGER } from '@/constans'
import { isActivityValid } from '@/validators'

defineProps({
  activity: {
    required: true,
    type: String,
    validator: isActivityValid
  }
})



const secondsToComplete = ref(null)
</script>

<template>
  <li class="flex flex-col gap-2 p-4">
    <div class="flex items-center gap-2">
      <BaseButton :type="BUTTON_TYPE_DANGER">
        <TrashIcon class="h-8" />
      </BaseButton>
      <span class="truncate text-2xl">{{ activity }}</span>
    </div>
    <div>
      <BaseSelect
        class="font-mono"
        placeholder="h:mm"
        :selected="secondsToComplete"
        :options="PERIOD_SELECT_OPTIONS"

        @select="secondsToComplete = $event"

      />
    </div>
  </li>
</template>
