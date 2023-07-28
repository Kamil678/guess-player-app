<template>
  <ul class="description-player">
    <li class="hint1">{{ drawedPlayer.hint1 }}</li>
    <li class="hint2">{{ drawedPlayer.hint2 }}</li>
    <li class="hint3">{{ drawedPlayer.hint3 }}</li>
  </ul>
</template>

<script setup>
import { dataToGame } from '../js/helper'
import { ref } from 'vue'

const props = defineProps(['drawedPlayer'])
</script>

<style scoped lang="scss">
.description-player {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 5px 0;
  margin: 20px 0;
  text-align: left;

  li {
    font-size: 18px;
    color: $lightCyan;
    letter-spacing: 0;
  }
}
</style>
