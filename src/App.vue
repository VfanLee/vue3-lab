<script setup>
import { computed } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import elementZh from 'element-plus/dist/locale/zh-cn.min.mjs'
import elementEn from 'element-plus/dist/locale/en.min.mjs'
import elementAr from 'element-plus/dist/locale/ar.min.mjs'
import useLocaleStore from './store/modules/locale'

import LocaleSwitcher from '@/components/LocaleSwitcher.vue'

const localeStore = useLocaleStore()

const locale = computed(() => {
  switch (localeStore.currentLang) {
    case 'zh':
      return elementZh
    case 'en':
      return elementEn
    case 'ar':
      return elementAr
    default:
      return elementZh
  }
})
</script>

<template>
  <nav>
    <RouterLink to="/">{{ $t('home') }}</RouterLink>
    |
    <RouterLink to="/about">{{ $t('about') }}</RouterLink>
  </nav>

  <LocaleSwitcher />

  <el-config-provider :locale="locale">
    <RouterView />
  </el-config-provider>
</template>

<style lang="scss" scoped>
body {
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: hsla(160, 100%, 37%, 1);
    }
  }
}
</style>
