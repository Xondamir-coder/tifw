<template>
  <section class="about">
    <div class="section-header">
      <h2 class="heading-lg clr-white">
        {{ $t('nav.about') }}
      </h2>
      <p class="section-subtitle clr-white">{{ description }}</p>
    </div>
    <UiLogoSlider :logos />
  </section>
</template>

<script setup>
import { SvgCoreOs, SvgEightBall, SvgEnnLabs, SvgGlobalBank, SvgLuminary } from '#components';

const logos = [
  SvgCoreOs,
  SvgEightBall,
  SvgEnnLabs,
  SvgGlobalBank,
  SvgLuminary,
  SvgCoreOs,
  SvgEightBall,
  SvgEnnLabs,
  SvgGlobalBank,
  SvgLuminary,
  SvgCoreOs,
  SvgEightBall,
  SvgEnnLabs,
  SvgGlobalBank,
  SvgLuminary
];

defineProps({
  description: {
    required: true,
    type: String
  }
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  flex-direction: column;
  gap: max(6rem, 36px);
  .section-header {
    padding-inline: var(--spacing-inline);
  }
}
</style>
