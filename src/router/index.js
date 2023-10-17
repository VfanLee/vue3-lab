import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/reactivity',
      name: 'reactivity',
      component: () => import('@/views/basic/reactivity.vue')
    },
    {
      path: '/model',
      name: 'model',
      component: () => import('@/views/basic/model.vue')
    },
    {
      path: '/tinymce',
      name: 'tinymceView',
      component: () => import('@/views/tinymce-view.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/home'
    }
  ]
})

export default router
