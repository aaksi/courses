<script setup>
import { reactive, computed } from 'vue'
import axios from 'axios'
import UButton from './UButton.vue'

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: true,
})

const stars = [1, 2, 3, 4, 5]

const submit = () => {
  console.log('submit')

  axios
    .post('/api/review', review, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => {
      console.log('конец')
    })
}
</script>
<template>
  <form @submit.prevent.stop="submit" class="container pt-5 pb-5">
    <UInput v-model="review.author" placeholder="Как вас зовут"></UInput>
    <UInput
      v-model="review.text"
      placeholder="Что понравилось"
      type="textarea"
    ></UInput>

    <h4>Оценка</h4>
    <div v-for="star in stars" :key="star" class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        v-model="review.stars"
        :true-value="star"
        :false-value="null"
        :id="`star${star}`"
      />
      <label class="form-check-label" :for="`star${star}`">
        {{ star }}
      </label>
    </div>

    <UFile v-model="review.photo"  label="Фото"/>

    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="adv1"
        v-model="review.isRecommended"
        :value="false"
      />
      <label class="form-check-label" for="adv1"> Не советую </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="flexRadioDefault"
        id="adv2"
        v-model="review.isRecommended"
        :value="true"
      />
      <label class="form-check-label" for="adv2"> Советую </label>
    </div>

    <UButton>Отправить</UButton>
  </form>
</template>

<style lang="scss" scoped></style>
