<template>
  <div>
    <input
      class="input input--min"
      type="number"
      @input="gramCalc"
      v-model="calcValue"
    />
    <template>
      <vue-slider v-model="value" />
    </template>
    <input
      class="range"
      type="range"
      :min="minCarat"
      :max="maxCarat"
      step="0.01"
      v-model="rangeValue"
    />
    <input type="number" v-model="rangeValue" />
  </div>
</template>

<script>
import { reactive, toRefs } from "vue"
import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/antd.css"

export default {
  name: "inputRange",

  setup() {
    const data = reactive({ value: 0 })
    return toRefs(data)
  },
  data() {
    return {
      rangeValue: 0.03,
      minCarat: 0.03,
      maxCarat: 2.99,
      ratio: 0.2,
    }
  },
  computed: {
    calcValue() {
      const gram = String(this.rangeValue * this.ratio)
      if (gram.length > 4) {
        console.log(gram.length)
        console.log(gram)
        return Number(gram).toFixed(3)
      } else {
        return gram
      }
    },
  },
  methods: {
    gramCalc(event) {
      // if (event.target.value.length > 4) {
      //   console.log(event.target.value.length)
      //   return event.target.value.length.toFixed(2)
      // }

      // if(event.target.value.length > 4){
      //   event.target.value = Number(event.target.value).toFixed(3)
      // }

      if (event.target.value * 5 > this.maxCarat) {
        this.rangeValue = this.maxCarat
      } else if (event.target.value * 5 < this.minCarat) {
        this.rangeValue = this.minCarat
        // event.target.value = this.minCarat * 0.2
      } else {
        this.rangeValue = (event.target.value * 5).toFixed(2)
        // let inputVal = Number(event.target.value)
        // event.target.value = inputVal.toFixed(2)
      }
    },
  },
}
</script>

<style scoped>
.range {
  background: #fff;
  height: 80px;
  width: 380px;
  border-radius: 10px;
  padding: 0 65px 0 45px;
}
</style>
