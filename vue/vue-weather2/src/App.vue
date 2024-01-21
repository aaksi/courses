<script setup>
import axios from "axios"
import { onMounted, ref } from "vue"

const cityName = ref('krasnodar')
const API_KEY = '66334409aad75fcc665819fb5ec46da8'
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&units=metric`
const weather = ref(null)
const date = new Date();
console.log(date);

async function  getWeather() {
  console.log(URL);
  try {
    const res = await axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API_KEY}&units=metric`)
      .then((response) => {
        console.log(response.data);
        weather.value =  response.data
      })
  } catch {
    console.log(err);
  }
}
onMounted(() => {
  getWeather()
})
</script>
<template>
  <div class="wrap">
    <div class="main">
      <div class="info">
        <div class="info-num">{{ weather.main.temp }}°</div>
        <div class="info-box">
          <div class="info-location">{{ weather.name }}</div>
          <div class="info-time"></div>
        </div>
        <div class="info-icon"></div>
      </div>
    </div>
    <div class="aside">
      <div class="aside-inner">
        <div class="search">
          <input v-model="cityName" type="text" placeholder="Search Location...">
          <button @click="getWeather">search</button>
        </div>
        <p>Weather Details...</p>
        <div class="aside-info">
          <div class="aside-info__title">thunderstorm with light drizzle</div>
          <ul class="day-info">
            <li class="day-info__item">
              <div class="day-info__item-title">Temp max</div>
              <div class="day-info__item-val">19°</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
