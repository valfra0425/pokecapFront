import { defineStore } from 'pinia'
import type { Pkm } from '../utils/types'
import axios from 'axios'

export const useTrainerStore = defineStore('trainer', {
  state: () => {
    return {
      trainer: [],
      pokemons: [] as Pkm[],
      loading: 0
    }
  },
  getters: {},
  actions: {
    async getTrainer(): Promise<any> {
      // TODO: get trainer from API
    },
    async getPokemonsByTrainer(id: string): Promise<Pkm[]> {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/trainer/${id}`)
      this.pokemons = response.data
      return this.pokemons
    }
  }
})
