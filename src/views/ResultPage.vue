<template>
  <div class="answer">
    <h2 v-if="router.currentRoute.value.query.correctAnswer == 'true'" class="correct-answer">
      Gratulacje! {{ router.currentRoute.value.query.correctAnswer }}
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
    <ButtonComponent text-btn="Powrót do strony głównej" @clickBtn="clickBackBtn" />
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

console.log(router.currentRoute.value.query.correctAnswer)

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
  width: 800px;
  min-width: 800px;
  position: relative;
  padding: 30px;

  .player-photo {
    width: 300px;
    height: auto;
    margin: 0 auto;

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
  width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    margin-top: 20px;
  }
}
</style>
