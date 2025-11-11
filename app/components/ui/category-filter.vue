<template>
  <div class="category-filter">
    <button
      v-for="(item, index) in items"
      :key="index"
      class="category-filter__item"
      :class="{ 'category-filter__item--active': model === item.id }"
      @click="model = item.id"
    >
      {{ item.label }}
    </button>
  </div>
</template>

<script setup>
const model = defineModel({
  type: Number
});
defineProps({
  items: {
    type: Array,
    required: true
  }
});
</script>

<style lang="scss" scoped>
.category-filter {
  align-self: flex-start;
  display: grid;
  grid-template-columns: repeat(4, max(12rem, 100px));
  border-radius: 12px;
  background-color: #fff;
  padding: 4px;
  gap: 4px;
  @media screen and (max-width: vars.$bp-sm) {
    max-width: 100%;
    grid-template-columns: initial;
    grid-auto-columns: 100px;
    grid-auto-flow: column;
    overflow-x: auto;
    scrollbar-width: 0;
    scroll-snap-type: x mandatory;
    & > * {
      scroll-snap-align: start;
    }
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__item {
    padding-block: 8px;
    border-radius: 10px;
    transition: all 0.4s;

    &--active {
      background-color: vars.$clr-blue-light;
      color: #fff;
    }
  }
}
</style>
