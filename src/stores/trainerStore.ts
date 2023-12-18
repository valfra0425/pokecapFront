import { defineStore } from 'pinia'
import type { Pkm, Trainer } from '../utils/types'
import axios from 'axios'

export const useTrainerStore = defineStore('trainer', {
  state: () => {
    return {
      trainer: {} as Trainer,
      pokemons: [] as Pkm[],
      loading: 0
    }
  },
  getters: {},
  actions: {
    async findbyName(name: string): Promise<Trainer> {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/trainer/find/${name}`
      );
      this.trainer = response.data;
      return this.trainer;
    },
    async getPokemonsByTrainer(id: string): Promise<Pkm[]> {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/trainer/${id}`)
      this.pokemons = response.data
      return this.pokemons
    }
  }
})
