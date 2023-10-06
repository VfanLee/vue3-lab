import { defineStore } from 'pinia'

const useLangStore = defineStore('lang', () => {
  const lang = 'zh'

  return { lang }
})

export default useLangStore
