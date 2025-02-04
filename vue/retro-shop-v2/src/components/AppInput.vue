<script setup>
import { defineProps, defineEmits } from 'vue'
import { validator } from '@/service/auth'

const model = defineModel({ required: true })

const props = defineProps({
  inputValid: {
    type: String,
    required: true,
  },
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
    {{ model }}
    <input
      @blur='validator($event.target, props.inputValid, model)'
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

  &.is-error {
    border-color: rgba(#800000, 0.5);
  }
}
</style>
