<template>
  <section class="schedule">
    <div class="section-header">
      <h2 class="heading-lg">
        {{ $t('home.schedule.title') }}
      </h2>

      <div class="schedule__location">
        <IconsLocation class="schedule__icon" />
        <span class="section-subtitle">{{ $t('home.schedule.location') }}</span>
      </div>
    </div>

    <div class="schedule__list">
      <div v-for="(event, i) in $tm('home.schedule.events')" :key="i" class="schedule__item">
        <h3 class="heading-lg schedule__date">{{ $rt(event.day) }} {{ $rt(event.month) }}</h3>
        <div class="schedule__info">
          <span>{{ $rt(event.title) }}</span>
          <p v-if="event.subtitle">
            {{ $rt(event.subtitle) }}
          </p>
        </div>
        <p class="schedule__text section-subtitle">
          {{ $rt(event.description) }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
// purely static layout for now
</script>

<style lang="scss" scoped>
.schedule {
  background: vars.$clr-border;
  padding-top: vars.$spacing-block;
  padding-bottom: max(9rem, 56px);
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  gap: max(6rem, 12px);

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: max(2rem, 20px);
  }

  &__title {
    flex: 1;
  }

  &__location {
    display: flex;
    align-items: center;
    gap: 8px;
    span {
      max-width: 25ch;
    }
  }
  &__text {
    padding-bottom: 22px;
    @media screen and (max-width: vars.$bp-lg) {
      padding-bottom: 0;
    }
  }
  &__icon {
    width: 24px;
    height: 24px;
    fill: vars.$clr-text-muted;
    flex-shrink: 0;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
  }

  &__item {
    background: #fff;
    display: grid;
    grid-template-columns: 1fr 2.05fr 2.05fr;
    align-items: flex-start;
    border-radius: max(2.4rem, 16px);
    padding: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  }

  &__date {
    color: vars.$clr-text-muted;
  }

  &__info {
    font-weight: bold;
    font-size: max(2.4rem, 18px);
    line-height: 1.4;
    color: vars.$clr-text-primary;
  }
}
</style>
