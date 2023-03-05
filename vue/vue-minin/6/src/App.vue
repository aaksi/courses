<template>
  <div class="container pt-1">
    <div class="card">
      <h2>Актуальные новости {{ now }}</h2>
      <span>Открыто: <strong>{{ openRate }} </strong>|  Прочитано: <strong>{{ readRite }}</strong></span>
    </div>

    <app-news
      v-for="item in news"
      :key='item.id'
      :title="item.title"
      :id='item.id'
      :is-open='item.isOpen'
      :was-read='item.wasRead'
      @open-news='openNews'
      @read-news='readNews'
      @unmark='unReadNews'
    ></app-news>
  </div>
</template>

<script>
import AppNews from './AppNews'

export default {
  data () {
    return {
      now: new Date().toLocaleDateString(),
      openRate: 0,
      readRite: 0,
      news: [
        {
          title: 'Джо байден победил на выборах сша',
          id: 1,
          isOpen: false,
          wasRead: false
        },
        {
          title: 'vue 3 работает',
          id: 2,
          isOpen: false,
          wasRead: false
        },
      ]
    }
  },
  provide(){
    return{
      title: 'Список всех новостей',
      news: this.news,
    }
  },
  methods:{
    openNews(){
      this.openRate++
    },
    readNews(id){
      const idx = this.news.findIndex(news=> news.id === id)
      this.news[idx].wasRead = true
      this.readRite++
    },
    unReadNews(id){
      const news = this.news.find(news=> news.id === id)
      news.wasRead = false
      this.readRite--
    }

  },
  components: {
    // eslint-disable-next-line vue/no-unused-components
    'app-news': AppNews
  }
}
</script>

<style lang="scss" scoped>
  h2{
    color: #ff8787;
  }
</style>
