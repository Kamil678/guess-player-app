<template>
  <div class="answer">
    <h2 v-if="router.currentRoute.value.query.correctAnswer == 'true'" class="correct-answer">
      Gratulacje!
    </h2>
    <h2 v-else class="incorrect-answer">Niestety nie zgadłeś</h2>
    <p>
      Piłkarzem do odgadniecia był: <span>{{ playerToGuess.name }}</span>
    </p>
  </div>
  <div class="result-page">
    <div>
      <div class="player-photo">
        <img :src="playerToGuess.img" :alt="playerToGuess.name" />
      </div>
      <div class="info-player">
        <p>Wiek: {{ playerToGuess.age }} lat</p>
        <p>Pozycja: {{ playerToGuess.position }}</p>
        <p>Klub: {{ playerToGuess.club }}</p>
      </div>
    </div>
    <IconComponent />
  </div>
  <div class="action">
    <ButtonComponent text-btn="Powrót" @clickBtn="clickBackBtn" />
    <ButtonComponent text-btn="Następny piłkarz" @clickBtn="clickNextPlayer" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { dataToGame } from '../js/helper'
import IconComponent from '../components/IconComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'

const router = useRouter()

let playerToGuess = ref(
  dataToGame.find((player) => player.id == router.currentRoute.value.query.idPlayer)
)

const clickBackBtn = () => {
  router.push('/')
}

const clickNextPlayer = () => {
  router.push('/game')
}
</script>

<style scoped lang="scss">
body {
  background: $background;
}

.answer {
  margin-top: 30px;
  text-align: center;
  h2 {
    font-size: 42px;
    font-weight: 600;

    &.correct-answer {
      color: $neonGreen;
    }

    &.incorrect-answer {
      color: red;
    }
  }

  p {
    margin-top: 10px;
    font-size: 22px;
    color: $lightCyan;

    span {
      font-weight: 600;
    }
  }
}

.result-page {
  margin: 30px auto;
  border-radius: 10px;
  background-color: $backgroundCard;
  width: 300px;
  min-width: 300px;
  position: relative;
  padding: 30px;

  @media (min-width: 576px) {
    width: 500px;
    min-width: 500px;
  }

  @media (min-width: 1024px) {
    width: 800px;
    min-width: 800px;
  }

  .player-photo {
    width: 250px;
    height: auto;
    margin: 0 auto;

    @media (min-width: 1024px) {
      width: 300px;
    }

    img {
      width: 100%;
      border-radius: 10px;
    }
  }

  .info-player {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px 0;
    margin: 20px 0;

    p {
      font-size: 16px;
      color: $lightCyan;
    }
  }
}

.action {
  width: 300px;
  margin: 40px auto 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 1024px) {
    width: 800px;
    flex-direction: row;
    margin: 30px auto;
  }

  button {
    margin-top: 20px;
  }
}
</style>
