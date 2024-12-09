<script setup>
const props = defineProps({
  text: {
    type: String,
    default: '',
  },
  circle: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <el-button v-if="!circle" type="primary" class="btn">{{ text }}</el-button>
  <el-button
    v-else
    :icon="icon"
    circle
    type="primary"
    class="circle"
  ></el-button>
</template>

<style lang="scss" scoped>
@import '@/assets/styles/index.scss';

.btn {
  background-color: $violet;
  font-size: 17px;
  padding: 20px 24px;
  border-radius: 4px;
}
.circle {
  font-size: 16px;
  background-color: $violet;
}
</style>
