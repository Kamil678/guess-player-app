<template>
  <div class="game-modal">
    <div class="game-form">
      <div class="game-picture">
        <img src="../assets//images//which-player.webp" />
      </div>
    </div>
    <div class="game-ball">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
        <!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M417.3 360.1l-71.6-4.8c-5.2-.3-10.3 1.1-14.5 4.2s-7.2 7.4-8.4 12.5l-17.6 69.6C289.5 445.8 273 448 256 448s-33.5-2.2-49.2-6.4L189.2 372c-1.3-5-4.3-9.4-8.4-12.5s-9.3-4.5-14.5-4.2l-71.6 4.8c-17.6-27.2-28.5-59.2-30.4-93.6L125 228.3c4.4-2.8 7.6-7 9.2-11.9s1.4-10.2-.5-15l-26.7-66.6C128 109.2 155.3 89 186.7 76.9l55.2 46c4 3.3 9 5.1 14.1 5.1s10.2-1.8 14.1-5.1l55.2-46c31.3 12.1 58.7 32.3 79.6 57.9l-26.7 66.6c-1.9 4.8-2.1 10.1-.5 15s4.9 9.1 9.2 11.9l60.7 38.2c-1.9 34.4-12.8 66.4-30.4 93.6zM256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zm14.1-325.7c-8.4-6.1-19.8-6.1-28.2 0L194 221c-8.4 6.1-11.9 16.9-8.7 26.8l18.3 56.3c3.2 9.9 12.4 16.6 22.8 16.6h59.2c10.4 0 19.6-6.7 22.8-16.6l18.3-56.3c3.2-9.9-.3-20.7-8.7-26.8l-47.9-34.8z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.game-modal {
  margin: 50px auto;
  border-radius: 10px;
  background-color: $backgroundCard;
  width: 800px;
  min-width: 800px;
  //height: 500px;
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

    svg {
      width: 40px;
      height: 40px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>
