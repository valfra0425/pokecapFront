<script setup lang="ts">
import { ref, onBeforeMount} from "vue"
import { usePkmStore } from "@/stores/pkmStore"
import { useTrainerStore } from "@/stores/trainerStore"
import { usePkbStore } from "@/stores/pkbStore"
import type { Trainer, Pkm, PkbPut } from '../utils/types'

// função para conseguir um inteiro aleatorio 
function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// função para aguardar 1 segundo
async function awaitOnesecond(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });
}

// função para aguardar 1 segundo
async function awaitPkm(): Promise<void> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 250);
  });
}

// store
const pkmStore = usePkmStore();
const trainerStore = useTrainerStore();
const pkbStore = usePkbStore();

onBeforeMount(async () => {
    // pkm não pode estar vazio ao iniciar
    getPkm()
})

// variaveis da página
var pkm = ref<Pkm>();
var trainer = ref<Trainer>();
var qtdRounds = ref<number>(0)
var atualRound = ref<number>(0)
var pokeball = ref<number>(0)
var greatball = ref<number>(0)
var ultraball = ref<number>(0)
var masterball = ref<number>(0)
var started = ref<boolean>(false)
var finished = ref<boolean>(false)
var captured = ref<boolean>(false)
var failed = ref<boolean>(false)
var timeOut = false

async function getTrainer(){
    trainer.value = await trainerStore.findbyName(localStorage.getItem("name")!)
}

async function getPkm() {
    let pkm1 = (await pkmStore.getPkm(randInt(1, 151)))
    let pkm2 = (await pkmStore.getPkm(randInt(1, 151)))
    let pkm3 = (await pkmStore.getPkm(randInt(1, 151)))
    let pkm4 = (await pkmStore.getPkm(randInt(1, 151)))

    pkm.value = pkm1
    await awaitPkm()
    pkm.value = pkm2
    await awaitPkm()
    pkm.value = pkm3
    await awaitPkm()
    pkm.value = pkm4
}

async function start() {
    await getTrainer()
    qtdRounds.value = randInt(6, 12);
    atualRound.value = 1;
    let pkb1_bank = await pkbStore.getPkb(1, trainer.value?._id)
    let pkb2_bank = await pkbStore.getPkb(2, trainer.value?._id)
    let pkb3_bank = await pkbStore.getPkb(3, trainer.value?._id)
    if (pkb1_bank && pkb2_bank && pkb3_bank){
        pokeball.value = randInt(1, 10) + pkb1_bank.qtd;
        greatball.value = randInt(0, 5) + pkb2_bank.qtd;
        ultraball.value = randInt(0, 3) + pkb3_bank.qtd;
    }
    else {
        pokeball.value = randInt(1, 10);
        greatball.value = randInt(0, 5);
        ultraball.value = randInt(0, 3);
    }
    masterball.value = (Math.random() <= 0.05 ? 1 : 0);
    started.value = true;
    finished.value = false
}

async function finish(){
    finished.value = true
    let pkb1_bank = await pkbStore.getPkb(1, trainer.value?._id)
    let pkb1: PkbPut = {
        id: 1,
        owner: trainer.value?._id,
        qtd: (pkb1_bank.qtd || 0) + (Math.floor(pokeball.value / 2)),
        catch_rate: 0.25
    }
    await pkbStore.putPkb(1, pkb1)

    let pkb2_bank = await pkbStore.getPkb(2, trainer.value?._id)
    let pkb2: PkbPut = {
        id: 2,
        owner: trainer.value?._id,
        qtd: (pkb2_bank.qtd || 0) + (Math.floor(greatball.value / 2)),
        catch_rate: 0.50
    }
    await pkbStore.putPkb(2, pkb2)

    let pkb3_bank = await pkbStore.getPkb(3, trainer.value?._id)
    let pkb3: PkbPut = {
        id: 3,
        owner: trainer.value?._id,
        qtd: (pkb3_bank.qtd || 0) + (Math.floor(ultraball.value / 2)),
        catch_rate: 0.75
    }
    await pkbStore.putPkb(3, pkb3)
}

function nextRound(){
    if (qtdRounds.value == atualRound.value){
        finish()
    }
    atualRound.value = atualRound.value + 1
    getPkm()
}

function verifyPkb(){
    if (started.value){
        if (pokeball.value == 0 && greatball.value == 0 && ultraball.value == 0 && masterball.value == 0){
            finish()
        }
    }
}

async function captured_pkm(){
    captured.value = true
    failed.value = false
    if (trainer.value){
        trainer.value.time.push(pkm.value?.id || 0)
        let new_time = trainer.value.time
        const updateTrainer: Trainer = {
            _id: trainer.value._id,
            name: trainer.value.name,
            sprite: trainer.value.sprite,
            time: new_time
        }
        let response = await trainerStore.UpdateTrainer(trainer.value._id, updateTrainer)
        if (response){
            localStorage.setItem("time", new_time.length.toString())
        }
    }
    await awaitOnesecond();
    captured.value = false
}

async function failed_pkm(){
    captured.value = false
    failed.value = true
    await awaitOnesecond();
    failed.value = false
}

async function capture_pokeball() {
    if (!timeOut){
        timeOut = true
        if (started.value && !finished.value){
            if (pokeball.value > 0){
                let sucess = (Math.random() <= 0.25 ? true : false)
                if (sucess){
                    captured_pkm()
                    await awaitOnesecond();
                    nextRound()
                } else {
                    failed_pkm()
                    await awaitOnesecond();
                }
                pokeball.value = pokeball.value - 1
            }
        }
        timeOut = false
        verifyPkb()
    }
}

