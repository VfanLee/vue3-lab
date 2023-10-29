import { createApp } from 'vue'
import store from './store'
import router from './router'

import 'normalize.css'
// 注意：一定要在自定义 css 变量之前引入组件，不然会导致自定义属性被覆盖
import { ElButton, ElInput, ElDatePicker, ElDrawer, ElForm, ElFormItem, ElSelect, ElOption, ElDivider, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import '@/styles/index.scss'
import '@/styles/theme/index.css'

import App from './App.vue'

const app = createApp(App)

// 全局注册 Element Plus 组件
const elementPlusComponents = { ElButton, ElInput, ElDatePicker, ElDrawer, ElForm, ElFormItem, ElSelect, ElOption, ElDivider, ElDropdown, ElDropdownMenu, ElDropdownItem }
for (const componentName in elementPlusComponents) {
  app.component(componentName, elementPlusComponents[componentName])
}

app
  .use(store)
  .use(router)

app.mount('#app')
