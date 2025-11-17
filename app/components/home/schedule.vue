<template>
  <section class="schedule">
    <div class="section-header">
      <h2 class="heading-lg">
        <span class="clr-bg-light">{{ $t('home.schedule.title') }}</span>
      </h2>
      <div class="schedule__location">
        <IconsLocation class="schedule__icon" />
        <span class="section-subtitle">{{ $t('home.schedule.location') }}</span>
      </div>
    </div>
    <UiScheduleCards :itmes="events" />
  </section>
</template>

<script setup>
const { tm } = useI18n();
const events = computed(() => tm('home.schedule.events').map(useMapRt));
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
  &__icon {
    width: 24px;
    height: 24px;
    fill: vars.$clr-text-muted;
    flex-shrink: 0;
  }
}
</style>
