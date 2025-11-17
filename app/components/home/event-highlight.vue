<template>
  <section class="event-highlight">
    <div class="event-highlight__header section-header">
      <h2 class="heading-lg clr-white">
        <span class="clr-blue-dark">{{ $t('home.event.title') }}</span>
      </h2>
      <p class="event-highlight__description text-md">
        <span class="clr-blue-dark">{{ $t('home.event.description') }}</span>
      </p>
    </div>
    <div class="event-highlight__container">
      <ClientOnly>
        <swiper-container
          ref="swiperRef"
          class="event-highlight__slider"
          space-between="16"
          :grab-cursor="true"
          :free-mode="true"
          :breakpoints="{
            0: {
              spaceBetween: 10,
              slidesPerView: 1.1
            },
            512: {
              slidesPerView: 1.5
            },
            1024: {
              slidesPerView: 2.5
            }
          }"
        >
          <swiper-slide v-for="(image, i) in images" :key="i" class="event-highlight__slide">
            <UiPicture :src="image" :alt="`Event image ${i + 1}`" />
          </swiper-slide>
        </swiper-container>
        <UiSliderControls :swiper="swiperRef?.swiper ?? {}" />
      </ClientOnly>
    </div>
  </section>
</template>

<script setup>
const { $gsap } = useNuxtApp();
const images = [
  'home-event-1.jpg',
  'home-event-2.jpg',
  'home-event-3.jpg',
  'home-event-1.jpg',
  'home-event-2.jpg',
  'home-event-3.jpg'
];

const swiperRef = ref();

onMounted(() => {
  $gsap.from('.event-highlight__container', {
    y: 50,
    opacity: 0,
    scrollTrigger: {
      trigger: '.event-highlight__container',
      start: 'top 90%',
      end: 'bottom 70%'
    }
  });
});
</script>

<style lang="scss" scoped>
.event-highlight {
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: max(6rem, 24px);
  margin-block: vars.$spacing-block;
  position: relative;
  overflow: hidden;
  &__container {
    display: flex;
    flex-direction: column;
    gap: max(6rem, 24px);
  }
  &::after {
    content: '';
    opacity: 0.5;
    position: absolute;
    left: 26%;
    top: 32px;
    width: 110%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.25) 25%,
      rgba(255, 255, 255, 0.5) 50%,
      rgba(255, 255, 255, 0.25) 80%,
      rgba(255, 255, 255, 0) 100%
    );
    height: 1px;
    @media screen and (max-width: vars.$bp-lg) {
      display: none;
    }
  }
  &__header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-inline: var(--spacing-inline);
  }
  &__description {
    opacity: 0.78;
  }
  &__slide {
    border-radius: max(1.6rem, 12px);
    overflow: hidden;
    aspect-ratio: 685/457;
    display: flex;
    @media screen and (max-width: vars.$bp-md) {
      aspect-ratio: 343/380;
    }
  }
}
</style>
