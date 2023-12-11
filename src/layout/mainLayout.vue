<script setup lang="ts">
</script>

<template>
    <v-row class="container">
        <v-col sm="4" md="3" lg="2" class="bara-lateral">
            <a href="">
                <div class="div-lateral">
                    <span>Pokedex</span>
                    <div class="icon">
                        <img src="../assets/3186870_game_pokedex_video_icon.png">
                    </div>
                </div>
            </a>
            <a href="">
                <div class="div-lateral">
                    <span>Aventura</span>
                    <div class="icon">
                        <img src="../assets/4205332_eco_ecology_grass_nature_organic_icon.png">
                    </div>
                </div>
            </a>
            <a href="">
                <div class="div-lateral">
                    <span>Pokémons</span>
                    <div class="icon">
                        <img src="../assets/1563649_pokeball_pokebola_pokemon_pokemongo_icon.png">
                    </div>
                </div>
            </a>
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
    padding: 50px 0px 0px 0px;
    background-color: rgb(255, 0, 0);
}
.div-lateral {
    position: relative;
    display: flex;
    align-items: center;
    padding: 10px;
    background-color: rgb(255, 255, 255);
    color: #000;
    margin: 60px 0px;
    height: 100px;
    width: 95%;
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
    background-image: url(../assets/pikachu.jpg);
    background-size: cover;
    background-position: center;
}
.bar {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    color: #000000;
    height: 50px;
    
  }

@media (max-width: 425px) and (min-width: 768px){

}
</style>
