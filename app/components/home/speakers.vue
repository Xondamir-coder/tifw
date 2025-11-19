<template>
  <section class="speakers">
    <UiPicture src="speakers-gradient.jpg" class="speakers__bg" />
    <div class="section-header">
      <h2 class="heading-lg clr-white">
        <span class="clr-blue-dark">{{ $t('home.speakers.title') }}</span>
      </h2>
      <p class="speakers__description section-subtitle">
        <span class="clr-blue-dark">{{ $t('home.speakers.description') }}</span>
      </p>
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
          <UiSpeakerCard :speaker class="speakers__slide-item" />
        </swiper-slide>
      </swiper-container>

      <UiSliderControls :swiper="swiperRef?.swiper ?? {}" />
    </ClientOnly>
  </section>
</template>

<script setup>
const swiperRef = ref();
const { speakers } = useApiStore();
const { $gsap } = useNuxtApp();

onMounted(() => {
  nextTick(() => {
    $gsap.fromTo(
      '.speaker-card__image .my-picture__image',
      {
        clipPath: 'inset(0 0 100% 0)'
      },
      {
        clipPath: 'inset(0 0 0% 0)',
        scrollTrigger: getDefaultScrollTrigger('.speaker-card__image')
      }
    );
  });
});
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
  &__bg {
    position: absolute;
    left: -10%;
    bottom: -15%;
    width: 161%;
    mix-blend-mode: screen;
  }
  &__header {
    text-align: center;
  }

  &__slide {
    display: flex;
    &-item {
      --heading-color: #fff;
    }
  }
  &__description {
    opacity: 0.78;
  }
}
</style>
