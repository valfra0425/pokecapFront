import { defineStore } from 'pinia'
import type { Pkm, Trainer } from '../utils/types'
import axios from 'axios'
import { usePkmStore } from './pkmStore'

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
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/trainer/find/${name}`)
      this.trainer = response.data
      return this.trainer
    },
    async getPokemonsByTrainer(id: string): Promise<Pkm[]> {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/trainer/${id}`)
      const pkmStore = usePkmStore()
      response.data.time.map(async (pkm: number) => {
        this.pokemons.push(await pkmStore.getPkm(pkm))
      })
      return this.pokemons
    },
    async CreateTrainer(trainer: Trainer): Promise<Trainer> {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/trainer`, trainer)
      return response.data
    },
    async UpdateTrainer(id: string, trainer: Trainer): Promise<Trainer> {
      const response = await axios.put(`${import.meta.env.VITE_API_URL}/trainer/${id}`, trainer)
      return response.data
    }
  }
})
