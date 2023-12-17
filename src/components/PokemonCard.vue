<script setup lang="ts">
import { computed } from 'vue'
import { defineProps } from 'vue'
const props = defineProps({
  pokemon: {
    type: Object,
    required: true
  }
})

const pokemonName = computed(
  () => props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1)
)

const formatTypeName = (type: string) => {
  if (type === 'poison') {
    return 'Veneno'
  }
  if (type === 'grass') {
    return 'Grama'
  }
  if (type === 'fire') {
    return 'Fogo'
  }
  if (type === 'water') {
    return 'Água'
  }
  if (type === 'bug') {
    return 'Inseto'
  }
  if (type === 'normal') {
    return 'Normal'
  }
  if (type === 'flying') {
    return 'Voador'
  }
  if (type === 'electric') {
    return 'Elétrico'
  }
  if (type === 'ground') {
    return 'Terra'
  }
  if (type === 'fairy') {
    return 'Fada'
  }
  if (type === 'fighting') {
    return 'Lutador'
  }
  if (type === 'psychic') {
    return 'Psíquico'
  }
  if (type === 'rock') {
    return 'Pedra'
  }
  if (type === 'steel') {
    return 'Aço'
  }
  if (type === 'ice') {
    return 'Gelo'
  }
  if (type === 'ghost') {
    return 'Fantasma'
  }
  if (type === 'dragon') {
    return 'Dragão'
  }
  if (type === 'dark') {
    return 'Sombrio'
  }
  if (type === 'unknown') {
    return 'Desconhecido'
  }
  if (type === 'shadow') {
    return 'Sombra'
  }
  return type
}

const formatColorByType = (type: string) => {
  if (type === 'poison') {
    return 'purple'
  }
  if (type === 'grass') {
    return 'green'
  }
  if (type === 'fire') {
    return 'red'
  }
  if (type === 'water') {
    return 'blue'
  }
  if (type === 'bug') {
    return 'green'
  }
  if (type === 'normal') {
    return 'grey'
  }
  if (type === 'flying') {
    return 'blue'
  }
  if (type === 'electric') {
    return 'yellow'
  }
  if (type === 'ground') {
    return 'brown'
  }
  if (type === 'fairy') {
    return 'pink'
  }
  if (type === 'fighting') {
    return 'red'
  }
  if (type === 'psychic') {
    return 'pink'
  }
  if (type === 'rock') {
    return 'brown'
  }
  if (type === 'steel') {
    return 'grey'
  }
  if (type === 'ice') {
    return 'blue'
  }
  if (type === 'ghost') {
    return 'purple'
  }
  if (type === 'dragon') {
    return 'purple'
  }
  if (type === 'dark') {
    return 'grey'
  }
  if (type === 'unknown') {
    return 'grey'
  }
  if (type === 'shadow') {
    return 'grey'
  }
  return type
}
</script>

<template>
  <v-card class="h-100 rounded-lg" :color="formatColorByType(pokemon.types[0])">
    <v-img :src="pokemon.sprite" height="200px" />
    <v-card-title>{{ pokemonName }}</v-card-title>
    <v-card-text class="h-100">
      <v-chip v-for="type in pokemon.types" :key="type" class="mr-2">
        {{ formatTypeName(type) }}
      </v-chip>
    </v-card-text>
  </v-card>
</template>
