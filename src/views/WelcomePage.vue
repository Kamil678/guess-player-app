<template>
  <div class="welcome">
    <h1 class="welcome-text">Witaj w grze <span class="neon-color">zgadnij jakim piłkarzem jestem</span></h1>
    <WelcomeSlider/>
  </div>
</template>

<script setup>
import WelcomeSlider from '../components/WelcomeSlider.vue'
</script>

<style scoped lang="scss">
body{
    background: $background;
}

.welcome{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

h1.welcome-text{
    color: $lightCyan;
    font-size: 48px;

    .neon-color{
        color: $neonGreen;
    }
}
</style>
