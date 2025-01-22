<script setup>
import { defineProps, defineEmits, watch, ref } from 'vue'

const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: String,
  placeholder: String,
  type: {
    type: String,
    default: 'text',
    validator: (val) => ['text', 'textarea', 'password', 'email'].includes(val),
  },
})

const value = ref(props.modelValue)
watch(value, () => emits('update:modelValue', value.value))
</script>

<template>
  <div>
    <input
      v-if="type === 'text'"
      :type="type"
      :placeholder="placeholder"
      class="form-control mb-3"
      v-model='value'
    />

    <textarea
      v-if="type === 'textarea'"
      rows="3"
      class="form-control mb-3"
      :placeholder="placeholder"
      v-model='value'
    ></textarea>
  </div>
</template>

<style lang="scss" scoped></style>
