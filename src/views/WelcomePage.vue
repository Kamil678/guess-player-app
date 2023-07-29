<template>
  <div class="welcome">
    <h1 class="welcome-text">Witaj w grze <span class="neon-color">zgadnij piłkarza</span></h1>
    <WelcomeSlider />
    <ButtonComponent text-btn="Zaczynam grę" @clickBtn="clickStartGame" />
  </div>
</template>

<script setup>
import WelcomeSlider from '../components/WelcomeSlider.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const clickStartGame = () => {
  router.push('/game')
}
</script>

<style scoped lang="scss">
body {
  background: $background;
}

.welcome {
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  margin: 50px 20px;
}

h1.welcome-text {
  color: $lightCyan;
  font-size: 48px;

  .neon-color {
    color: $neonGreen;
  }
}
</style>
