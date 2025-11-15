<template>
  <NuxtLink :to="$localePath(`/speakers/${speaker.id}`)" class="speaker-card">
    <div class="speaker-card__image">
      <UiPicture :src="speaker.image" :alt="speaker.name" class="speaker-card__image-child" />
    </div>
    <div class="speaker-card__info">
      <h6 class="speaker-card__name heading-sm">{{ speaker.name }}</h6>
      <p class="speaker-card__position text-sm">{{ speaker.role }}</p>
    </div>
  </NuxtLink>
</template>

<script setup>
defineProps({
  speaker: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.speaker-card {
  display: flex;
  flex-direction: column;
  gap: max(2rem, 16px);
  --text-color: #{vars.$clr-text-secondary};
  --heading-color: #{vars.$clr-text-primary};

  &:hover {
    .speaker-card__name,
    .speaker-card__position {
      letter-spacing: 1px;
    }
    .speaker-card__image-child {
      scale: 1.15;
    }
    .speaker-card__image {
      border-radius: 50%;
    }
  }
  &__name {
    color: var(--heading-color);
    transition: all 0.5s;
  }
  &__image {
    border-radius: max(1.2rem, 12px);
    overflow: hidden;
    display: flex;
    aspect-ratio: 307/340;
    transition: all 0.5s;

    &-child {
      transition: all 0.5s;
    }
  }
  &__position {
    opacity: 0.78;
    transition: all 0.5s;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
