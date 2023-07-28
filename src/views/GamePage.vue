<template>
  <div class="game-page">
    <GameComponent :drawed-player="currentPlayer" />
    <InputComponent :value-input="valueInput" @update:model-value="updateInput" />
    <div class="action">
      <ButtonComponent text-btn="Powrót" @clickBtn="clickBackBtn" />
      <ButtonComponent text-btn="Odpowiadam" @clickBtn="clickAnswer" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameComponent from '../components/GameComponent.vue'
import InputComponent from '../components/InputComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useRouter } from 'vue-router'
import { dataToGame } from '../js/helper'

const router = useRouter()

let valueInput = ref('')
const updateInput = (val) => {
  valueInput.value = val
}

const clickBackBtn = () => {
  router.push('/')
}

const clickAnswer = () => {
  checkAnswer()
  router.push({
    path: '/result',
    query: { idPlayer: idPlayer.value, correctAnswer: correctAnswer }
  })
}

let idPlayer = ref(null)
const drawPlayer = () => {
  idPlayer.value = Math.floor(Math.random() * dataToGame.length)
}

drawPlayer()

let currentPlayer = ref(dataToGame.find((player) => player.id === idPlayer.value))

let correctAnswer
const checkAnswer = () => {
  if (valueInput.value.toLowerCase() === currentPlayer.value.name.toLowerCase()) {
    correctAnswer = true
  } else {
    correctAnswer = false
  }
}
</script>

<style scoped lang="scss">
.game-page {
  text-align: center;

  .action {
    width: 300px;
    margin: 20px auto 20px auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    button {
      margin-top: 20px;
    }

    @media (min-width: 1024px) {
      width: 800px;
      flex-direction: row;
      margin: 30px auto;
    }
  }
}
</style>
