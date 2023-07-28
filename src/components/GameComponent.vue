<template>
  <div class="game-modal">
    <div class="game-form">
      <div class="game-picture">
        <img src="../assets//images/which-player.webp" />
      </div>
      <DescriptionPlayer :idPlayer="idPlayer" />
    </div>
    <div class="game-ball">
      <IconComponent />
    </div>
  </div>
</template>

<script setup>
import IconComponent from '../components/IconComponent.vue'
import DescriptionPlayer from './DescriptionPlayer.vue'

const props = defineProps(['idPlayer'])
console.log(props.idPlayer)
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

  .game-ball {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: $neonGreen;
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
