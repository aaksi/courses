<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  placeholder: String,
  name: String,

})
</script>

<template>
  <label class="f-label">
    <input
      type="text"
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
}
</style>
