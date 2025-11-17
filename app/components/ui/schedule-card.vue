<template>
  <div class="schedule-card">
    <h3 class="heading-lg schedule-card__date">
      {{ date }}
    </h3>
    <div class="schedule-card__info">
      <span>{{ data.title }}</span>
      <p v-if="data.subtitle">
        {{ data.subtitle }}
      </p>
    </div>
    <p class="schedule-card__text section-subtitle">
      {{ data.description }}
    </p>
  </div>
</template>

<script setup>
const { locale } = useI18n();

const props = defineProps({
  data: {
    required: true,
    type: Object
  }
});

const date = computed(() =>
  Intl.DateTimeFormat(locale.value, {
    month: 'short',
    day: '2-digit'
  }).format(new Date(props.data.date))
);
</script>

<style scoped lang="scss">
.schedule-card {
  background: #fff;
  display: grid;
  grid-template-columns: 1fr 2.05fr 2.05fr;
  align-items: flex-start;
  border-radius: max(2.4rem, 16px);
  padding: 20px;

  --info-color: #{vars.$clr-text-primary};
  --date-color: #{vars.$clr-text-muted};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
  &__date {
    color: var(--date-color);
  }
  &__info {
    font-weight: bold;
    font-size: max(2.4rem, 18px);
    line-height: 1.4;
    color: var(--info-color);
  }
  &__text {
    padding-bottom: 22px;
    @media screen and (max-width: vars.$bp-lg) {
      padding-bottom: 0;
    }
  }
}
</style>
