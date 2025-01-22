<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  placeholder: String,
  name: String,
  typeInput : {
    type: String, 
    default : 'text'
  }
})
</script>

<template>
  <label class="f-label">
    <input
      :type="typeInput"
      class="f-input"
      :name="name"
      :placeholder="placeholder"
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
