import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/DarkStone.vue'
import DarkStone from '../views/DarkStone.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'DarkStone',
      component: DarkStone
    },
    {
      path: '/know',
      name: 'know',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/know.vue')
    },
    {
      path: '/dime',
      name: 'dime',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dime.vue')
    },
  ]
})

export default router
