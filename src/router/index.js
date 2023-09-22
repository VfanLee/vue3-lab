import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tinymce',
      name: 'tinymce',
      component: () => import('@/views/tinymce.vue')
    }
  ]
})

export default router
