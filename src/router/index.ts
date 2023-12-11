import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainLayout from '../layout/mainLayout.vue'
import emptyLayout from '../layout/emptyLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: mainLayout,
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: mainLayout,
      }
    }
  ]
})

export default router
