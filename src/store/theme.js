import { ref } from 'vue'
import { defineStore } from 'pinia'

function switchTheme(theme) {
  document.documentElement.className = theme
  sessionStorage.setItem('theme', theme)
}

const useThemeStore = defineStore('theme', () => {
  const cacheTheme = sessionStorage.getItem('theme') || 'light'
  const theme = ref(cacheTheme)
  switchTheme(cacheTheme)

  const setTheme = value => {
    theme.value = value
    switchTheme(value)
  }

  return { theme, setTheme }
})

export default useThemeStore
