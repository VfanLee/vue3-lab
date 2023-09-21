<script setup>
import { ref } from 'vue'
import useLocaleStore from '@/store/modules/locale'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const localeStore = useLocaleStore()
const rotue = useRoute()
const i18n = useI18n()

const locale = ref(localeStore.currentLang)
const changeLocale = value => {
  localeStore.setLang(value)
  i18n.locale.value = value
  document.title = i18n.t(rotue.meta.title)
}
</script>

<template>
  <el-radio-group v-model="locale" @change="changeLocale">
    <el-radio-button label="zh">简体中文</el-radio-button>
    <el-radio-button label="en">English</el-radio-button>
    <el-radio-button label="ar">عربى</el-radio-button>
  </el-radio-group>
</template>
