<template>
  <section class="hero">
    <div class="hero__top">
      <UiButton :label="$t('back')" class="hero__back" @click="$router.back()" />

      <h1 class="hero__title clr-inherit">
        <span v-for="word in speaker.name.split(' ')" :key="word">{{ word }}</span>
      </h1>
    </div>
    <div class="hero__bottom">
      <div class="hero__quote">
        <span class="hero__quote-label">{{ $t('quote') }}</span>
        <p class="hero__quote-text">
          {{ speaker.quote }}
        </p>
      </div>

      <div class="hero__stats">
        <div class="hero__stat">
          <h3 class="heading-ml clr-inherit">{{ speaker.partnersCount }}</h3>
          <p>{{ $t('speaker.hero.text-1') }}</p>
        </div>

        <div class="hero__stat">
          <h3 class="heading-ml clr-inherit">{{ speaker.experience }} {{ $t('years') }}</h3>
          <p>{{ $t('speaker.hero.text-1') }}</p>
        </div>
      </div>
    </div>

    <!-- <UiPicture :src="speaker.image" alt="Ahmadjon Rahmatjonov" class="hero__image" /> -->
    <UiPicture src="timur.png" alt="Ahmadjon Rahmatjonov" class="hero__image" />

    <UiPicture src="office.jpg" alt="Ahmadjon Rahmatjonov" class="hero__banner" />
  </section>
</template>

<script setup>
import { SplitText } from 'gsap/SplitText';

const { $gsap } = useNuxtApp();
defineProps({
  speaker: {
    required: true,
    type: Object
  }
});
onMounted(() => {
  $gsap.fromTo(
    '.hero__image',
    {
      scale: 1.1
    },
    {
      opacity: 1,
      scale: 1,
      duration: 1
    }
  );

  $gsap.set('.hero__title, .hero__stats, .hero__quote', { opacity: 1 });
  SplitText.create('.hero__title', {
    type: 'lines',
    mask: 'lines',
    onSplit: self => {
      $gsap.from(self.lines, {
        yPercent: 100,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.6
      });
    }
  });

  $gsap.from('.hero__quote', {
    y: 20,
    opacity: 0,
    duration: 0.6,
    delay: 1
  });
  $gsap.from('.hero__stats>*', {
    y: 20,
    opacity: 0,
    stagger: 0.15,
    duration: 0.6,
    delay: 1
  });
});
</script>

<style lang="scss" scoped>
.hero {
  position: relative;
  min-height: calc(100vh - max(7.2rem, 72px));
  color: #fff;
  background: linear-gradient(to bottom, rgba(0, 10, 25, 0.6), rgba(0, 10, 25, 0.9));
  overflow: hidden;
  border-top-left-radius: 3.2rem;
  border-top-right-radius: 3.2rem;
  display: flex;
  flex-direction: column;
  padding-inline: var(--spacing-inline);
  padding-top: max(3rem, 16px);
  padding-bottom: max(7.2rem, 36px);
  @media screen and (max-width: vars.$bp-md) {
    gap: 392px;
    background: vars.$clr-dark-primary;
  }
  &__quote,
  &__stats,
  &__title {
    opacity: 0;
  }
  &__top {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: max(9rem, 60px);
    z-index: 1;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 36px;
    z-index: 3;
    @media screen and (max-width: vars.$bp-md) {
      flex-direction: column;
      align-items: stretch;
    }
  }
  &::after {
    content: '';
    z-index: 3;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 55%;
    width: 100%;
    background: linear-gradient(180deg, rgba(2, 15, 30, 0) 0%, #020f1e 100%);
    z-index: 2;
    @media screen and (max-width: vars.$bp-md) {
      bottom: 20%;
      background: linear-gradient(180deg, rgba(2, 15, 30, 0) 0%, #020f1e 66.11%, #020f1e 100%);
    }
  }
  &__banner {
    position: absolute;
    inset: 0;
    filter: blur(10px);
    @media screen and (max-width: vars.$bp-md) {
      max-height: 74%;
    }
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background-color: #00000033;
    }
  }
  &__back {
    & > *:nth-child(2) {
      order: -1;
      rotate: 180deg;
    }
  }
  &__content {
    z-index: 2;
  }
  &__title {
    font-size: max(8rem, 42px);
    line-height: 1.1;
    span {
      display: block;
    }
  }

  &__quote {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: max(1.2rem, 8px);
    &-label {
      background: rgba(255, 255, 255, 0.12);
      border-radius: 38px;
      padding-block: max(0.7rem, 3px);
      padding-inline: 15px;
      font-size: 14px;
      font-weight: 600;
      line-height: 1.6;
    }

    &-text {
      font-size: max(2.4rem, 14px);
      line-height: 1.35;
      max-width: 32ch;
    }
  }

  &__stats {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 10px);
  }

  &__stat {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(12px);
    border-radius: 12px;
    padding: max(2rem, 16px);
    display: flex;
    flex-direction: column;
    gap: max(2.4rem, 12px);
  }

  &__image {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    width: 65%;
    left: 50%;
    bottom: 0;
    translate: -50%;
    z-index: 2;
    @media screen and (max-width: vars.$bp-md) {
      top: 50%;
      translate: -50% -70%;
      width: 100%;
    }
  }
}
</style>
