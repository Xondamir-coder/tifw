<template>
  <div class="speakers">
    <UiCurvedContainer
      class="speakers__container"
      :title="$t('speakers.title')"
      :text="$t('speakers.text')"
    >
      <div class="list">
        <UiSpeakerCard
          v-for="(speaker, index) in speakers"
          :key="index"
          :speaker
          class="list__card"
        />
      </div>
    </UiCurvedContainer>
    <div class="banner-container">
      <div class="banner">
        <svg
          class="banner__bg banner__bg--small"
          viewBox="0 0 343 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M343 39C343 30.1634 335.837 23 327 23L191.686 23C187.719 23 183.892 21.5257 180.95 18.8635L164.676 4.13646C161.734 1.47423 157.908 -1.38048e-05 153.941 -1.34579e-05L15.9999 -1.39876e-06C7.16339 -6.26248e-07 -4.74563e-05 7.16345 -4.66838e-05 16L-1.39876e-06 534C-6.26247e-07 542.837 7.16344 550 16 550L327 550C335.837 550 343 542.837 343 534L343 39Z"
            fill="white"
          />
        </svg>
        <svg
          class="banner__bg banner__bg--big"
          viewBox="0 0 1300 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M819.546 0C827.354 0 834.675 3.79881 839.17 10.1837L849.472 24.8163C853.967 31.2012 861.287 35 869.096 35H1276C1289.25 35 1300 45.7452 1300 59V296C1300 309.255 1289.25 320 1276 320H24C10.7451 320 0 309.255 0 296V24C0 10.7452 10.7452 0 24 0H819.546Z"
            fill="white"
          />
        </svg>

        <div class="banner__box">
          <div class="banner__info">
            <h5 class="banner__info-name">{{ $t('speakers.banner.name') }}</h5>
            <p class="text-sm">{{ $t('speakers.banner.role') }}</p>
          </div>
          <UiPicture src="aleksei.jpg" alt="aleksei" class="banner__picture" />
        </div>
        <div class="banner__content">
          <h3 class="banner__title">{{ $t('speakers.banner.title') }}</h3>
          <p class="banner__text">
            {{ $t('speakers.banner.text') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { speakers } = useApiStore();
</script>

<style lang="scss" scoped>
.speakers {
  &__container {
    background-color: #fff;
  }
}
.banner {
  position: relative;
  overflow: hidden;
  border-radius: max(2.4rem, 16px);
  padding: max(3.6rem, 16px);
  display: grid;
  grid-template-columns: 2.5fr 4.1fr;
  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
    gap: 36px;
    padding-top: 47px;
    padding-bottom: 0;
    padding-inline: 0;
  }
  &-container {
    padding-inline: var(--spacing-inline);
    padding-top: max(9rem, 32px);
    background-color: vars.$clr-border;
    padding-bottom: max(6rem, 20px);
    @media screen and (max-width: vars.$bp-md) {
      padding-top: max(4rem, 32px);
    }
  }
  &__box {
    position: relative;
    @media screen and (max-width: vars.$bp-md) {
      display: grid;
      & > * {
        grid-area: 1/1/2/2;
      }
    }
  }
  &__picture {
    width: 100%;
    pointer-events: none;
    @media screen and (min-width: vars.$bp-md) {
      translate: 0 20%;
      position: absolute;
      right: 0;
      bottom: 0;
    }
  }
  & > *:not(.banner__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset: 0;
    pointer-events: none;
    &--big {
      @media screen and (max-width: vars.$bp-md) {
        display: none;
      }
    }
    &--small {
      @media screen and (min-width: vars.$bp-md) {
        display: none;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 10px);
    padding-top: 3.6rem;
    padding-right: 1.9rem;
    @media screen and (max-width: vars.$bp-md) {
      padding-top: 0;
      padding-right: 0;
      order: -1;
      padding-inline: 16px;
    }
    p {
      line-height: 1.35;
    }
  }
  &__text {
    @include mix.text-lg(14px);
  }
  &__title {
    @include mix.heading-ml(20px);
    color: vars.$clr-text-primary;
  }
  &__info {
    max-width: max(17rem, 170px);
    display: flex;
    flex-direction: column;
    gap: max(0.8rem, 4px);
    @media screen and (max-width: vars.$bp-md) {
      padding-inline: 16px;
    }
    &-name {
      font-size: max(2.4rem, 18px);
      letter-spacing: -1.3px;
      color: vars.$clr-text-primary;
    }
  }
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(30rem, 200px), 1fr));
  column-gap: max(2.4rem, 16px);
  row-gap: max(3.2rem, 20px);
  &__card {
    --heading-color: #{vars.$clr-text-primary};
  }
}
</style>
