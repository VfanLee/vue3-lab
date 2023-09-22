<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import useLangStore from '@/store/modules/lang'
import { useRoute } from 'vue-router'

const langStore = useLangStore()
const rotue = useRoute()
const i18n = useI18n()

const locale = ref(langStore.currentLang)
const changeLocale = value => {
  langStore.setLang(value)
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
