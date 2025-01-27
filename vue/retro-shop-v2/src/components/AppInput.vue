<script setup>
import { defineProps, defineEmits } from 'vue'

const model = defineModel({ required: true })

const props = defineProps({
  placeholder: String,
  typeInput: {
    type: String,
    default: 'text',
    validator: (val) => ['text', 'password', 'email'].includes(val),
  },
})
</script>

<template>
  <label class="f-label">
    <input
      :type="typeInput"
      class="f-input"
      :placeholder="placeholder"
      v-model="model"
    />
  </label>
</template>

<style lang="scss" scoped>
.f-input {
  font-size: 24px;
  width: 100%;
  padding: 20px 30px;
  border: 2px solid var(--c-border);
  border-radius: 500px;
  font-family: var(--f-text);

  &.is-not-valid {
    border-color: rgba(#800000, 0.5);
  }
}
</style>
