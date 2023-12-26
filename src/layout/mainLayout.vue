<script setup lang="ts">
import { useTrainerStore } from "@/stores/trainerStore"
import { ref, onMounted } from "vue";

var username: string;
const name = ref<string>('')
const time = ref<number>(0)
const logged = ref<boolean>(false)
logged.value = (localStorage.getItem("idTrainer") ? true : false)

if (localStorage.getItem("name")) {
  name.value = localStorage.getItem("name") as string
  time.value = parseInt(localStorage.getItem("time") as string)
}
const trainerStore = useTrainerStore()

async function login(TrainerName: string){
  const user = await trainerStore.findbyName(TrainerName)
  if (user){
    localStorage.setItem("idTrainer", user._id);
    name.value = user.name
    localStorage.setItem("name", name.value);
    time.value = user.time.length
    localStorage.setItem("time", time.value.toString())
  }
  else {
    alert("Usuário não existe")
  }
}

function logout(){
  localStorage.clear()
  name.value = ''
  time.value = 0
}

const minhaFuncao = () => {
  setInterval(() => {
    let val = parseInt(localStorage.getItem("time")!)
    logged.value = (localStorage.getItem("idTrainer") ? true : false)
    if (val != null){
      time.value = val;
    }
  }, 1000); // A função será chamada a cada 1 segundo
}

onMounted(minhaFuncao);

</script>
<template>
  <v-row class="container">
    <v-col cols="4" md="3" lg="2" xl="2" class="bara-lateral">
      <router-link to="/pokedex">
        <div class="div-lateral">
          <span>Pokedex</span>
          <div class="icon">
            <img src="../assets/icons/pokedex.png" />
          </div>
        </div>
      </router-link>
      <router-link to="/adventure" v-if="logged">
        <div class="div-lateral">
          <span>Aventura</span>
          <div class="icon">
            <img src="../assets/icons/adventure.png" />
          </div>
        </div>
      </router-link>
      <router-link to="/pokemons" v-if="logged">
        <div class="div-lateral">
          <span>Pokémons</span>
          <div class="icon">
            <img src="../assets/icons/pokeball_pokebola.png" />
          </div>
        </div>
      </router-link>
    </v-col>
    <v-col cols="8" md="9" lg="10" xl="10" class="content">
      <div class="bar-login" v-if="name === ''">
        <v-form @submit.prevent="login(username)" class="bar-form">
          <input v-model="username" type="text" placeholder="Nome" required class="custom-input">
          <v-btn color="red" type="submit">Login</v-btn>
        </v-form>
      </div>
      <div class="bar" v-else>
        <span>Treinador: {{ name }}</span>
        <span>Nº de pokémons: {{ time }}</span>
        <v-btn color="red" @click="logout()">logout</v-btn>
      </div>
      <slot />
    </v-col>
  </v-row>
</template>

<style scoped>
.container {
  display: flex;
  width: 100%;
  height: 100%;
  margin: 0px;
}
.bara-lateral {
  padding: 5% 0px 0px 0px;
  background-color: rgb(255, 0, 0);
}
.div-lateral {
  position: relative;
  display: flex;
  padding: 15px;
  background-color: rgb(255, 255, 255);
  color: #000;
  margin: 20px 0px;
  height: 90px;
  width: 90%;
  border-top-right-radius: 50px;
  border-bottom-right-radius: 50px;
  align-items: center;
  font-size: 30px;
  border-color: #000;
  border-width: 3px;
  border-style: solid;
  border-left: none;
}
.icon {
  margin-right: 10px;
  position: absolute;
  right: 0;
  width: 50px;
  height: 50px;
}
.icon img {
  width: 50px;
  height: 50px;
}
.content {
  padding: 0;
  background-color: #24282b;
  background-image: url(../assets/wallpaper/pikachu.jpg);
  background-size: contain;
  background-position: right bottom;
}
.bar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  height: 5%;
}
.bar-login {
  display: flex;
  justify-content: start;
  align-items: center;
  background-color: #ffffff;
  color: #000000;
  height: 5%;
  padding-left: 10px;
}
.bar-form {
  display: flex;
  align-items: center;
  height: 100%;
}
.custom-input {
  width: 200px;
  margin-right: 10px;
  height: 100%;
  font-size: medium;
}

@media (min-width: 500px) and (max-width: 768px) {
  .bara-lateral {
    padding: 10% 0px 0px 0px;
  }
  .div-lateral {
    padding: 5px;
    height: 70px;
    width: 90%;
    font-size: 18px;
  }
  .icon {
    width: 40px;
    height: 40px;
  }
  .icon img {
    width: 40px;
    height: 40px;
  }
  .content {
    background-image: url(../assets/wallpaper/pikachu-veertical.jpg);
    background-position: center;
  }
}
@media (min-width: 600px) and (max-width: 768px) {
  .div-lateral {
    font-size: 24px;
  }
}
@media (min-width: 769px) and (max-width: 1024px) {
  .bara-lateral {
    padding: 8% 0px 0px 0px;
  }
  .div-lateral {
    height: 70px;
    font-size: 26px;
  }
  .content {
    background-image: url(../assets/wallpaper/pikachu-veertical.jpg);
    background-position: center;
  }
}
@media (min-width: 950px) and (max-width: 1024px) {
  .content {
    background-image: url(../assets/wallpaper/pikachu.jpg);
    background-position: bottom right;
  }
}
</style>
