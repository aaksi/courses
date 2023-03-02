Vue.createApp({
  // data(){
  //   return{

  //   }
  // }
  data: () => ({
    myHtml: '<h1>vue 3 app</h1>',
    title: 'Заголовок',
    person: {
      firstName: 'stas',
      lastName: 'lastName',
      age: 25,
    },
    items: [1, 2, 3],
    items2: [3, 2, 1],
    items3: [1, 2, 3],
    items4: [1, 2, 3, 4, 5],
    items5: [1, 2, ],
  }),
  methods: {
    stopPropagation(event) {
      event.stopPropagation()
    },
    addItem(event) {
      console.log(this.$refs.myInput.value)
      this.items5.unshift(this.$refs.myInput.value)
      this.$refs.myInput.value = ''
      console.log(event.key)
    },
    remove(i, arr){
      arr.splice(i,1)
    },
    log(item){
      console.log('log', item)
    }
  },
  computed: {
    evenItems() {
      return this.items4.filter(i => i % 2 === 0)
    }
  }
}).mount('#app')
