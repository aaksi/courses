const App = {
  data() {
    return {
      title: 'Список заметок',
      placeholderString: 'Введите название заметки',
      inputValue: '',
      notes: ['заметка 1', 'заметка 2'],
    }
  },
  methods: {
    addNewNote() {
      if (this.inputValue !== '') {
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    },
    toUpperCase(item) {
      return item.toUpperCase()
    }
  },
  computed: {
    doubleCountComputed() {
      return this.notes.length * 2
    }
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

Vue.createApp(App).mount('#app')
