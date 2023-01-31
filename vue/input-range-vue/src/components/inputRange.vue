<template>
  <div class="wrap">
    <input
      class="input input--min"
      type="number"
      @input="gramCalc"
      v-model="calcValue"
    />
    <div class="vue-slider-wrap">
      <vue-slider
        v-model="rangeValue"
        :min="minCarat"
        :max="maxCarat"
        :interval="step"
      />
    </div>
    <input type="number" v-model="rangeValue" />
  </div>
</template>

<script>
import VueSlider from "vue-slider-component"
import "vue-slider-component/theme/default.css"

export default {
  name: "inputRange",

  components: {
    VueSlider,
  },

  data() {
    return {
      rangeValue: 0.03,
      minCarat: 0.03,
      maxCarat: 2.99,
      ratio: 0.2,
      step: 0.01
    }
  },
  computed: {
    calcValue() {
      const gram = String(this.rangeValue * this.ratio)
      if (gram.length > 4) {
        return Number(gram).toFixed(3)
      } else {
        return gram
      }
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
.vue-slider {
  width: 100px;
}
.wrap {
  display: flex;
  gap: 30px;
}
.vue-slider-wrap {
  display: block;
  width: 100px;
}
</style>
