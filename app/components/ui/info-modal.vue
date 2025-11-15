<template>
  <UiModalOverlay v-model="showInfoModal">
    <div class="info-modal">
      <button class="info-modal__close" @click="showInfoModal = false">
        <IconsX class="info-modal__close-icon" />
      </button>
      <UiPicture :src="data.image" :alt="data.text" class="info-modal__picture" />
      <div class="info-modal__container">
        <div class="info-modal__top">
          <div class="info-modal__logo-container">
            <component :is="data.logo" class="info-modal__logo" />
          </div>
          <div class="info-modal__top-container">
            <h6 class="heading-sm">{{ data.name }}</h6>
            <p class="text-sm">{{ data.text }}</p>
          </div>
        </div>
        <p class="text-md">{{ data.description }}</p>
        <div v-if="data?.areas" class="info-modal__areas">
          <h6 class="heading-sm">{{ $t('info-modal.areas') }}</h6>
          <ul class="info-modal__list">
            <li v-for="(area, index) in data?.areas" :key="index" class="info-modal__item">
              <div class="info-modal__item-icon-container">
                <component :is="area.icon" class="info-modal__item-icon" />
              </div>
              <p class="info-modal__item-text text-sm">
                {{ area.text }}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </UiModalOverlay>
</template>

<script setup>
const showInfoModal = useState('showInfoModal');
defineProps({
  data: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.info-modal {
  display: flex;
  flex-direction: column;
  gap: max(2rem, 16px);
  &__close {
    position: absolute;
    right: max(3rem, 16px);
    top: max(3rem, 16px);
    width: max(5rem, 40px);
    border-radius: 12px;
    background: #fafafa;
    border: 1px solid #cbd5e0;
    height: max(5rem, 40px);
    stroke: #111827;
    transition: all 0.4s;
    @include mix.flex-center;
    &:hover {
      background-color: #cbd5e0;
      stroke: #fff;
    }
    &-icon {
      width: 48%;
    }
  }
  &__picture {
    flex-shrink: 0;
    aspect-ratio: 680/320;
    @media screen and (max-width: vars.$bp-sm) {
      aspect-ratio: 375/240;
      border-top-left-radius: 16px;
      border-top-right-radius: 16px;
    }
  }
  &__areas {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 10px);
  }
  &__item {
    border: 1px solid #eaebed;
    padding: 8px;
    border-radius: 12px;
    color: vars.$clr-text-primary;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: max(1.6rem, 10px);
    &-icon {
      width: 57.14%;
      fill: #fff;
      &-container {
        @include mix.flex-center;
        flex-shrink: 0;
        width: max(4.2rem, 30px);
        height: max(4.2rem, 30px);
        border-radius: 8px;
        background-color: vars.$clr-success;
      }
    }
  }
  &__list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(max(30rem, 200px), 1fr));
    gap: 8px;
  }
  &__logo {
    width: 85%;
    &-container {
      @include mix.flex-center;
      flex-shrink: 0;
      width: max(8rem, 60px);
      height: max(8rem, 60px);
      border-radius: max(1.2rem, 9px);
      border: 0.8px solid #0000001f;
    }
  }
  &__top {
    display: flex;
    align-items: center;
    gap: max(2rem, 10px);
    &-container {
      display: flex;
      flex-direction: column;
      gap: max(0.8rem, 4px);
    }
  }
  &__container {
    background-color: inherit;
    display: flex;
    flex-direction: column;
    gap: max(2rem, 16px);
    padding-inline: max(3rem, 16px);
    padding-bottom: max(2rem, 10px);
  }
}
</style>
