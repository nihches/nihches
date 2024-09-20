import { createRouter, createWebHistory } from 'vue-router'
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
      path: '/knowIT',
      name: 'knowIT',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/knowIT.vue')
    },
    {
      path: '/dimeGame',
      name: 'dimeGame',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/dimeGame.vue')
    }
  ]
})

export default router
