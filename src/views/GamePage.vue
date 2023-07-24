<template>
  <div class="game-page">
    <GameComponent />
  </div>
</template>

<script setup>
import GameComponent from '../components/GameComponent.vue'
</script>

<style scoped lang="scss">
.game-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
</style>
