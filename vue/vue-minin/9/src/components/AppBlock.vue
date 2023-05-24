<template>
  <div class="container">
    <app-alert
      v-if="alert"
      text="Это важный текст"
      title="Внимание!"
      @close="alert = false"
    ></app-alert>
    <div class="card">
      <button class="btn " @click="toggleAlert">
        {{ alert ? "Скрыть" : "Показать" }}сообщение
      </button>
    </div>
  </div>
</template>

<script>
import AppAlert from "./AppAlert"
import alertMixin from "../alertMixin";
export default {
 
 mixins: [alertMixin],
  components: {
    AppAlert,
  },
}
</script>
