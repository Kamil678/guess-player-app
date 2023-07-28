<template>
  <input
    class="input-primary"
    type="text"
    :value="valueInput"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Wpisz imię i nazwisko piłkarza"
  />
</template>

<script setup>
defineProps(['valueInput'])
defineEmits(['update:modelValue'])
</script>

<style lang="scss">
.input-primary {
  width: 250px;
  height: 50px;
  background-color: transparent;
  color: $lightCyan;
  border-radius: 10px;
  border: 2px solid $lightCyan;
  padding: 10px 15px;
  font-size: 20px;
  text-align: center;

  @media (min-width: 576px) {
    width: 450px;
  }

  @media (min-width: 1024px) {
    width: 500px;
  }
}
</style>
