<template>
  <NuxtLink :to="$localePath(`/speakers/${speaker.id}`)" class="speaker-card">
    <div class="speaker-card__image">
      <UiPicture :src="speaker.image" :alt="speaker.name" />
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

  &__name {
    color: var(--heading-color);
  }
  &__image {
    border-radius: max(1.2rem, 12px);
    overflow: hidden;

    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  }
  &__position {
    opacity: 0.78;
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
}
</style>
