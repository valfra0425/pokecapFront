<script setup lang="ts">
</script>

<template>
    <div class="container">
        <div id="adventure">
            <h1>aqui fica a tela de cima da adventure</h1>
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
</style>