async function capture_greatball() {
    if (!timeOut){
        timeOut = true
        if (started.value && !finished.value){
            if (greatball.value > 0){
                let sucess = (Math.random() <= 0.50 ? true : false)
                if (sucess){
                    captured_pkm()
                    await awaitOnesecond();
                    nextRound()
                } else {
                    failed_pkm()
                    await awaitOnesecond();
                }
                greatball.value = greatball.value - 1
            }
        }
        timeOut = false
        verifyPkb()
    }
}

async function capture_ultraball() {
    if (!timeOut){
        timeOut = true
        if (started.value && !finished.value){
            if (ultraball.value > 0){
                let sucess = (Math.random() <= 0.75 ? true : false)
                if (sucess){
                    captured_pkm()
                    await awaitOnesecond();
                    nextRound()
                } else {
                    failed_pkm()
                    await awaitOnesecond();
                }
                ultraball.value = ultraball.value - 1
            }
        }
        timeOut = false
        verifyPkb()
    }
}

async function capture_masterball() {
    if (!timeOut){
        timeOut = true
        if (started.value && !finished.value){
            if (masterball.value > 0){
                captured_pkm()
                await awaitOnesecond();
                nextRound()
                masterball.value = masterball.value - 1
                timeOut = false
                verifyPkb()
            }
        }
    }
}

</script>

<template>
    <div class="container">
        <div id="adventure">
            <div id="alerts">
                <h1 id="round" v-if="started && !finished"> Round {{ atualRound }} </h1>
                <h1 v-if="finished">Esse é o fim da sua aventura!</h1>
                <h1 v-if="!started">Comece a sua aventura pokémon!</h1>
                <div class="alert" v-else>
                    <h2 v-if="captured">Capturado!</h2>
                    <h2 v-if="failed">Falhou!</h2>
                </div>
            </div>
            <div id="container_pkm">
                <div v-if="(!started || finished) && pkm?.sprite" id="main_pkm">
                    <img class="img_pkm" src="../assets/adventure.png">
                </div>
                <div class="background-pkm" v-else>
                    <img class="pkm_size" :src="pkm?.sprite"> 
                </div>
            </div>
        </div>
        <v-row id="div-pokeballs">
            <v-col cols="12" id="pokeballs">
                <div class="pokeball">
                    <img @click="capture_pokeball()" class="img-pokeball" src="../assets/pkb/pokeball.png">
                    <div>
                        <span>{{started === true ? pokeball : "?" }}</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img @click="capture_greatball()" class="img-pokeball" src="../assets/pkb/greatball.png">
                    <div>
                        <span>{{started === true ? greatball : "?" }}</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img @click="capture_ultraball()" class="img-pokeball" src="../assets/pkb/ultraball.png">
                    <div>
                        <span>{{started === true ? ultraball : "?" }}</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img @click="capture_masterball()" class="img-pokeball" src="../assets/pkb/masterball.png">
                    <div>
                        <span>{{started === true ? masterball : "?" }}</span>
                    </div>
                </div>
            </v-col>
            <v-col cols="12" class="control-div" v-if="!started && !finished">
                <v-btn class="btn-size" @click="start()">Começar</v-btn>
            </v-col>
            <v-col cols="12" class="control-div" v-else-if="started && !finished">
                <v-btn class="btn-size" @click="nextRound()">Próximo</v-btn>
                <v-btn class="btn-size" @click="finish()">Finalizar</v-btn>
            </v-col>
            <v-col cols="12" class="control-div" v-else>
                <v-btn class="btn-size" @click="start()">Recomeçar</v-btn>
                <v-btn class="btn-size" to="/pokemons">Ver pokemons</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<style scoped>
/* esse é o style principal da tela de aventuras */
.container {
    height: 95%;
    width: 100%;
}
</style>

<style scoped>
/* adventure */

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
#round {
    position: absolute;
    left: 20px;
}
#container_pkm {
    display: flex;
    position: relative;
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
.pkm_size {
    height: 250px;
    width: auto;
    margin: 50px;
}
.background-pkm {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    background-color: white;
    height: 80%;
    width: 50%;
    background-image: url("../assets/pkmground.png");
    background-size: 100% 100%;
    border-radius: 50px;
}

</style>

<style scoped>
/* parte das pokebolas */
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
.img-pokeball:hover {
    cursor: pointer;
}
.img-pokeball:active {
  height: 80%;
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
.btn-size {
    width: 150px;
    height: 50px;
    font-size:medium;
}
</style>

<style scoped>
/* esses são os media breakpoints */
@media (min-width: 500px) and (max-width: 768px){
    #alerts {
        font-size: 15px;
    }

    @media (min-width: 500px) and (max-width: 600px) {
        .alert {
            position: absolute;
            right: 25px;
        }
    }

    #main_pkm {
        width: 90%;
        height: 50%;
    }
    .background-pkm {
        height: 60%;
        width: 90%;
    }
    .pkm_size {
        height: 150px;
    }
    .img-pokeball {
        height: 40%;
    }
    .img-pokeball:active {
    height: 45%;
    }
    .control-div {
        height: 30%;
    }
    .btn-size {
        width: 120px;
        height: 45px;
        font-size: 12px;
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
    .background-pkm {
        height: 50%;
        width: 60%;
    }
    .pkm_size {
        height: 130px
    }
    @media (min-width: 950px) and (max-width: 1024px){
        #main_pkm {
            width: 85%;
            height: 75%;
        }
        .background-pkm {
            height: 60%;
            width: 50%;
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
    .background-pkm {
        height: 60%;
        width: 50%;
    }
    .pkm_size {
        height: 150px
    }
    .img-pokeball {
        height: 50%;
    }
    .control-div {
        height: 30%;
    }
}
</style>