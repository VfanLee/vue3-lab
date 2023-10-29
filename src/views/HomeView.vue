<script setup>
import { ref, watchEffect } from 'vue'
import useThemeStore from '@/store/theme'
import Card from '@/components/Card.vue'

const themeStore = useThemeStore()
const formRef = ref(null)

const elInputValue = ref('')
const elDatePickerValue = ref('')
const show = ref(false)
const formData = ref({
  theme: themeStore.theme,
  colorPrimary: '',
  bgColor: '',
  bgColorPage: '',
  textColorPrimary: '',
  cardBgColor: '',
  cardBorderColor: '',
  cardTitleColor: '',
  cardContentColor: ''
})

watchEffect(() => {
  // 内置主题
  themeStore.setTheme(formData.value.theme)
  // 全局变量（部分）
  const rootEl = document.documentElement
  rootEl.style.setProperty('--color-primary', formData.value.colorPrimary)
  rootEl.style.setProperty('--bg-color', formData.value.bgColor)
  rootEl.style.setProperty('--bg-color-page', formData.value.bgColorPage)
  rootEl.style.setProperty('--text-color-primary', formData.value.textColorPrimary)
  rootEl.style.setProperty('--card-bg-color', formData.value.cardBgColor)
  rootEl.style.setProperty('--card-border-color', formData.value.cardBorderColor)
  rootEl.style.setProperty('--card-title-color', formData.value.cardTitleColor)
  rootEl.style.setProperty('--card-content-color', formData.value.cardContentColor)
})

const submitForm = () => {
  themeStore.setTheme(formData.value.theme)
  // show.value = false
}
const resetForm = () => {
  show.value = false
  formRef.value.resetFields()
}
</script>

<template>
  <main class="home__container">
    <div class="view__container">
      <h2>浏览器内置组件</h2>
      <section>
        <button type="button">button</button>
        <button type="button" disabled>button</button>
      </section>
      <section>
        <input type="text" placeholder="Please input" />
        <input type="text" placeholder="Please input" disabled />
      </section>
      <section>
        <input type="datetime-local" />
        <input type="datetime-local" disabled />
      </section>
    </div>

    <div class="view__container">
      <h2>Element Plus 组件</h2>
      <section>
        <el-button>Default</el-button>
        <el-button type="primary">Primary</el-button>
        <el-button type="success">Success</el-button>
        <el-button type="info">Info</el-button>
        <el-button type="warning">Warning</el-button>
        <el-button type="danger">Danger</el-button>
      </section>
      <section>
        <el-button disabled>Default</el-button>
        <el-button type="primary" disabled>Primary</el-button>
        <el-button type="success" disabled>Success</el-button>
        <el-button type="info" disabled>Info</el-button>
        <el-button type="warning" disabled>Warning</el-button>
        <el-button type="danger" disabled>Danger</el-button>
      </section>
      <section>
        <el-button plain>Plain</el-button>
        <el-button type="primary" plain>Primary</el-button>
        <el-button type="success" plain>Success</el-button>
        <el-button type="info" plain>Info</el-button>
        <el-button type="warning" plain>Warning</el-button>
        <el-button type="danger" plain>Danger</el-button>
      </section>
      <section>
        <el-button plain disabled>Plain</el-button>
        <el-button type="primary" plain disabled>Primary</el-button>
        <el-button type="success" plain disabled>Success</el-button>
        <el-button type="info" plain disabled>Info</el-button>
        <el-button type="warning" plain disabled>Warning</el-button>
        <el-button type="danger" plain disabled>Danger</el-button>
      </section>
      <section>
        <el-input v-model="elInputValue" placeholder="Please input" />
        <el-input v-model="elInputValue" placeholder="Please input" disabled />
      </section>
      <section>
        <el-date-picker v-model="elDatePickerValue" type="datetime" placeholder="Select date and time" />
        <el-date-picker v-model="elDatePickerValue" type="datetime" placeholder="Select date and time" disabled />
      </section>
    </div>

    <div class="view__container">
      <h2>自定义组件</h2>
      <Card />
    </div>

    <i class="theme__btn fa-solid fa-wand-magic-sparkles" @click="show = true"></i>

    <el-drawer v-model="show" title="自定义样式" direction="rtl" :show-close="false" :close-on-click-modal="false" :close-on-press-escape="false">
      <el-form ref="formRef" :model="formData">
        <el-form-item label="内置主题" prop="theme">
          <el-select v-model="formData.theme">
            <el-option label="明亮主题" value="light" />
            <el-option label="暗黑主题" value="dark" />
            <el-option label="亮红主题" value="lred" />
            <el-option label="暗红主题" value="dred" />
          </el-select>
        </el-form-item>

        <el-divider content-position="center">全局属性（部分）</el-divider>
        <el-form-item label="color-primary" prop="colorPrimary">
          <input type="color" v-model="formData.colorPrimary" />
        </el-form-item>
        <el-form-item label="bg-color" prop="bgColor">
          <input type="color" v-model="formData.bgColor" />
        </el-form-item>
        <el-form-item label="bg-color-page" prop="bgColorPage">
          <input type="color" v-model="formData.bgColorPage" />
        </el-form-item>
        <el-form-item label="text-color-primary" prop="textColorPrimary">
          <input type="color" v-model="formData.textColorPrimary" />
        </el-form-item>

        <el-divider content-position="center">自定义卡片组件属性</el-divider>
        <el-form-item label="card-bg-color" prop="cardBgColor">
          <input type="color" v-model="formData.cardBgColor" />
        </el-form-item>
        <el-form-item label="card-border-color" prop="cardBorderColor">
          <input type="color" v-model="formData.cardBorderColor" />
        </el-form-item>
        <el-form-item label="card-title-color" prop="cardTitleColor">
          <input type="color" v-model="formData.cardTitleColor" />
        </el-form-item>
        <el-form-item label="card-content-color" prop="cardContentColor">
          <input type="color" v-model="formData.cardContentColor" />
        </el-form-item>
      </el-form>

      <template #footer>
        <el-button type="danger">恢复默认</el-button>
        <el-button type="primary" @click="submitForm">确定</el-button>
        <el-button @click="resetForm">取消</el-button>
      </template>
    </el-drawer>
  </main>
</template>

<style lang="scss">
.home__container {
  width: 100vw;
  background-color: var(--bg-color-page);
}

.theme__btn {
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
}
</style>
