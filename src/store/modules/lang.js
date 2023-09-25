import { ref } from 'vue'
import { defineStore } from 'pinia'
import i18n from '@/i18n'
import router from '@/router'
import { setCacheLang } from '@/utils/lang'

const useLangStore = defineStore('lang', () => {
  // --- init settings ---
  const i18nLocale = i18n.global.locale.value
  if (i18nLocale === 'ar') {
    document.body.dir = 'rtl'
  } else {
    document.body.dir = 'ltr'
  }
  // --- init settings ---

  const currentLang = ref(i18nLocale)

  const setLang = lang => {
    if (lang === 'ar') {
      document.body.dir = 'rtl'
    } else {
      document.body.dir = 'ltr'
    }
    i18n.global.locale.value = lang
    currentLang.value = lang
    setCacheLang(lang)
    document.title = i18n.global.t(router.currentRoute.value.meta.title)
  }

  return { currentLang, setLang }
})

export default useLangStore
