<template>
  <main class="speaker">
    <SpeakerHero :speaker />
    <div class="speaker__container">
      <SpeakerAbout :description="speaker.description" />
      <section class="speaker__schedule">
        <h2 class="heading-lg">
          <span class="clr-accent-primary">{{ $t('speaker.schedule') }}</span>
        </h2>
        <UiScheduleCards :items="speaker.events" class="speaker__schedule-list" />
      </section>
      <section class="speaker__focus">
        <h2 class="heading-lg">
          <span class="clr-accent-primary">{{ $t('exhibition-focus') }}</span>
        </h2>
        <ul class="speaker__focus-list">
          <li v-for="(item, index) in focusList" :key="index" class="speaker__focus-item">
            <svg
              class="speaker__focus-item-bg"
              viewBox="0 0 310 280"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.1"
                d="M310 53.4217C310 57.6361 308.337 61.6803 305.373 64.6759L294.627 75.535C291.663 78.5307 290 82.5749 290 86.7892V193.211C290 197.425 291.663 201.469 294.627 204.465L305.373 215.324C308.337 218.32 310 222.364 310 226.578V264C310 272.837 302.837 280 294 280H16C7.16345 280 0 272.837 0 264V16C0 7.16344 7.16344 0 16 0H294C302.837 0 310 7.16344 310 16V53.4217Z"
                fill="#ECEFF5"
              />
            </svg>
            <div class="speaker__focus-item-icon-container">
              <IconsHeart class="speaker__focus-item-icon" />
            </div>
            <p class="text-sm clr-white">{{ item }}</p>
          </li>
        </ul>
      </section>
      <section class="speaker__highlight">
        <h2 class="heading-lg">
          <span class="clr-accent-primary">{{ $t('highlights') }}</span>
        </h2>
        <ClientOnly>
          <swiper-container
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
            <swiper-slide v-for="(image, i) in images" :key="i" class="speaker__highlight-item">
              <UiPicture :src="image" :alt="`Event image ${i + 1}`" />
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </section>
    </div>
  </main>
</template>

<script setup>
const route = useRoute();
const { speakers } = useApiStore();

const focusList = [
  'Presentation of new AI-powered smartphones and the Galaxy ecosystem for 2025',
  'Sustainable technologies — eco-friendly production and recycling programs',
  'IoT and Smart Home solutions — integration of smart home devices',
  'Sustainable technologies — eco-friendly production and recycling programs'
];
const images = [
  'events-1.jpg',
  'events-2.jpg',
  'events-3.jpg',
  'events-1.jpg',
  'events-2.jpg',
  'events-3.jpg'
];

const speaker = computed(() => speakers.find(el => el.id === +route.params.id));

const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.utils.toArray('.logo-slider').forEach((s, i) => {
    $gsap.from(s, {
      xPercent: i % 2 === 0 ? -50 : 50,
      ease: 'none',
      scrollTrigger: getDefaultScrollTrigger(s, { start: 'top-=300 bottom', end: 'bottom top' })
    });
  });

  useAnimateTypography();

  const animateEl = el => {
    const content = el.textContent;
    const span = document.createElement('span');
    span.textContent = content;
    el.classList.add('animate-typography');
    el.appendChild(span);
    $gsap.from(span, {
      clipPath: 'inset(0 0 100%)',
      scrollTrigger: {
        trigger: el,
        start: 'top 90%',
        end: 'top 60%',
        scrub: 1
      }
    });
  };
  $gsap.utils.toArray('section > h2.heading-lg').forEach(animateEl);

  $gsap.from('.speaker__focus-item', {
    opacity: 0,
    y: 20,
    stagger: 0.2,
    scrollTrigger: getDefaultScrollTrigger('.speaker__focus-list')
  });
});
</script>

<style lang="scss" scoped>
.animate-typography {
  position: relative;
  & > *:last-child {
    position: absolute;
    inset: 0;
  }
}
.speaker {
  &__highlight {
    display: flex;
    flex-direction: column;
    gap: max(6rem, 24px);
    &-item {
      border-radius: max(1.6rem, 10px);
      overflow: hidden;
      display: flex;
      &:first-child {
        margin-left: 10px;
      }
      @media screen and (max-width: vars.$bp-md) {
        aspect-ratio: 343/380;
      }
    }
    h2 {
      margin-inline: var(--spacing-inline);
    }
  }
  &__focus {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(6rem, 24px);
    &-list {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(max(31rem, 210px), 1fr));
      gap: max(2rem, 14px);
      @media screen and (max-width: vars.$bp-md) {
        @include mix.grid-scroll(180px);
      }
    }
    &-item {
      aspect-ratio: 310/280;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      position: relative;
      padding: max(2.4rem, 20px);
      @media screen and (max-width: vars.$bp-md) {
        gap: 20px;
        aspect-ratio: initial;
        p {
          font-size: 10px;
        }
      }
      &-bg {
        position: absolute;
        inset: 0;
      }
      &-icon {
        width: 50%;
        &-container {
          @include mix.flex-center;
          border-radius: 8px;
          width: max(5rem, 40px);
          height: max(5rem, 40px);
          fill: #fff;
          background-color: #ffffff1f;
        }
      }
    }
  }
  &__container {
    overflow: hidden;
    background-color: vars.$clr-dark-primary;
    color: #fff;
    padding-block: 9rem;
    display: flex;
    flex-direction: column;
    gap: max(9rem, 20px);
    @media screen and (max-width: vars.$bp-md) {
      gap: max(4rem, 36px);
      padding-block: max(4rem, 20px);
    }
    h2 {
      color: inherit;
    }
  }
  &__schedule {
    padding-inline: var(--spacing-inline);
    display: flex;
    flex-direction: column;
    gap: max(3rem, 24px);
    &-list > * {
      background-color: vars.$clr-accent-primary;
      color: #fff;
      --info-color: inherit;
      --date-color: inherit;
    }
  }
}
</style>
