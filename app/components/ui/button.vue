<template>
  <button class="button" @click="$emit('click')">
    <span>{{ label }}</span>
    <component :is="icon" class="button__icon" />
  </button>
</template>

<script setup>
import { IconsArrowRight } from '#components';

defineProps({
  label: {
    required: true,
    type: String
  },
  icon: {
    type: Object,
    default: IconsArrowRight,
    required: false
  }
});
defineEmits(['click']);
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  gap: 8px;
  background: vars.$clr-yellow;
  color: #fff;
  border-radius: max(0.8rem, 8px);
  transition: all 0.4s;
  padding-block: 14px;
  padding-inline: 24px;
  fill: none;
  stroke: #fff;
  &__icon {
    width: 24px;
  }
  &:hover {
    background: vars.$clr-accent-strong;
  }
}
</style>
