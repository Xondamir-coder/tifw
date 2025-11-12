<template>
  <main class="about">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero__container">
        <UiPicture src="about-hero.jpg" alt="Conference meeting" class="hero__picture" />
        <div class="hero__overlay">
          <h1 class="heading-lg clr-white">{{ $t('about.hero.title') }}</h1>
          <p class="section-subtitle">{{ $t('about.hero.subtitle') }}</p>
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
      <AboutCards />
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

const icons = [IconsLocation, IconsCar, IconsTime, IconsPhone];
</script>

<style lang="scss" scoped>
.about {
  &__container {
    padding-top: max(9rem, 32px);
    display: flex;
    flex-direction: column;
    gap: max(9rem, 36px);
    background-color: #fff;
    @media screen and (max-width: vars.$bp-md) {
      gap: max(4rem, 36px);
      padding-top: max(4rem, 32px);
    }
  }
  .hero {
    background-color: #fff;
    border-top-left-radius: max(3.2rem, 20px);
    border-top-right-radius: max(3.2rem, 20px);
    overflow: hidden;
    &__container {
      position: relative;
      min-height: calc(100vh - max(7.2rem, 72px));
      clip-path: polygon(0 100%, 0 0, 100% 0%, 100% 94%, 62.5% 94%, 60% 100%);
      @media screen and (max-width: vars.$bp-md) {
        clip-path: polygon(0 100%, 0 0, 100% 0%, 100% 95.5%, 48% 95.5%, 43% 100%);
      }
    }
    &__picture {
      position: absolute;
      inset: 0;
      &::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: rgba(0, 0, 0, 0.2);
      }
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
      @media screen and (max-width: vars.$bp-md) {
        padding-bottom: 68px;
      }
    }
  }

  .stats {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(6.9rem, 24px);

    &__title {
      @include mix.heading-lg;
    }

    &__text {
      @include mix.text-lg;
    }

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(31rem, 210px), 1fr));
      gap: max(2rem, 14px);
      @media screen and (max-width: vars.$bp-md) {
        @include mix.grid-scroll(180px);
        h3 {
          font-size: 18px;
        }
        p {
          font-size: 10px;
        }
      }
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

  .team {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(6rem, 24px);

    &__grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(300px, 42rem), 1fr));
      gap: max(2rem, 16px);
      @media screen and (max-width: vars.$bp-md) {
        @include mix.grid-scroll(300px);
      }
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
      flex-basis: 70%;
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
    padding-block: max(9rem, 36px);
    display: flex;
    flex-direction: column;
    gap: max(6rem, 24px);
    @media screen and (max-width: vars.$bp-md) {
      padding-block: max(4rem, 36px);
    }
    &__list {
      display: flex;
      flex-direction: column;
      gap: max(1.2rem, 10px);
      &:has(> *:nth-child(2)) {
        padding-left: 16px;
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
      gap: 16px;
      &-left {
        display: flex;
        flex-direction: column;
        gap: max(3.2rem, 16px);
      }
      &-icon {
        width: max(4.2rem, 30px);
        fill: vars.$clr-accent;
      }
      &-title {
        font-size: max(2.4rem, 18px);
        font-weight: 700;
        color: vars.$clr-text-primary;
        line-height: 1.4;
      }
    }
  }
}
</style>
