import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import mainLayout from '../layout/mainLayout.vue'
import StartView from '../views/StartView.vue'
import PokemonViews from '@/views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        layout: mainLayout
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        layout: mainLayout
      }
    },
    {
      path: '/adventure',
      name: 'adventure',
      component: () => import('../views/AdventureView.vue'),
      meta: {
        layout: mainLayout
      }
    },
    {
      path: '/start',
      name: 'start',
      component: StartView
    },
    {
      path: '/pokemons',
      name: 'pokemons',
      component: PokemonViews,
      meta: {
        layout: mainLayout
      }
    },
    {
      path: '/trainer',
      name: 'trainer',
      component: () => import('../views/TrainerView.vue'),
      meta: {
        layout: mainLayout,
      }
    }
  ]
})

export default router
