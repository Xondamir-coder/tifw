<template>
  <section class="promo">
    <div v-for="(item, i) in $tm('home.promo.blocks')" :key="i" class="promo__block">
      <div class="promo__content">
        <h3 class="promo__title">{{ $rt(item.title) }}</h3>
        <NuxtLink :to="$localePath('/about')" class="promo__button">
          {{ $t('home.promo.button') }}
          <IconsArrowRight class="promo__icon" />
        </NuxtLink>
      </div>
      <UiPicture :src="`promo-${i + 1}.png`" :alt="$rt(item.title)" class="promo__image" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
.promo {
  display: grid;
  grid-template-columns: 1.06fr 1fr;
  aspect-ratio: 1440/664;
  @media screen and (max-width: vars.$bp-md) {
    aspect-ratio: initial;
    grid-template-columns: 1fr;
    grid-auto-rows: max(42rem, 420px);
  }

  &__block {
    position: relative;
    display: flex;
    align-items: flex-start;
    padding-block: max(10rem, 32px);
    overflow: hidden;
    color: #fff;
    @media screen and (max-width: vars.$bp-md) {
      padding-inline: max(15rem, 40px) !important;
    }
    &::before,
    &::after {
      content: '';
      position: absolute;
      left: 11%;
      @media screen and (max-width: vars.$bp-md) {
        left: 4.5%;
      }
    }
    &::before {
      height: 100%;
      top: 0;
      width: 1px;
      background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.3) 0%,
        rgba(255, 255, 255, 0.06) 100%
      );
    }
    &::after {
      top: 12%;
      width: 4px;
      height: 36%;
      translate: -40%;
      background-color: vars.$clr-i;
    }
    &:first-child {
      padding-inline: max(15rem, 40px);
      background-color: vars.$clr-j;
    }
    &:last-child {
      background-color: vars.$clr-k;
      padding-inline: max(10rem, 40px);

      &::before,
      &::after {
        @media screen and (min-width: vars.$bp-md) {
          display: none;
        }
      }
    }
  }

  &__content {
    position: relative;
    z-index: 2;
    max-width: 40ch;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: max(4rem, 24px);
  }

  &__title {
    font-size: max(5rem, 32px);
    font-family: vars.$font-prosto;
    line-height: 1;
    color: #fff;
  }

  &__button {
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 16px;
    gap: 8px;
    background: vars.$clr-i;
    color: #fff;
    border-radius: max(0.8rem, 8px);
    transition: all 0.4s;
    padding-block: 14px;
    padding-inline: 24px;

    &:hover {
      background: #fff;
    }
  }

  &__icon {
    width: 24px;
    height: 24px;
    fill: none;
    stroke: #fff;
  }

  &__image {
    position: absolute;
    bottom: 0;
    right: 0;
    translate: 20%;
    width: 70%;
    z-index: 1;
    pointer-events: none;
    @media screen and (max-width: vars.$bp-md) {
      min-width: 300px;
      right: 50%;
      translate: 50% 30%;
    }
  }
}
</style>
