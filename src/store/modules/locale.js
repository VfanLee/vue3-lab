import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCacheLang, setCacheLang } from '@/utils/locale'

const useLocaleStore = defineStore('locale', () => {
  const cacheLang = getCacheLang()
  if (cacheLang === 'ar') {
    document.body.dir = 'rtl'
  } else {
    document.body.dir = 'ltr'
  }

  const currentLang = ref(cacheLang)

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
