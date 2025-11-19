<template>
  <component
    :is="link ? NuxtLink : 'button'"
    :to="link ? $localePath(link) : undefined"
    class="button"
    @click="$emit('assignData')"
  >
    <span>{{ label }}</span>
    <component :is="icon" class="button__icon" />
  </component>
</template>

<script setup>
import { IconsArrowUpRight, NuxtLink } from '#components';

defineProps({
  label: {
    required: true,
    type: String
  },
  icon: {
    type: Object,
    default: IconsArrowUpRight,
    required: false
  },
  link: {
    type: String,
    default: '',
    required: false
  }
});
defineEmits(['assignData']);
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  gap: 8px;
  background: vars.$clr-accent-hover;
  color: #fff;
  transition: all 0.4s;
  padding-block: max(1.4rem, 12px);
  padding-inline: max(2.4rem, 16px);
  fill: #fff;
  stroke: none;
  position: relative;
  z-index: 1;

  &:hover {
    background-color: vars.$clr-accent-strong;
    .button__icon {
      translate: 3px -3px;
    }
  }
  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 100%;
    background-color: inherit;
    bottom: 0;
  }
  &::after {
    right: 0;
    translate: 95%;
    clip-path: polygon(0 -2%, 100% 14%, 100% 100%, 0% 100%);
  }
  &::before {
    left: 0;
    translate: -95%;
    clip-path: polygon(0 -2%, 100% 0, 100% 100%, 0 86%);
  }
  &__blobs {
    position: absolute;
    inset: 0;
    z-index: -1;
    overflow: hidden;
  }
  &__blob {
    position: absolute;
    width: 25%;
    height: 100%;
    border-radius: 50%;
    background-color: vars.$clr-accent-primary;
    transition: translate 0.45s;
    translate: 0 130%;
    scale: 1.5;
    top: 0;
    @for $i from 1 through 4 {
      &:nth-child(#{$i}) {
        left: ($i - 1) * 25%;
        transition-delay: 0.08s * ($i - 1);
      }
    }
  }
  &__icon {
    width: max(2.4rem, 20px);
    transition: all 0.4s;
  }
}
</style>
