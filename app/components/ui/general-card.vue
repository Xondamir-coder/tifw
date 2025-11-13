<template>
  <div class="general-card">
    <svg
      class="general-card__bg"
      viewBox="0 0 418 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M235.462 0C243.317 0 250.675 3.84394 255.162 10.2916L265.194 24.7085C269.681 31.1561 277.039 35 284.894 35H394C407.255 35 418 45.7452 418 59V296C418 309.255 407.255 320 394 320H24C10.7452 320 0 309.255 0 296V24C0 10.7452 10.7452 0 24 0H235.462Z"
        fill="inherit"
      />
    </svg>
    <component :is="data.logo" class="general-card__logo" />
    <div class="general-card__content">
      <h6 class="heading-sm">{{ data.name }}</h6>
      <p class="text-sm">{{ data.description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  data: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.general-card {
  position: relative;
  overflow: hidden;
  border-radius: max(2.4rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(2.5rem, 22px);
  padding: max(2rem, 12px);
  fill: #fff;
  transition: fill 0.4s;
  &:hover {
    fill: vars.$clr-bg-light;
  }
  & > *:not(.general-card__bg) {
    z-index: 1;
  }
  &__logo {
    width: 43%;
    @media screen and (max-width: vars.$bp-md) {
      width: 31%;
    }
  }
  &__bg {
    position: absolute;
    inset: 0;
  }
  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    gap: max(1.2rem, 8px);
  }
}
</style>
