import { createApp } from 'vue'
import pinia from './stores'
import router from './router'

import App from './App.vue'

import 'normalize.css'
import '@/styles/index.scss'

const app = createApp(App)

app
  .use(pinia)
  .use(router)

app.mount('#app')
