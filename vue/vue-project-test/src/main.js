
import 'bootstrap/dist/css/bootstrap.min.css'

import { createApp } from 'vue'
import App from './App2.vue'
import globalComponents from './components/global/index.js'

const app = createApp(App)
app.use(globalComponents)
app.mount('#app')
