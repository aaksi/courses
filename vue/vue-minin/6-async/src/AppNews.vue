<template>
  <div class="card" >
    <h3>{{ title }}</h3>
    <app-button  @action="open" >{{ isNewsOpen ? 'Закрыть' : 'Открыть' }}</app-button>
    <app-button
      color='danger'
      v-if="wasRead"
      @action='$emit("unmark",id)'
      >
      Отметить непрочитанной
    </app-button>
    <div v-if="isNewsOpen">
      <hr>
      <p v-if="isNewsOpen">Lorem ipsum dolor sit amet.</p>
      <app-button color='primary' v-if="!wasRead" @action='mark' >Прочесть новость</app-button>
      <app-news-list></app-news-list>
    </div>
  </div>
</template>

<script>
import AppButton from './AppButton.vue'
import AppNewsList from './AppNewsList.vue'

export default {
  // props: ['title'],
  // emits:['open-news'],
  props:{
    title: {
      type: String,
      required: true
    },
    id:{
      type: Number,
      required: true
    },
    isOpen: {
      type: Boolean,
      required: false,
      default: false,
      validator(value){
        return value === true || value === false
      }
    },
    wasRead:Boolean,

  },
  emits:{
    'open-news': null,
    'read-news'(id){
      if(id){
        return true
      }
      else{
        console.warn('no id emit read-news')
        return false
      }
    },
    unmark(id){
      if(id){
        return true
      }
      else{
        console.warn('no id emit unmark')
        return false
      }
    }
  },
  data() {
    return {
      item: 'item string',
      isNewsOpen: this.isOpen
    }
  },
  methods: {
    open(){
      this.isNewsOpen = !this.isNewsOpen

      if(this.isNewsOpen){
        this.$emit('open-news')
      }
    },
    mark(){


      this.isNewsOpen = false
      this.$emit('read-news', this.id)
    },
    // unmark(){
    //   this.$emit('unmark', this.id)
    // }
  },
  components:{
    AppButton,
    AppNewsList
  }
}
</script>

<style></style>
