import { createApp } from 'vue'
import store from './store'
import router from './router'

import 'normalize.css'
import 'element-plus/dist/index.css'
import '@/styles/index.scss'
import '@/styles/theme/index.css'

import { ElButton, ElInput, ElDatePicker, ElDrawer, ElForm, ElFormItem, ElSelect, ElOption, ElDivider } from 'element-plus'
import App from './App.vue'

const app = createApp(App)

// 手动按需引入
const elementPlusComponents = { ElButton, ElInput, ElDatePicker, ElDrawer, ElForm, ElFormItem, ElSelect, ElOption, ElDivider }
for (const componentName in elementPlusComponents) {
  app.component(componentName, elementPlusComponents[componentName])
}

app.use(store).use(router)

app.mount('#app')
