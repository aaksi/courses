import { createApp } from 'vue'
import App from './App.vue'
import TheHeader from './TheHeader'
import './theme.css'


// App -> AppNews -> AppNewsList

const app = createApp(App)

app.component('the-header', TheHeader)

app.mount('#app')
