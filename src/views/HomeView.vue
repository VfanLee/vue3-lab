<script setup>
import { ref } from 'vue'
import useThemeStore from '@/store/theme'
import Card from '@/components/Card.vue'

const themeStore = useThemeStore()

const theme = ref(themeStore.theme)
const primaryColor = ref(themeStore.primaryColor)

const changeTheme = e => {
  themeStore.setTheme(e.target.value)
  primaryColor.value = themeStore.primaryColor
}

const changePrimaryColor = e => {
  document.body.style.setProperty('--primary-color', e.target.value)
}
</script>

<template>
  <main class="home__container">
    <section class="theme__container">
      <select class="theme__select" v-model="theme" @change="changeTheme">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
      <input class="theme__input" type="color" v-model="primaryColor" @change="changePrimaryColor" />
    </section>

    <section class="view__section">
      <h2>自定义组件</h2>
      <Card />
    </section>

    <section class="view__section">
      <h2>Element 组件</h2>
      <el-button type="primary">确认</el-button>
      <el-button>取消</el-button>
    </section>
  </main>
</template>

<style lang="scss">
.home__container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);

  .theme__container {
    width: 520px;
    padding: 20px;
    text-align: center;

    .theme__input {
      margin-left: 20px;
    }
  }

  .view__section {
    h2 {
      text-align: center;
    }
  }
}
</style>
