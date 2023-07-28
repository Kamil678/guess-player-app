<template>
  <div class="game-modal">
    <div class="game-form">
      <div class="game-picture">
        <img src="../assets//images/which-player.webp" />
      </div>
      <DescriptionPlayer :drawedPlayer="drawedPlayer" />
    </div>
    <IconComponent />
  </div>
</template>

<script setup>
import IconComponent from '../components/IconComponent.vue'
import DescriptionPlayer from './DescriptionPlayer.vue'

const props = defineProps(['drawedPlayer'])
</script>

<style scoped lang="scss">
.game-modal {
  margin: 50px auto;
  border-radius: 10px;
  background-color: $backgroundCard;
  width: 800px;
  min-width: 800px;
  position: relative;
  padding: 30px;

  .game-picture {
    width: 200px;
    height: auto;
    margin: 0 auto;

    img {
      width: 100%;
      border-radius: 10px;
    }
  }
}
</style>
