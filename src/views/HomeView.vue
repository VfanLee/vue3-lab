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

const changeCardBackgroundColor = e => {
  document.querySelector('.card__container').style.setProperty('--card-background-color', e.target.value)
}

const changeCardTitleColor = e => {
  document.querySelector('.card__container').style.setProperty('--card-title-color', e.target.value)
}

const changeCardContentColor = e => {
  document.querySelector('.card__container').style.setProperty('--card-content-color', e.target.value)
}
</script>

<template>
  <main class="home__container">
    <section class="theme__container">
      <div class="theme__inline">
        <h3>内置主题</h3>
        <select class="theme__select" v-model="theme" @change="changeTheme">
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>

      <div class="theme__custom">
        <h3>用户自定义</h3>
        <div>
          主色调：
          <input class="theme__input" type="color" v-model="primaryColor" @change="changePrimaryColor" />
        </div>
        <p>--- 卡片 ---</p>
        <div>
          卡片背景颜色：
          <input class="theme__input" type="color" v-model="cardBackgroundColor" @change="changeCardBackgroundColor" />
        </div>
        <div>
          卡片标题颜色：
          <input class="theme__input" type="color" v-model="cardContentColor" @change="changeCardTitleColor" />
        </div>
        <div>
          卡片内容颜色：
          <input class="theme__input" type="color" v-model="cardContentColor" @change="changeCardContentColor" />
        </div>
      </div>
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
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .view__section {
    h2 {
      text-align: center;
    }
  }
}
</style>
