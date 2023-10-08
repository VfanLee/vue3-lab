import { createApp } from 'vue'
import store from './store'
import router from './router'

import 'normalize.css'
import '@/styles/index.scss'

import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(router)

app.mount('#app')
