// вы можете как угодно изменять программу и код
// доавлять любые переменные и модели
// ваша задача реализовать так, как показано на видео, чтобы оно работало

const App = {
  data() {
    return {
      activeIndex: 0, // то, что позволяет определить текущий активный шиг
      steps: [
        { title: 'Основы', text: 'В блоке вы познакомитесь со всеми основами Vue.js на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.' },
        { title: 'Компоненты', text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.' },
        { title: 'Роутер', text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.' },
        { title: 'Vuex', text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.' },
        { title: 'Composition', text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.' },
      ],
      finishComplete: false,
    }
  },
  methods: {
    prev() {
      // когда нажимаем кнопку назад
      if (this.activeIndex < 0) {
        this.activeIndex = 0
      }
      else {
        this.activeIndex = this.activeIndex - 1
      }
    },
    next() {
      if (this.activeIndex >= this.steps.length -1 ) {
        this.activeIndex = this.steps.length - 1
        this.last()
      }
      else {
        this.activeIndex = this.activeIndex + 1
      }
      console.log(this.activeIndex)
      console.log(this.steps.length)
    },
    last() {
      // начать заного
      // this.activeIndex = 0
      console.log(this.finishComplete)
      this.finishComplete = true
    },
    reset(){
      this.activeIndex = 0
      this.finishComplete = false
    },
    nextOfFinish() {
      // кнопка вперед или закончить
      // if (this.activeIndex > steps.length - 1) {
      //   this.activeIndex = steps.length
      // }
      // else {
      //   this.activeIndex = this.activeIndex + 1
      // }

    },
    setActive(idx) {
      // когда нажимаем на определенный шаг
    }
  },
  computed: {

    finish() {
      return this.activeIndex === this.steps.length - 1
    },
    btnPrev() {
      return this.activeIndex > 0
    },
    btnNext() {
      if (this.finish) {
        return 'закончить'
      }
      else {
        return 'Вперед'
      }
    }

    // тут стоит определить несколько свойств:
    // 1. текущий выбранный шаг
    // 2. выключена ли кнопка назад
    // 3. находимся ли мы на последнем шаге
  }
}

Vue.createApp(App).mount('#app')
