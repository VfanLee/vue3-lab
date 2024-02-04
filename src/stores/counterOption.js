import { defineStore } from 'pinia'

export const useCounterOptionStore = defineStore('counterOption', {
  state: () => ({
    count: 0
  }),
  getters: {
    doubleCount: ({ count }) => count * 2
  },
  actions: {
    increment() {
      this.count++
    }
  }
})
