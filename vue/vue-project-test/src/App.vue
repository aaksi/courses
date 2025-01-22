<script setup>
import { reactive, ref, computed } from 'vue'
import axios from 'axios'

const review = reactive({
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: true,
})

const previewFilePath = computed(() => {
  if (review.photo) return URL.createObjectURL(review.photo)
  return '#'
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

const uploadFile = (e) => {
  const [file] = e.target.files
  review.photo = file
}
</script>

<template>
  
  <form @submit.prevent.stop="submit" class="container pt-5 pb-5">
    
    <input
      type="text"
      v-model="review.author"
      placeholder="Как вас зовут"
      class="form-control mb-3"
    />
    <textarea
      rows="3"
      class="form-control mb-3"
      v-model="review.text"
      placeholder="Что понравилось"
    ></textarea>

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
    <div>
      <label class="form-label mb-3 mt-3">Фото</label>
      <input type="file" class="form-control" @change="uploadFile" />

      <img :src="previewFilePath" alt="" class="w-50 mt-2" />
    </div>

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

    <button class="btn btn-primary">Отправить</button>
  </form>
</template>

<style lang="scss" scoped></style>
