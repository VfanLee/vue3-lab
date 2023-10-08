import { ref } from 'vue'
import { defineStore } from 'pinia'

function switchTheme(theme) {
  document.body.style.setProperty('--primary-color', '')
  document.body.classList.remove('light')
  document.body.classList.remove('dark')
  document.body.classList.add(theme)
  sessionStorage.setItem('theme', theme)
}

const useThemeStore = defineStore('theme', () => {
  const cacheTheme = sessionStorage.getItem('theme') || 'light'
  const theme = ref(cacheTheme)
  switchTheme(cacheTheme)

  const currentPrimaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color')
  const primaryColor = ref(currentPrimaryColor)

  const setTheme = value => {
    theme.value = value
    switchTheme(value)
    const currentPrimaryColor = getComputedStyle(document.body).getPropertyValue('--primary-color')
    primaryColor.value = currentPrimaryColor
  }

  return { theme, primaryColor, setTheme }
})

export default useThemeStore
