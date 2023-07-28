<template>
  <div class="description-player">
    <p class="hint1">{{ currentPlayer.hint1 }}</p>
    <p class="hint2">{{ currentPlayer.hint2 }}</p>
    <p class="hint3">{{ currentPlayer.hint3 }}</p>
  </div>
</template>

<script setup>
import { dataToGame } from '../js/helper'
import { ref } from 'vue'

const props = defineProps(['idPlayer'])

let currentPlayer = ref(dataToGame.find((player) => player.id === props.idPlayer))
</script>

<style scoped lang="scss">
.description-player {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px 0;
  margin: 20px 0;

  p {
    font-size: 18px;
    color: $lightCyan;
    letter-spacing: 0;
  }
}
</style>
