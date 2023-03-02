

const h = Vue.h

const app = Vue.createApp({
  data: () => ({
    title: 'Это из свойства template'
  }),
  methods: {
    changeTitle() {
      console.log(this.title)
      this.title = 'изменили!'
    }
  },
  // template: `
  //   <div class='card center'>
  //     <h1>{{title}}</h1>
  //     <button class='btn' @click="title = 'Изменили'">Изменить</button>
  //   </div>
  //  `
  render() {
    return h('div', {
      class: 'card center'
    }, [
      h('h1', {}, this.title),
      h('button', {
        class: 'btn',
        onClick: this.changeTitle
      }, 'изменить')
    ])
  },
  beforeCreate(){
    console.log('beforeCreate')
  }
})


app.mount('#app')

Vue.createApp({
  data:()=>({
    title: 'new title 2'
  }),
}).mount('#app2')



let title = 'Vue 3'
let message = 'Заголовок это:' + title

const data = {
  title: 'Vue 3',
  message: 'Заголовок это: Vue 3'
}

const proxy = new Proxy(data, {
  // get(target, p){
  //   console.log(target)
  //   console.log(p)
  // },
  set(target, key, value) {
    if (key === 'title') {
      target.message = 'Заголовок это:' + value
    }
    target[key] = value
  }
})


proxy.title = 'angular'
// console.log(proxy)
