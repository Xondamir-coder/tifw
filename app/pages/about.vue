<template>
  <main class="about">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__container">
        <UiPicture src="about-hero.jpg" alt="Conference meeting" class="hero__picture" />
        <div class="hero__overlay">
          <h1 class="hero__title">{{ $t('about.hero.title') }}</h1>
          <p class="section-subtitle hero__subtitle">{{ $t('about.hero.subtitle') }}</p>
        </div>
      </div>
    </section>

    <div class="about__container">
      <!-- Stats Section -->
      <section class="stats">
        <div class="section-header">
          <h2 class="heading-lg">{{ $t('about.stats.title') }}</h2>
          <p class="section-subtitle">{{ $t('about.stats.description') }}</p>
        </div>
        <div class="stats__grid">
          <div v-for="(item, index) in $tm('about.stats.items')" :key="index" class="stats__item">
            <svg
              class="stats__item-bg"
              viewBox="0 0 310 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M310 53.4217C310 57.6361 308.337 61.6803 305.373 64.6759L294.627 75.535C291.663 78.5307 290 82.5749 290 86.7892V193.211C290 197.425 291.663 201.469 294.627 204.465L305.373 215.324C308.337 218.32 310 222.364 310 226.578V264C310 272.837 302.837 280 294 280H16C7.16345 280 0 272.837 0 264V16C0 7.16344 7.16344 0 16 0H294C302.837 0 310 7.16344 310 16V53.4217Z"
                fill="#ECEFF5"
              />
            </svg>
            <h3 class="heading-md">{{ $rt(item.number) }}</h3>
            <p class="text-sm">{{ $rt(item.text) }}</p>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="team">
        <div class="section-header">
          <h2 class="heading-lg">{{ $t('about.team.title') }}</h2>
          <p class="section-subtitle">{{ $t('about.team.description') }}</p>
        </div>

        <ul class="team__grid">
          <li
            v-for="(person, index) in $tm('about.team.members')"
            :key="index"
            class="team__member"
          >
            <svg
              class="team__member-bg"
              viewBox="0 0 420 480"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M222.641 0C227.312 0 231.749 2.041 234.789 5.58734L249.211 22.4127C252.251 25.959 256.688 28 261.359 28H404C412.837 28 420 35.1634 420 44V464C420 472.837 412.837 480 404 480H16C7.16344 480 0 472.837 0 464V16C0 7.16346 7.16344 0 16 0H222.641Z"
                fill="#ECEFF5"
              />
            </svg>
            <div class="team__content">
              <h3 class="heading-md">{{ $rt(person.name) }}</h3>
              <p class="text-sm">{{ $rt(person.role) }}</p>
            </div>
            <UiPicture :src="$rt(person.image)" :alt="$rt(person.name)" class="team__image" />
          </li>
        </ul>
      </section>

      <!-- Cards -->
      <section class="cards">
        <div class="cards__title-box">
          <h2 v-for="i in 4" :key="i" class="cards__title">{{ $t('about.cards.title') }}</h2>
        </div>
        <div v-for="(item, index) in $tm('about.cards.texts')" :key="index" class="cards__item">
          <UiPicture
            :src="`about-card-${index + 1}.jpg`"
            alt="text banner"
            class="cards__item-image"
          />
          <div class="cards__item-box">
            <h2 class="heading-lg">{{ $rt(item) }}</h2>
          </div>
        </div>
        <div class="cards__scroll">
          <h6 class="cards__scroll-text heading-sm">Scroll down</h6>
          <div class="cards__scroll-bar">
            <div class="cards__scroll-bar--inside"></div>
          </div>
        </div>
      </section>
    </div>

    <!-- Venue Section -->
    <section class="venue">
      <div class="section-header">
        <h2 class="heading-lg">{{ $t('about.venue.title') }}</h2>
        <p class="section-subtitle">{{ $t('about.venue.description') }}</p>
      </div>

      <ul class="venue__details">
        <li v-for="(item, index) in $tm('about.venue.details')" :key="index" class="venue__item">
          <div class="venue__item-left">
            <component :is="icons[index]" class="venue__item-icon" />
            <h3 class="venue__item-title">{{ $rt(item.title) }}</h3>
          </div>
          <ul class="venue__list">
            <li v-for="(info, idx) in item.points" :key="idx" class="text-md">{{ $rt(info) }}</li>
          </ul>
        </li>
      </ul>
    </section>
  </main>
</template>

