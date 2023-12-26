<script setup lang="ts">
import { ref, onBeforeMount } from 'vue'
import { useTrainerStore } from "@/stores/trainerStore"

const trainerStore = useTrainerStore()
let snackbarSucess = ref(false)
let snackbarFailed = ref(false)

const selectedTrainer = ref<string | null>(null); // Variável que armazena o caminho da imagem selecionada
const name = ref('');
const time = <any>[]

async function createTrainer(){
    const data = {
        name: name.value,
        sprite: selectedTrainer.value,
        time: time.values
    }
    
    const createTrainer = await trainerStore.CreateTrainer(data)
    if(createTrainer){
        snackbarSucess.value = true;
        setTimeout(() => {
        name.value = ''
        selectedTrainer.value = null
        }, 2000);
    } else {
        snackbarFailed.value = true;
    }
}

</script>

<template>
    <div class="content-container">
      <h2>Escolha seu personagem</h2>
      <div class="trainers-container">
        <div class="trainer-box" :class="{ 'selected': selectedTrainer === '../assets/trainers/trainer_1.png' }">
          <input type="radio" id="trainer1" v-model="selectedTrainer" value="../assets/trainers/trainer_1.png"/>
          <label for="trainer1">
            <img src="../assets/trainers/trainer_1.png" alt="Trainer number one">
          </label>
        </div>
        <div class="trainer-box" :class="{ 'selected': selectedTrainer === '../assets/trainers/trainer_2.png' }">
          <input type="radio" id="trainer2" v-model="selectedTrainer" value="../assets/trainers/trainer_2.png"/>
          <label for="trainer2">
            <img src="../assets/trainers/trainer_2.png" alt="Trainer number two">
          </label>
        </div>
        <div class="trainer-box" :class="{ 'selected': selectedTrainer === '../assets/trainers/trainer_3.png' }">
          <input type="radio" id="trainer3" v-model="selectedTrainer" value="../assets/trainers/trainer_3.png"/>
          <label for="trainer3">
            <img src="../assets/trainers/trainer_3.png" alt="Trainer number three">
          </label>
        </div>
        <div class="trainer-box" :class="{ 'selected': selectedTrainer === '../assets/trainers/trainer_4.png' }">
          <input type="radio" id="trainer4" v-model="selectedTrainer" value="../assets/trainers/trainer_4.png"/>
          <label for="trainer4">
            <img src="../assets/trainers/trainer_4.png" alt="Trainer number four">
          </label>
        </div>
      </div>
      <div class="trainer-name">
        <v-text-field clearable label="Seu nome de treinador" variant="solo" v-model="name" />
        <v-btn class="start-btn" size="large" @click="createTrainer()">Start</v-btn>
      </div>
    </div>
    <v-sheet class="d-flex flex-column">
      <v-snackbar
        :timeout="2000"
        color="green"
        elevation="24"
        v-model="snackbarSucess"
      >
        Seu personagem foi criado com sucesso!
      </v-snackbar>
      <v-snackbar
        :timeout="2000"
        color="red"
        elevation="24"
        v-model="snackbarFailed"
      >
        Erro ao criar personagem!
      </v-snackbar>
    </v-sheet>
  </template>

<style scoped>
.content-container {
    display: flex;
    flex-direction: column;
}

.trainers-container {
    display: flex;
    gap: 16px;
    width: 85%;
    align-self: center;
    justify-content: space-between;
}

.trainer-box {
    background-color: #fff;
    border: 4px solid #aaa;
    border-radius: 8px;
    padding: 8px;
    margin-top: 16px;
}

.trainer-box > label {
  display: block;
  width: 160px; /* Ajuste o tamanho conforme necessário */
  height: 160px; /* Ajuste o tamanho conforme necessário */
  cursor: pointer;
}

.trainer-box > label > img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
}

.selected {
  border-color: #f00;
}

.trainer-name {
    width: 85%;
    align-self: center;
    margin-top: 32px;
}

h2 {
    width: 85%;
    align-self: center;
    margin-top: 16px;
}

.start-btn {
    color: #fff;
    background-color: #f00000;
}

input {
    display: none;
}
</style>