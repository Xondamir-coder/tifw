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
          :image="speaker.image"
          :role="speaker.role"
          :name="speaker.name"
          class="list__card"
        />
      </div>
    </UiCurvedContainer>
    <div class="banner-container">
      <div class="banner">
        <svg
          class="banner__bg"
          viewBox="0 0 1300 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M819.546 0C827.354 0 834.675 3.79881 839.17 10.1837L849.472 24.8163C853.967 31.2012 861.287 35 869.096 35H1276C1289.25 35 1300 45.7452 1300 59V296C1300 309.255 1289.25 320 1276 320H24C10.7451 320 0 309.255 0 296V24C0 10.7452 10.7452 0 24 0H819.546Z"
            fill="white"
          />
        </svg>

        <div class="banner__info">
          <h5 class="banner__info-name">{{ $t('speakers.banner.name') }}</h5>
          <p class="text-sm">{{ $t('speakers.banner.role') }}</p>
        </div>
        <UiPicture src="aleksei.jpg" class="banner__picture" />
        <div class="banner__content">
          <h2 class="banner__title">{{ $t('speakers.banner.title') }}</h2>
          <p class="text-lg">
            {{ $t('speakers.banner.text') }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const speakers = [
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-1.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-2.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-3.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-4.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-1.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-2.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-3.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-4.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-1.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-2.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-3.jpg'
  },
  {
    name: 'Timur Rakhimov',
    role: 'Lead AI Engineer',
    image: 'speaker-4.jpg'
  }
];
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
  padding: max(3.6rem, 20px);
  display: grid;
  grid-template-columns: 1fr 1.5fr 4.1fr;
  @media screen and (max-width: vars.$bp-lg) {
    grid-template-columns: 1fr;
    background-color: #fff;
    gap: 16px;
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
  &__picture {
    @media screen and (min-width: vars.$bp-lg) {
      transform: scale(1.35) translateX(-20%);
    }
    @media screen and (max-width: vars.$bp-lg) {
      order: -1;
    }
  }
  & > *:not(.banner__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset: 0;
    @media screen and (max-width: vars.$bp-lg) {
      display: none;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 10px);
    padding-top: 3.6rem;
    padding-right: 1.9rem;
    @media screen and (max-width: vars.$bp-lg) {
      padding-top: 0;
      padding-right: 0;
    }
    p {
      line-height: 1.35;
    }
  }
  &__title {
    font-family: vars.$font-prosto;
    font-size: max(3.6rem, 24px);
    letter-spacing: -1.3px;
    color: vars.$clr-text-primary;
    line-height: 1.25;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: max(0.8rem, 4px);
    &-name {
      font-family: vars.$font-prosto;
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
    color: vars.$clr-text-primary;
  }
}
</style>