<script setup>
import { IconsCar, IconsLocation, IconsPhone, IconsTime } from '#components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const icons = [IconsLocation, IconsCar, IconsTime, IconsPhone];

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  // Split all h2s and set initial positions
  const textSplits = gsap.utils.toArray('.cards__item h2').map(el => {
    const split = SplitText.create(el, { type: 'chars', mask: 'chars', smartWrap: true });
    gsap.set(split.chars, { xPercent: -150 });
    return split;
  });

  // Fade out main title
  gsap.to('.cards__title-box', {
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
  const master = gsap.timeline({
    scrollTrigger: {
      ...masterTrigger,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1
    }
  });

  // Animate the scroll bar filling as the master timeline progresses
  gsap.to('.cards__scroll-bar--inside', {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: masterTrigger
  });

  // --- CARD MOVEMENT ANIMATIONS ---
  const cards = gsap.utils.toArray('.cards__item');
  cards.forEach((card, i) => {
    const image = card.firstElementChild;
    const animProps = i === 0 ? { scale: 0.53, borderRadius: 236 } : { yPercent: 100 };

    const cardTl = gsap.timeline();

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

<style lang="scss" scoped>
@keyframes travel {
  from {
    transform: translateX(-80%);
  }
  to {
    transform: translateX(0%);
  }
}
.about {
  &__container {
    padding-top: max(9rem, 16px);
    display: flex;
    flex-direction: column;
    gap: max(9rem, 16px);
    background-color: #fff;
    @media screen and (max-width: vars.$bp-md) {
      gap: max(4rem, 16px);
      padding-top: max(4rem, 16px);
    }
  }
  .hero {
    background-color: #fff;
    border-top-left-radius: max(3.2rem, 20px);
    border-top-right-radius: max(3.2rem, 20px);
    overflow: hidden;
    &__container {
      position: relative;
      aspect-ratio: 1440/700;
      clip-path: polygon(0 100%, 0 0, 100% 0%, 100% 94%, 62.5% 94%, 60% 100%);
    }
    &__picture {
      position: absolute;
      inset: 0;
    }
    &__overlay {
      position: absolute;
      inset: 0;
      display: flex;
      gap: max(1.6rem, 10px);
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-start;
      padding-inline: var(--spacing-inline);
      padding-bottom: max(4.5rem, 24px);
      color: #fff;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
    }
    &__title {
      @include mix.heading-lg();
      color: #fff;
    }
    &__subtitle {
      color: rgba(#ffffff, 0.78);
    }
  }

  .stats {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(6.9rem, 40px);

    &__title {
      @include mix.heading-lg;
    }

    &__text {
      @include mix.text-lg;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(200px, 31rem), 1fr));
      gap: max(2rem, 16px);
    }

    &__item {
      display: flex;
      flex-direction: column;
      aspect-ratio: 31/28;
      justify-content: space-between;
      padding: max(2.4rem, 18px);
      border-radius: max(1.6rem, 10px);
      overflow: hidden;
      position: relative;

      &-bg {
        position: absolute;
        inset: 0;
      }
      h3,
      p {
        z-index: 1;
      }
    }
  }

  .cards {
    overflow: hidden;
    position: relative;
    aspect-ratio: 1440/800;

    &__scroll {
      position: absolute;
      right: max(7rem, 16px);
      bottom: max(7rem, 16px);
      z-index: 3;
      display: flex;
      flex-direction: column;
      gap: max(2rem, 16px);
      &-text {
        color: #fff;
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
      font-family: vars.$font-prosto;
      font-size: max(5.4rem, 35px);
      line-height: 1.25;
      letter-spacing: -1.3px;
      color: rgba(vars.$clr-text-primary, 0.76);
      &-box {
        position: absolute;
        top: 50%;
        left: 0;
        translate: 0 -50%;
        text-wrap: nowrap;
        animation: travel 80s linear infinite;
        display: flex;
        gap: 10px;
      }
    }
    &__item {
      position: absolute;
      inset: 0;
      display: grid;
      overflow: hidden;
      &:nth-child(2) {
        border-radius: 47px;
      }
      &-box {
        display: flex;
        align-items: flex-end;
        justify-content: flex-start;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%);
        padding: max(7rem, 16px);
      }
      &-image {
        transform: scale(1.3);
      }
      &:not(:nth-child(2)) {
        border-radius: max(3.2rem, 20px);
        .cards__item-image {
          transform: scale(1.4);
        }
      }
      & > * {
        grid-area: 1/1/2/2;
      }
      h2 {
        color: #fff;
        max-width: 20ch;
      }
    }
  }
  .team {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(6rem, 40px);

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(300px, 42rem), 1fr));
      gap: max(2rem, 16px);
    }

    &__member {
      padding-top: max(3rem, 24px);
      padding-inline: max(3rem, 24px);
      position: relative;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      aspect-ratio: 42/48;
      &-bg {
        position: absolute;
        inset: 0;
      }
    }
    &__image {
      z-index: 1;
      margin-top: auto;
      flex-basis: 60%;
    }
    &__content {
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 10px);
    }
  }

  .venue {
    padding-inline: var(--spacing-inline);
    background-color: vars.$clr-border;
    padding-block: max(9rem, 16px);
    display: flex;
    flex-direction: column;
    gap: max(6rem, 16px);
    @media screen and (max-width: vars.$bp-md) {
      padding-block: max(4rem, 16px);
    }
    &__list {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 10px);
      &:has(> *:nth-child(2)) {
        list-style-type: disc;
      }
    }
    &__details {
      display: flex;
      flex-direction: column;
      gap: max(1.6rem, 10px);
    }

    &__item {
      background-color: #fff;
      padding: max(2rem, 16px);
      border-radius: max(2.4rem, 16px);
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      &-left {
        display: flex;
        flex-direction: column;
        gap: max(3.2rem, 20px);
      }
      &-icon {
        width: max(4.2rem, 30px);
        fill: vars.$clr-accent;
      }
      &-title {
        font-size: max(2.4rem, 20px);
        font-weight: 700;
        color: vars.$clr-text-primary;
        line-height: 1.4;
      }
    }
  }
}
</style>
