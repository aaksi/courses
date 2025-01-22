<script setup>
import { computed, defineProps, defineEmits, ref, watch } from 'vue'
const uploadFile = (e) => {
  const [file] = e.target.files
  value.value = file
}

const previewFilePath = computed(() => {
  if (value.value) return URL.createObjectURL(value.value)
  return '#'
})

const props = defineProps({
  modelValue: { type: File, default: null },
  label: String,
})
const emits = defineEmits(['update:modelValue'])
const value = ref(props.modelValue)

watch(value, () => {
  emits('update:modelValue', value.value)
})
</script>

<template>
  <div>
    <label class="form-label mb-3 mt-3">{{ label }}</label>
    <input type="file" class="form-control" @change="uploadFile" />

    <img :src="previewFilePath" alt="" class="w-50 mt-2" />
  </div>
</template>

<style lang="scss" scoped></style>
