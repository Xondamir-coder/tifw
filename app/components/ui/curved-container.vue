<template>
  <div class="curved-container">
    <div v-if="title && text" class="section-header">
      <h1 class="heading-lg">
        {{ title }}
      </h1>
      <p class="section-subtitle">
        {{ text }}
      </p>
    </div>
    <slot />
  </div>
</template>

<script setup>
import { SplitText } from 'gsap/SplitText';

const { $gsap } = useNuxtApp();
defineProps({
  title: {
    default: '',
    type: String
  },
  text: {
    default: '',
    type: String
  }
});
onMounted(() => {
  if (!document.querySelector('.section-header')) return;
  const titleSplit = SplitText.create('.section-header h1', {
    mask: 'chars',
    type: 'chars'
  });
  const textSplit = SplitText.create('.section-header p', {
    mask: 'lines',
    type: 'lines'
  });
  $gsap.set('.section-header>*', {
    opacity: 1
  });
  $gsap.from(titleSplit.chars, {
    xPercent: -100,
    yPercent: 20,
    stagger: 0.05
  });
  $gsap.from(textSplit.lines, {
    yPercent: 100,
    stagger: 0.1
  });
});
</script>

<style lang="scss" scoped>
.curved-container {
  padding-inline: var(--spacing-inline);
  padding-block: max(6rem, 20px);
  background-color: vars.$clr-border;
  border-top-left-radius: max(3.2rem, 20px);
  border-top-right-radius: max(3.2rem, 20px);
  display: flex;
  flex-direction: column;
  gap: max(6rem, 32px);
  .section-header > * {
    opacity: 0;
  }
}
</style>
