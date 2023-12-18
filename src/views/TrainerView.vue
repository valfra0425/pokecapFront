<script setup lang="ts">

</script>

<template>
    <div class="content-container">
        <h2>Escolha seu personagem</h2>
        <div class="trainers-container">
            <div class="trainer-box">
                <img src="../assets/trainer_1.png" alt="Trainer number one">
            </div>
            <div class="trainer-box">
                <img src="../assets/trainer_2.png" alt="Trainer number one">
            </div>
            <div class="trainer-box">
                <img src="../assets/trainer_3.png" alt="Trainer number one">
            </div>
            <div class="trainer-box">
                <img src="../assets/trainer_4.png" alt="Trainer number one">
            </div>
        </div>
        <div class="trainer-name">
            <v-text-field clearable label="Seu nome de treinador" variant="solo"></v-text-field>
            <v-btn class="start-btn" size="large">Start</v-btn>
        </div>
    </div>
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

.trainer-box > img {
    width: 160px;
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
</style>