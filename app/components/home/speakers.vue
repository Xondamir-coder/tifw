<template>
  <section class="speakers">
    <div class="section-header">
      <h2 class="heading-lg clr-white">{{ $t('home.speakers.title') }}</h2>
      <p class="speakers__description section-subtitle">{{ $t('home.speakers.description') }}</p>
    </div>
    <ClientOnly>
      <swiper-container
        ref="swiperRef"
        class="speakers__grid"
        :breakpoints="{
          0: {
            spaceBetween: 12,
            slidesPerView: 1.2
          },
          512: {
            spaceBetween: 22,
            slidesPerView: 2.2
          },
          1024: {
            spaceBetween: 32,
            slidesPerView: 4.2
          }
        }"
      >
        <swiper-slide v-for="(speaker, i) in speakers" :key="i" class="speakers__slide">
          <UiSpeakerCard :speaker />
        </swiper-slide>
      </swiper-container>

      <UiSliderControls :swiper="swiperRef?.swiper ?? {}" />
    </ClientOnly>
  </section>
</template>

<script setup>
const swiperRef = ref();
const { speakers } = useApiStore();
</script>

<style lang="scss" scoped>
.speakers {
  color: #fff;
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: max(6rem, 24px);
  margin-bottom: max(9rem, 56px);
  position: relative;
  &::after,
  &::before {
    content: '';
    position: absolute;
    @media screen and (max-width: vars.$bp-lg) {
      display: none;
    }
  }
  &::after {
    width: 1px;
    height: 150%;
    opacity: 0.5;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.25) 80%,
      rgba(255, 255, 255, 0) 100%
    );
    right: 90px;
    top: -30%;
  }
  &::before {
    left: 26%;
    bottom: 24px;
    height: 1px;
    width: 110%;
    opacity: 0.5;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.25) 80%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  &__header {
    text-align: center;
  }

  &__slide {
    display: flex;
  }
  &__description {
    opacity: 0.78;
  }
}
</style>
