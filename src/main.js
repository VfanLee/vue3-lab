import { createApp } from 'vue'
import i18n from './i18n'
import store from './store'
import router from './router'

import '@/styles/var.css'
import 'element-plus/dist/index.css'

import App from './App.vue'
import ElementPlus from 'element-plus'

const app = createApp(App)

app.use(i18n)
app.use(store)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
