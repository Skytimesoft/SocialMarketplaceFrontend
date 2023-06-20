import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/user', 
      name: 'user',
      component: () => import('../components/layouts/UserPaynel.vue'),
      children: [
        {
          path: '',
          name: 'dashboard',
          component: () => import('../views/user/Dashboard.vue')
        },
        {
          path: '/ticket',
          name: 'ticket',
          component: () => import('../views/user/Ticket.vue')
        },
      ]
    }
  ]
})

export default router
