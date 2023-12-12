<script setup lang="ts">
</script>

<template>
    <v-row class="container">
        <v-col cols="4" md="3" lg="2" xl="2" class="bara-lateral">
            <router-link to="/">
                <div class="div-lateral">
                    <span>Pokedex</span>
                    <div class="icon">
                        <img src="../assets/3186870_game_pokedex_video_icon.png">
                    </div>
                </div>
            </router-link>
            <router-link to="/adventure">
                <div class="div-lateral">
                    <span>Aventura</span>
                    <div class="icon">
                        <img src="../assets/4205332_eco_ecology_grass_nature_organic_icon.png">
                    </div>
                </div>
            </router-link>
            <router-link to="/about">
                <div class="div-lateral">
                    <span>Pokémons</span>
                    <div class="icon">
                        <img src="../assets/1563649_pokeball_pokebola_pokemon_pokemongo_icon.png">
                    </div>
                </div>
            </router-link>
        </v-col>
        <v-col class="content">
            <div class="bar">
                <span>Treinador: A</span>
                <span>Nº de pokémons: 0</span>
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
    border-style:solid;
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
    background-image: url(../assets/pikachu.jpg);
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

@media (min-width: 500px) and (max-width: 768px){
.bara-lateral {
    padding: 10% 0px 0px 0px;
}
.div-lateral {
    padding: 5px;
    height: 80px;
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
    background-image: url(../assets/pikachu-veertical.jpg);
    background-position: center;
}
}
@media (min-width: 600px) and (max-width: 768px){
.div-lateral {
    font-size: 24px;
}
}
@media (min-width: 769px) and (max-width: 1024px){
.div-lateral {
    height: 80px;
    font-size: 26px;
}
.content {
    background-image: url(../assets/pikachu-veertical.jpg);
    background-position: center;
}
}
@media (min-width: 950px) and (max-width: 1024px){
.content {
    background-image: url(../assets/pikachu.jpg);
    background-position: bottom right;
}
}
</style>
