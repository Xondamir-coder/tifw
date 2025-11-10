<template>
  <div class="speaker-card">
    <div class="speaker-card__image">
      <UiPicture :src="image" :alt="name" />
    </div>

    <div class="speaker-card__info">
      <h6 class="speaker-card__name heading-sm">{{ name }}</h6>
      <p class="speaker-card__position text-sm">{{ role }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  image: { type: String, required: true },
  name: { type: String, required: true },
  role: { type: String, required: true }
});
</script>

<style lang="scss" scoped>
.speaker-card {
  display: flex;
  flex-direction: column;
  color: #fff;
  gap: max(2rem, 16px);
  &__name {
    color: inherit;
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
