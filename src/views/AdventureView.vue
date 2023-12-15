<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div id="adventure">
            <div id="alerts">
                <h1>Comece a sua aventura pokémon!</h1>
            </div>
            <div id="container_pkm">
                <div id="main_pkm">
                    <img class="img_pkm" src="../assets/adventure.png">
                </div>
            </div>
        </div>
        <div id="div-pokeballs">
            <div id="pokeballs">
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/pokeball.png">
                    <div>
                        <span>?</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/greatball.png">
                    <div>
                        <span>?</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/ultraball.png">
                    <div>
                        <span>?</span>
                    </div>
                </div>
                <div class="pokeball">
                    <img class="img-pokeball" src="../assets/pkb/masterball.png">
                    <div>
                        <span>?</span>
                    </div>
                </div>
            </div>
            <div id="control-div">
                <v-btn size="x-large">Start</v-btn>
            </div>
        </div>
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
#control-div {
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
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
#control-div {
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
#control-div {
    height: 30%;
}
}
</style>