<template>
  <div>
    <input class="input input--min" type="number" v-model="calcValue" />
    <input
      type="range"
      min="0.03"
      max="2.99"
      step="0.01"
      v-model="rangeValue"
    />
    <input type="number" v-model="rangeValue" />
  </div>
</template>

<script>
export default {
  name: "inputRange",
  data() {
    return {
      rangeValue: 0.03,
    }
  },
  computed: {
    calcValue() {
      return (this.rangeValue * 0.2).toFixed(3)
    },
  },
}
</script>

<style scoped></style>
