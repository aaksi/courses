<template>
  <div class="container">
    <app-alert v-if="alert" text='Это важный текст' title='Внимание!' type="danger" closable @close="alert = false"></app-alert>
    <div class="card">
      <button class="btn " @click="toggleAlert">{{  alert ? 'Скрыть' : 'Показать'  }}сообщение</button>
    </div>

    <app-block></app-block>
  </div>
</template>

<script>
import AppAlert from './components/AppAlert';
import AppBlock from './components/AppBlock';
import alertMixin from "./alertMixin";
export default {
 
  mixins: [alertMixin],
  components:{
    AppAlert, AppBlock
  }
}
</script>

