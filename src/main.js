import { createApp } from 'vue'
import store from './store'
import router from './router'

// 注意：一定要在自定义 css 变量之前引入组件，不然会导致自定义属性被覆盖
// import { ElButton, ElInput, ElDatePicker, ElDrawer, ElForm, ElFormItem, ElSelect, ElOption, ElDivider, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus'
import App from './App.vue'

import 'normalize.css'
import '@/styles/index.scss'
import '@/styles/theme/index.scss'

const app = createApp(App)

// 全局注册 Element Plus 组件
// const elementPlusComponents = { ElButton, ElInput, ElDatePicker, ElDrawer, ElForm, ElFormItem, ElSelect, ElOption, ElDivider, ElDropdown, ElDropdownMenu, ElDropdownItem }
// for (const component in elementPlusComponents) {
//   app.component(elementPlusComponents[component].name, elementPlusComponents[component])
// }

app
  .use(store)
  .use(router)

app.mount('#app')
