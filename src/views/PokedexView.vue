<script setup lang="ts">
import { usePkmStore } from "@/stores/pkmStore"
import { ref, onBeforeMount } from "vue"

//stores
const pkmStore = usePkmStore();

//vars
const pkms = ref<any>([]);
const actualPkm = ref<number>(0);
const pkm = ref<any>({});

onBeforeMount(async () => {
  pkms.value = await pkmStore.getPkms();
  updatePokemonData();
});

// Método para atualizar dados do Pokémon
const updatePokemonData = () => {
  pkm.value = pkms.value[actualPkm.value]; // Ajuste do índice
};

// Método para ir para o Pokémon anterior
const prevPokemon = () => {
  if (actualPkm.value > 0) {
    actualPkm.value--;
    updatePokemonData();
  }
};

// Método para ir para o próximo Pokémon
const nextPokemon = () => {
  if (actualPkm.value < 150) {
    actualPkm.value++;
    updatePokemonData();
  }
};

</script>

<template>
    <main>
        <div class="pokedex-container">
            <img :src="pkm.sprite" class="pokemon-image" alt="Pokémon">
            <h1 class="pokemon-data">
            <span class="pokemon-number">{{ pkm.id }}</span> -
            <span class="pokemon-name">{{ pkm.name }}</span>
            </h1>
            <div class="buttons">
            <button @click="prevPokemon" class="button btn-prev">Prev &lt;</button>
            <button @click="nextPokemon" class="button btn-next">&gt; Next</button>
            </div>
            <img src="../assets/pokedex.png" class="pokedex" alt="Pokédex" title="Pokédex">
        </div>
    </main>
</template>

<style scoped>
main {
    display: flex;
    justify-content: center;
    margin-top: 16px;
}

.pokedex-container {
  display: inline-block;
  position: relative;
}

.pokedex {
  width: 100%;
  max-width: 425px;
}

.pokemon-image {
  position: absolute;
  bottom: 55%;
  left: 50%;
  transform: translate(-63%, 20%) scale(1.3);
  height: 18%;
}

.pokemon-data {
  position: absolute;
  font-weight: 600;
  color: #aaa;
  top: 54.5%;
  right: 27%;
  font-size: clamp(8px, 5vw,25px);
}

.pokemon-name {
  color: #3a444d;
  text-transform: capitalize;
}

.buttons {
  position: absolute;
  bottom: 10%;
  left: 50%;
  width: 65%;
  transform: translate(-57%, 0);
  display: flex;
  gap: 20px;
}

.button {
  width: 50%;
  padding: 4%;
  border: 2px solid #000;
  border-radius: 5px;
  font-size: clamp(8px, 5vw, 1rem);
  font-weight: 600;
  color: #fff;
  background: #444;
  box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
  cursor: pointer;
}

.button:hover {
  background: #333;
}

.button:active {
  box-shadow: inset -4px 4px 0 #111;
  font-size: 0.9rem;
}
</style>