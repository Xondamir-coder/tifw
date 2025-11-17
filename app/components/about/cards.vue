<template>
  <section class="cards">
    <div class="cards__title-box">
      <h2 v-for="i in 4" :key="i" class="cards__title">{{ $t('about.cards.title') }}</h2>
    </div>
    <div v-for="(item, index) in $tm('about.cards.texts')" :key="index" class="cards__item">
      <UiPicture :src="`about-card-${index + 1}.jpg`" alt="text banner" class="cards__item-image" />
      <div class="cards__item-box">
        <h2 class="cards__item-title">{{ $rt(item) }}</h2>
      </div>
    </div>
    <div class="cards__scroll">
      <h6 class="heading-sm clr-white">Scroll down</h6>
      <div class="cards__scroll-bar">
        <div class="cards__scroll-bar--inside"></div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { SplitText } from 'gsap/SplitText';

const { $gsap } = useNuxtApp();

onMounted(() => {
  if (window.innerWidth < 992) return;

  // Split all h2s and set initial positions
  const textSplits = $gsap.utils.toArray('.cards__item h2').map(el => {
    const split = SplitText.create(el, { type: 'chars', mask: 'chars', smartWrap: true });
    $gsap.set(split.chars, { xPercent: -150 });
    return split;
  });

  // Fade out main title
  $gsap.to('.cards__title-box', {
    opacity: 0,
    scrollTrigger: {
      trigger: '.cards',
      start: 'center center',
      end: '+=100%',
      scrub: 1
    }
  });

  // Main pinned scroll section
  const masterTrigger = {
    trigger: '.cards',
    start: 'center center',
    end: '+=600%',
    scrub: 1
  };
  const master = $gsap.timeline({
    scrollTrigger: {
      ...masterTrigger,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1
    }
  });

  // Animate the scroll bar filling as the master timeline progresses
  $gsap.to('.cards__scroll-bar--inside', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: masterTrigger
  });

  // --- CARD MOVEMENT ANIMATIONS ---
  const cards = $gsap.utils.toArray('.cards__item');
  cards.forEach((card, i) => {
    const image = card.firstElementChild;
    const animProps = i === 0 ? { scale: 0.53, borderRadius: 236 } : { yPercent: 100 };

    const cardTl = $gsap.timeline();

    // Animate current card in
    cardTl.from(card, animProps);

    // Animate text in
    cardTl.to(textSplits[i].chars, { xPercent: 0 });

    // Animate image zoom
    cardTl.to(image, { scale: 1 }, 0);

    // --- When a new card enters, shrink the previous one ---
    if (i > 0) {
      cardTl.to(
        cards[i - 1],
        {
          scale: 0.9,
          opacity: 0,
          ease: 'power2.inOut'
        },
        0 // same time new card starts
      );
    }

    master.add(cardTl, i === 0 ? 0 : '+=0.5');
  });
});
</script>

<style scoped lang="scss">
@keyframes travel {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0%);
  }
}
.cards {
  overflow: hidden;
  position: relative;
  @media screen and (min-width: vars.$bp-lg) {
    width: 100vw;
    height: 100vh;
  }
  @media screen and (max-width: vars.$bp-lg) {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: 26px;
    padding-bottom: 36px;
  }

  &__scroll {
    position: absolute;
    right: max(7rem, 16px);
    bottom: max(7rem, 16px);
    z-index: 3;
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
    @media screen and (max-width: vars.$bp-lg) {
      display: none;
    }
    &-bar {
      width: 36rem;
      height: 8px;
      background: #ffffff80;
      backdrop-filter: blur(5px);
      position: relative;
      &--inside {
        position: absolute;
        inset: 0;
        transform: scaleX(0);
        transform-origin: left;
        background-color: #fff;
      }
    }
  }
  &__title {
    font-size: max(5.4rem, 24px);
    line-height: 1.25;
    letter-spacing: -1.3px;
    color: rgba(vars.$clr-text-primary, 0.76);
    &-box {
      text-wrap: nowrap;
      animation: travel 80s linear infinite;
      display: flex;
      gap: 10px;
      @media screen and (max-width: vars.$bp-lg) {
        animation-duration: 10s;
      }
      @media screen and (min-width: vars.$bp-lg) {
        position: absolute;
        top: 50%;
        left: 0;
        translate: 0 -50%;
      }
    }
  }
  &__item {
    display: grid;
    overflow: hidden;
    color: #fff;
    @media screen and (min-width: vars.$bp-lg) {
      position: absolute;
      inset: 0;
      & > * {
        grid-area: 1/1/2/2;
      }
      &:not(:nth-child(2)) {
        border-radius: max(3.2rem, 20px);
        .cards__item-image {
          transform: scale(1.4);
        }
      }
    }
    @media screen and (max-width: vars.$bp-lg) {
      color: vars.$clr-text-primary;
    }
    &:nth-child(2) {
      @media screen and (min-width: vars.$bp-lg) {
        border-radius: 47px;
      }
    }
    &-title {
      @include mix.heading-lg(16px);
    }
    &-box {
      display: flex;
      align-items: flex-end;
      justify-content: flex-start;
      z-index: 1;
      background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
      padding: max(7rem, 16px);
      @media screen and (max-width: vars.$bp-lg) {
        background: none;
        padding: 0;
        margin-top: 12px;
      }
    }
    &-image {
      position: relative;
      @media screen and (min-width: vars.$bp-lg) {
        transform: scale(1.3);
      }
      @media screen and (max-width: vars.$bp-lg) {
        border-radius: max(1.6rem, 16px);
        aspect-ratio: 342/240;
      }
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

    h2 {
      color: inherit;
      max-width: 20ch;
    }
  }
}
</style>
