<template>
  <section class="about">
    <div class="about__inner">
      <div class="about__row about__row--top">
        <UiPicture src="home-about-1.jpg" alt="banner 1" class="about__banner" />
        <UiPicture src="home-about-2.jpg" alt="banner 1" class="about__banner" />
      </div>
      <div class="about__row about__row--center">
        <UiPicture src="home-about-4.jpg" alt="banner 1" class="about__banner" />
        <div class="about__box">
          <UiPicture src="home-about-1.jpg" alt="banner 1" class="about__box-banner" />
          <div class="about__box-content">
            <h2 class="heading-lg">{{ $t('home.about.title') }}</h2>
            <p class="text-md">{{ $t('home.about.text') }}</p>
          </div>
        </div>
        <UiPicture src="home-about-5.jpg" alt="banner 1" class="about__banner" />
      </div>
      <div class="about__row about__row--bottom">
        <UiPicture src="home-about-6.jpg" alt="banner 1" class="about__banner" />
        <UiPicture src="home-about-3.jpg" alt="banner 1" class="about__banner" />
      </div>
    </div>
  </section>
</template>

<script setup>
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const masterTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'center center',
      pin: true,
      pinSpacing: true,
      scrub: 1,
      end: '+=500%'
    }
  });

  // Master timeline
  masterTimeline.to('.about__inner', {
    scale: 0.5
  });
  masterTimeline.to(
    '.about__inner',
    {
      yPercent: -25,
      ease: 'power1.in'
    },
    0
  );
  masterTimeline.to(
    '.about .my-picture',
    {
      clipPath: 'inset(10px round 10px)'
    },
    0
  );

  // Typography timeline
  const titleSplit = SplitText.create('.about h2', {
    type: 'chars',
    mask: 'chars',
    smartWrap: true
  });
  const textSplit = SplitText.create('.about p', {
    type: 'words',
    mask: 'words',
    smartWrap: true
  });

  const typographyTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: '.about',
      start: 'center center',
      scrub: 1,
      end: '+=100%'
    }
  });
  typographyTimeline.to(titleSplit.chars, {
    opacity: 0,
    xPercent: -100,
    stagger: 0.05
  });
  typographyTimeline.to(
    textSplit.words,
    {
      opacity: 0,
      stagger: 0.05
    },
    0.2
  );
});
</script>

<style lang="scss" scoped>
@mixin overlay {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
}
@mixin zig-zag-positioning {
  .about__banner {
    &:first-child {
      position: absolute;
      left: 50%;
    }
    &:last-child {
      position: absolute;
      right: 50%;
    }
  }
}
.about {
  overflow: hidden;
  &__inner {
    position: relative;
  }
  .my-picture {
    clip-path: inset(0);
  }
  &__row {
    width: 100vw;
    height: 100vh;
    &--top {
      position: absolute;
      bottom: 100%;
      @include zig-zag-positioning;
    }
    &--bottom {
      position: absolute;
      top: 100%;
      @include zig-zag-positioning;
    }
    &--center {
      position: relative;
      .about__banner {
        &:nth-child(2) {
          position: relative;
        }
        &:first-child {
          position: absolute;
          right: 100%;
        }
        &:last-child {
          position: absolute;
          left: 100%;
        }
      }
    }
  }
  &__banner {
    &:first-child,
    &:last-child {
      position: absolute;
      bottom: 0;
      top: 0;
      width: 120%;
    }
    &:nth-child(2) {
      height: 100%;
    }
    &::after {
      @include overlay;
    }
  }
  &__box {
    color: #fff;
    width: 100%;
    height: 100%;
    display: grid;
    & > * {
      grid-area: 1/1/2/2;
    }
    &-banner {
      &::after {
        @include overlay;
      }
    }
    &-content {
      place-self: center;
      display: flex;
      flex-direction: column;
      gap: 16px;
      z-index: 1;
      max-width: 50.2%;
      align-items: center;
      text-align: center;
      @media screen and (max-width: vars.$bp-md) {
        max-width: initial;
      }
    }
    h2 {
      text-transform: uppercase;
      color: #fff;
    }
  }
}
</style>
