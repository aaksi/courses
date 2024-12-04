<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <el-button type="primary" class="btn">{{ text }}</el-button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.btn {
  background-color: $violet;
  font-size: 17px;
  padding: 20px 24px;
  border-radius: 4px;
}
</style>
