import { createRouter, createWebHistory } from 'vue-router'
import mainLayout from '../layout/mainLayout.vue'
import StartView from '../views/StartView.vue'
import PokemonViews from '@/views/PokemonView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: StartView,
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
    },
    {
      path: '/pokedex',
      name: 'pokedex',
      component: () => import('../views/PokedexView.vue'),
      meta: {
        layout: mainLayout,
      }
    }
  ]
})

export default router
