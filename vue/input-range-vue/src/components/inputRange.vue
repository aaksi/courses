<template>
  <div>
    <input
      class="input input--min"
      type="number"
      @input="gramCalc"
      v-model="calcValue"
    />
    <input
      type="range"
      :min=" minCarat "
      :max=" maxCarat "
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
      minCarat: 0.03,
      maxCarat: 2.99,
    }
  },
  computed: {
    calcValue() {
      return (this.rangeValue * 0.2).toFixed(3)
    },
  },
  methods: {
    gramCalc(event) {
      if (event.target.value * 5 > this.maxCarat) {
        this.rangeValue = this.maxCarat
      } else if (event.target.value * 5 < this.minCarat) {
        this.rangeValue = this.minCarat
      } else {
        this.rangeValue = (event.target.value * 5).toFixed(2)
        // let inputVal = Number(event.target.value)
        // event.target.value = inputVal.toFixed(2)

      }
    },
  },
}
</script>

<style scoped></style>
