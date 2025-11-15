<template>
  <button v-if="!link" class="button" @click="$emit('click')">
    <span>{{ label }}</span>
    <component :is="icon" class="button__icon" />
    <div class="button__blobs">
      <span class="button__blob" />
      <span class="button__blob" />
      <span class="button__blob" />
      <span class="button__blob" />
    </div>
  </button>
  <NuxtLink v-else :to="link" class="button" @click="$emit('click')">
    <span>{{ label }}</span>
    <component :is="icon" class="button__icon" />
    <div class="button__blobs">
      <span class="button__blob" />
      <span class="button__blob" />
      <span class="button__blob" />
      <span class="button__blob" />
    </div>
  </NuxtLink>
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
  },
  link: {
    type: String,
    default: '',
    required: false
  }
});
defineEmits(['click']);
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  gap: 8px;
  background: vars.$clr-accent-strong;
  color: #fff;
  border-radius: max(0.8rem, 8px);
  transition: all 0.4s;
  padding-block: max(1.4rem, 12px);
  padding-inline: max(2.4rem, 16px);
  fill: none;
  stroke: #fff;
  position: relative;
  overflow: hidden;
  z-index: 1;
  &:hover {
    background-color: transparent;
    transition-delay: 0.5s;
    .button__blob {
      translate: none;
    }
    .button__icon {
      translate: 5px;
      scale: 0.8;
    }
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
