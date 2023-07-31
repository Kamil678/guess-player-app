<template>
  <div class="slider">
    <div class="slide" v-for="slide in dataToSlider" :key="slide.name">
      <img :src="slide.img" :alt="slide.name" />
    </div>
    <button @click="nextSlide" class="btn btn-next">></button>
    <button @click="prevSlide" class="btn btn-prev">&lt;</button>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
const dataToSlider = [
  {
    img: '~src/assets/images/Robert-Lewandowski.jpg',
    name: 'Robert Lewandowski'
  },
  {
    img: 'src/assets/images/Wojciech-Szczesny.jpg',
    name: 'Wojciech Szczęsny'
  },
  {
    img: 'src/assets/images/Piotr-Zieliński.jpg',
    name: 'Piotr Zieliński'
  },
  {
    img: 'src/assets/images/Arkadiusz-Milik.jpg',
    name: 'Arkadiusz Milik'
  }
]

let slides
let maxSlide

onMounted(() => {
  slides = document.querySelectorAll('.slide')
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${index * 100}%)`
  })
  maxSlide = slides.length - 1

  setInterval(() => {
    nextSlide()
  }, 5000)
})

let curSlide = 0
const nextSlide = (e) => {
  if (curSlide === maxSlide) {
    curSlide = 0
  } else {
    curSlide++
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`
  })
}

const prevSlide = (e) => {
  if (curSlide === 0) {
    curSlide = maxSlide
  } else {
    curSlide--
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(${100 * (index - curSlide)}%)`
  })
}
</script>

<style scoped lang="scss">
.slider {
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 300px;
  height: 200px;
  position: relative;
  overflow: hidden;
  margin: 50px 30px 0 30px;

  @media (min-width: 576px) {
    max-width: 500px;
    height: 300px;
  }

  @media (min-width: 1024px) {
    max-width: 600px;
    height: 350px;
  }

  .slide {
    width: 100%;
    max-width: 800px;
    position: absolute;
    transition: all 0.5s;
    text-align: center;

    img {
      height: auto;
      width: 100%;
      object-fit: contain;
    }
  }

  .btn {
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 10px;
    border: none;
    border-radius: 50%;
    z-index: 10px;
    cursor: pointer;
    background-color: $lightCyan;
    font-size: 18px;
    color: $background;
  }

  .btn:active,
  .btn:hover {
    background-color: $neonGreen;
    //color: $lightCyan;
  }

  .btn-next,
  .btn-prev {
    top: 50%;
    transform: translateY(-50%);
  }

  .btn-prev {
    left: 2%;
  }

  .btn-next {
    right: 2%;
  }
}
</style>
