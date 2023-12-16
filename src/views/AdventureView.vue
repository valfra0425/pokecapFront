<script setup lang="ts">
import { ref, onBeforeMount } from "vue"
import { usePkmStore } from "@/stores/pkmStore"

function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const pkmStore = usePkmStore();
const pkm = ref("");

onBeforeMount(async () => {
    pkm.value = (await pkmStore.getPkm(1)).name
})

var qtdRounds = ref<number>()
var atualRound = ref<number>()
var pokeball = ref<number>()
var greatball = ref<number>()
var ultraball = ref<number>()
var masterball = ref<number>()
var started = ref<boolean>()
var finished = ref<boolean>()


function start() {
    qtdRounds.value = randInt(6, 12);
    atualRound.value = 1;
    pokeball.value = randInt(1, 10);
    greatball.value = randInt(0, 5);
    ultraball.value = randInt(0, 3);
    masterball.value = (Math.random() <= 0.05 ? 1 : 0);
    started.value = true;
}
</script>

<template>
    <div class="container">
        <div id="adventure">
            <div id="alerts">
                <h1 id="round" v-if="started"> Round {{ atualRound }} </h1>
                <h1 v-if="!started">Comece a sua aventura pokémon!</h1>
                <div v-else>
                    <h2 v-if="true">Capturado!</h2>
                    <h2 v-else>Falhou!</h2>
                </div>
            </div>
            <div id="container_pkm">
                <div id="main_pkm">
                    <img class="img_pkm" src="../assets/adventure.png">
                </div>
            </div>
        </div>
        <v-row id="div-pokeballs">
            <v-col cols="12" id="pokeballs">
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/pokeball.png">
                    <div>
                        <span>{{started === true ? pokeball : "?" }}</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/greatball.png">
                    <div>
                        <span>{{started === true ? greatball : "?" }}</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/ultraball.png">
                    <div>
                        <span>{{started === true ? ultraball : "?" }}</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/masterball.png">
                    <div>
                        <span>{{started === true ? masterball : "?" }}</span>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="control-div" v-if="!started">
                <v-btn size="x-large" @click="start()">Start</v-btn>
            </v-col>
            <v-col cols="6" class="control-div" v-else>
                <v-btn class="btn-width" size="x-large">Next Round</v-btn>
                <v-btn class="btn-width" size="x-large">Finish</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
.container {
    height: 95%;
    width: 100%;
}
#adventure {
    height: 70%;
}
#alerts {
    position: relative;
    display: flex;
    height: 20%;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 25px;
    text-align: center;
}
#container_pkm {
    display: flex;
    height: 80%;
    justify-content: center;
    align-items: center;
}
#main_pkm {
    width: 50%;
    height: auto;
}
.img_pkm {
    height: 100%;
    width: 100%;
    border-radius: 100px;
    object-fit: cover;
}
#div-pokeballs {
    height: 30%;
    display: flex;
    justify-content: center;
}
#pokeballs {
    height: 60%;
    display: flex;
    justify-content: space-around;
}
.pokeball {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.img-pokeball {
    height: 70%;
}
.pokeball div {
    margin-top: 5px;
    background-color: white;
    padding: 0px 5px;

}
.pokeball div span {
    color: black;
    font-size: 20px;
}
.control-div {
    height: 40%;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
#round {
    position: absolute;
    left: 20px;
}
.btn-width {
    width: 150px;
}

@media (min-width: 500px) and (max-width: 768px){
#alerts {
    font-size: 15px;
}
#main_pkm {
    width: 90%;
    height: 50%;
}
.img-pokeball {
    height: 40%;
}
.control-div {
    height: 30%;
}
}

@media (min-width: 769px) and (max-width: 1024px){
#alerts {
    font-size: 18px;
}
#main_pkm {
    width: 90%;
    height: 70%;
}
@media (min-width: 950px) and (max-width: 1024px){
#main_pkm {
    width: 85%;
    height: 75%;
}
}
.img-pokeball {
    height: 50%;
}
}
@media (min-width: 1024px) and (max-width: 1200px){
    #alerts {
    font-size: 20px;
}
#main_pkm {
    width: 75%;
    height: 80%;
}
.img-pokeball {
    height: 50%;
}
.control-div {
    height: 30%;
}
}
</style>