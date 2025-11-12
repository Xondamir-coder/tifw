<template>
  <ul class="logo-slider">
    <li v-for="(logo, index) in logos" :key="index" class="logo-slider__item">
      <component :is="logo" class="logo-slider__logo" />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  logos: {
    required: true,
    type: Array
  }
});
</script>

<style scoped lang="scss">
.logo-slider {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 150px;
  grid-auto-rows: 150px;
  scrollbar-width: 0;
  gap: max(1.6rem, 12px);
  &::-webkit-scrollbar {
    display: none;
  }
  &__item {
    @include mix.flex-center;
    background: #fff;
    border-radius: max(1.6rem, 16px);
    padding-inline: 22px;
    fill: vars.$clr-green-dark;
  }
}
</style>
