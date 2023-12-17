<script setup lang="ts">
import { useTrainerStore } from '@/stores/trainerStore'

import { computed } from 'vue'
import PokemonCard from '@/components/PokemonCard.vue'

const trainerStore = useTrainerStore()

// get id trainer from localstorage
const idTrainer = localStorage.getItem('idTrainer')

trainerStore.getPokemonsByTrainer(idTrainer ? idTrainer : '')

const pokemons = computed(() => trainerStore.pokemons)
</script>

<template>
  <v-container>
    <v-row v-if="pokemons.length > 0">
      <v-col cols="12" md="4" v-for="pokemon in pokemons" :key="pokemon.name">
        <PokemonCard :pokemon="pokemon" />
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col cols="12">
        <h1 class="text-center">Você não possui pokémons</h1>
      </v-col></v-row
    >
  </v-container>
</template>
