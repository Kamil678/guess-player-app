<template>
  <div class="game-page">
    <GameComponent />
    <InputComponent :value-input="valueInput" />
    <div class="action">
      <ButtonComponent text-btn="Powrót" @clickBtn="clickBackBtn" />
      <ButtonComponent text-btn="Odpowiadam" @clickBtn="clickStartGame" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import GameComponent from '../components/GameComponent.vue'
import InputComponent from '../components/InputComponent.vue'
import ButtonComponent from '../components/ButtonComponent.vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const valueInput = ref('')

const clickBackBtn = () => {
  router.push('/')
}
</script>

<style scoped lang="scss">
.game-page {
  text-align: center;

  .action {
    width: 800px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
