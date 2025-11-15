<template>
  <section class="participants-info">
    <div class="section-header">
      <h2 class="heading-lg">
        {{ $t('home.participants-info.title') }}
      </h2>
      <p class="section-subtitle">
        {{ $t('home.participants-info.text') }}
      </p>
    </div>

    <div class="participants-info__content">
      <!-- Left sector box -->
      <div class="participants-info__sectors">
        <button
          v-for="(sector, i) in $tm('home.participants-info.sectors')"
          :key="i"
          class="participants-info__sector heading-md clr-text-primary"
          :class="{ 'participants-info__sector--active': i === activeIndex }"
          @click="activeIndex = i"
        >
          {{ $rt(sector) }}
        </button>
      </div>

      <!-- Desktop -->
      <div class="participants-info__image-box">
        <Transition name="fade">
          <UiPicture :key="activeIndex" :src="items[activeIndex].image" alt="Payment terminal" />
        </Transition>

        <Transition name="slide">
          <div :key="activeIndex" class="participants-info__stats">
            <div
              v-for="(stat, i) in items[activeIndex].stats"
              :key="i"
              class="participants-info__stat"
            >
              <h3 class="heading-md">{{ stat.value }}</h3>
              <p class="text-md participants-info__stat-label">{{ stat.label }}</p>
            </div>
          </div>
        </Transition>
      </div>

      <!-- Mobile -->
      <div class="participants-info__list">
        <div v-for="(item, index) in items" :key="index" class="participants-info__image-box">
          <UiPicture :src="items[activeIndex].image" alt="Payment terminal" />
          <div class="participants-info__stats">
            <div v-for="(stat, i) in item.stats" :key="i" class="participants-info__stat">
              <h3 class="heading-md">{{ stat.value }}</h3>
              <p class="text-md participants-info__stat-label">{{ stat.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { tm } = useI18n();

const activeIndex = ref(0);
const images = ['participants-info-1.jpg', 'participants-info-2.jpg', 'participants-info-3.jpg'];

const items = computed(() =>
  images.map((image, i) => ({
    image,
    stats: tm('home.participants-info.items')[i].map(useMapRt)
  }))
);
</script>

<style lang="scss" scoped>
.participants-info {
  padding-block: vars.$spacing-block;
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: max(6rem, 24px);
  background-color: #fff;
  position: relative;
  @media screen and (max-width: vars.$bp-lg) {
    padding-inline: 0;
    .section-header {
      padding-inline: var(--spacing-inline);
    }
  }
  &::before {
    content: '';
    position: absolute;
    background-color: #fff;
    left: 0;
    top: 0;
    width: max(49%, 328px);
    height: max(4.8rem, 24px);
    translate: 0 -95%;
    clip-path: polygon(0 0, 95% 0, 100% 100%, 0 100%);
  }

  &__content {
    display: grid;
    grid-template-columns: 1fr 1.3fr;
    gap: max(1.6rem, 12px);
    @media screen and (max-width: vars.$bp-lg) {
      grid-template-columns: 1fr;
      & > * {
        &:first-child {
          display: none;
        }
        &:nth-child(2) {
          display: none;
        }
      }
    }
  }
  &__list {
    display: grid;
    @include mix.grid-scroll($grid-width: 80%, $snap-align: center);
    gap: 12px;
    padding-inline: 12px;
    & > * {
      display: flex;
    }
    @media screen and (min-width: vars.$bp-lg) {
      display: none;
    }
  }
  &__sectors {
    background: linear-gradient(
      180deg,
      rgba(236, 239, 245, 0.44) 0%,
      rgba(236, 239, 245, 0.88) 50%,
      rgba(236, 239, 245, 0.44) 100%
    );
    border-radius: max(2.4rem, 20px);
    @include mix.flex-center;
    flex-direction: column;
    gap: max(2.6rem, 20px);
    position: relative;
    &::after,
    &::before {
      content: '';
      position: absolute;
      background-color: #fff;
      height: 73%;
      width: max(3.2rem, 26px);
      top: 50%;
      translate: 0 -50%;
    }
    &::after {
      right: 0;
      clip-path: polygon(0 5%, 100% 0, 100% 100%, 0 95%);
    }
    &::before {
      clip-path: polygon(0 0, 100% 5%, 100% 95%, 0 100%);
      left: 0;
    }
  }
  &__sector {
    font-family: vars.$font-prosto;
    transition: all 0.4s;
    opacity: 0.2;
    &--active {
      opacity: 1;
    }
  }

  &__image-box {
    position: relative;
    border-radius: max(2.4rem, 12px);
    overflow: hidden;
    aspect-ratio: 724 / 466;
    @media screen and (max-width: vars.$bp-lg) {
      aspect-ratio: 335/480;
    }
  }

  &__stats {
    position: absolute;
    bottom: max(1.6rem, 8px);
    right: max(1.6rem, 8px);
    gap: max(1rem, 4px);
    display: grid;
    grid-template-columns: repeat(2, 23.5rem);
    @media screen and (max-width: vars.$bp-lg) {
      grid-template-columns: repeat(2, 1fr);
      width: calc(100% - 8px * 2);
      margin-left: 8px;
    }
  }

  &__stat {
    aspect-ratio: 235/180;
    border-radius: max(2.4rem, 8px);
    background: linear-gradient(66.97deg, #ffffff -1.08%, rgba(255, 255, 255, 0.55) 100%);
    padding: max(2.8rem, 12px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    backdrop-filter: blur(10px);
    @media screen and (max-width: vars.$bp-lg) {
      aspect-ratio: 157/164;
      h3 {
        font-size: 32px;
      }
      p {
        font-size: 18px;
      }
    }
  }

  &__stat-value {
    font-size: max(2.8rem, 28px);
    font-weight: 700;
    margin-bottom: max(0.4rem, 4px);
  }

  &__stat-label {
    color: vars.$clr-text-muted;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(1.15);
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.7s;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(25px);
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.7s;
}
</style>
