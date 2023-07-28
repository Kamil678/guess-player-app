<template>
  <button @click="$emit('clickBtn')" class="primary-btn">{{ textBtn }}</button>
</template>

<script setup>
const props = defineProps(['textBtn'])
</script>

<style lang="scss">
.primary-btn {
  background-color: $neonGreen;
  color: $background;
  padding: 10px 30px;
  border-radius: 10px;
  border: none;
  margin-top: 50px;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
}
</style>
