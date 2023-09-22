import { ref } from 'vue'
import { defineStore } from 'pinia'
import { setCacheLang } from '@/utils/locale'
import i18n from '@/i18n'

const useLocaleStore = defineStore('locale', () => {
  const i18nLocale = i18n.global.locale.value
  if (i18nLocale === 'ar') {
    document.body.dir = 'rtl'
  } else {
    document.body.dir = 'ltr'
  }

  const currentLang = ref(i18nLocale)

  const setLang = lang => {
    currentLang.value = lang
    setCacheLang(lang)
    if (lang === 'ar') {
      document.body.dir = 'rtl'
    } else {
      document.body.dir = 'ltr'
    }
  }

  return { currentLang, setLang }
})

export default useLocaleStore
