<template>
  <section class="participants">
    <div class="section-header">
      <h2 class="participants__title heading-lg">
        {{ $t('home.participants.title') }}
      </h2>
      <p class="section-subtitle">
        {{ $t('home.participants.description') }}
      </p>
    </div>

    <div class="participants__list">
      <div v-for="(row, i) in rows" :key="i" class="participants__grid">
        <div v-for="(logo, y) in row" :key="y" class="participants__logo-card">
          <component :is="logo" class="participants__logo" />
        </div>
      </div>
    </div>

    <button class="participants__button">
      {{ $t('see-all') }}
    </button>
  </section>
</template>

<script setup>
import { SvgCoreOs, SvgEightBall, SvgEnnLabs, SvgGlobalBank, SvgLuminary } from '#components';

const logos = [SvgCoreOs, SvgEightBall, SvgEnnLabs, SvgGlobalBank, SvgLuminary];
const rows = [
  [...logos, ...logos, ...logos, ...logos],
  [...logos, ...logos, ...logos, ...logos].reverse()
];
</script>

<style lang="scss" scoped>
.participants {
  background: linear-gradient(180deg, #da9b2f 0%, #98650d 100%);
  padding-top: max(4.2rem, 32px);
  padding-bottom: vars.$spacing-block;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: max(6rem, 24px);
  .section-header {
    padding-inline: var(--spacing-inline);
  }
  &::before {
    content: '';
    position: absolute;
    background: #da9b2f;
    left: 0;
    top: 0;
    width: max(49%, 328px);
    height: max(4.8rem, 24px);
    translate: 0 -95%;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  }

  &__title {
    color: #fff;
    & + * {
      color: #fff;
    }
  }
  &__list {
    display: flex;
    flex-direction: column;
    gap: max(2rem, 12px);
    overflow: hidden;
  }

  &__grid {
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 150px;
    grid-auto-rows: 150px;
    scrollbar-width: 0;
    gap: max(1.6rem, 12px);
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &__logo-card {
    @include mix.flex-center;
    background: #fff;
    border-radius: max(1.6rem, 16px);
    padding-inline: 22px;
    fill: vars.$clr-h;
  }

  &__button {
    align-self: center;
    min-width: 85.3%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    padding-block: 16px;
    font-weight: 600;
    font-size: 16px;
    color: #000;
    transition: all 0.4s;
    @media screen and (max-width: vars.$bp-md) {
      min-width: auto;
      margin-inline: var(--spacing-inline);
      align-self: stretch;
    }
    &:hover {
      background: #001e3c;
      color: #fff;
    }
  }
}
</style>
