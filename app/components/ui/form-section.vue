<template>
  <div class="form-section">
    <svg
      class="form-section__bg"
      viewBox="0 0 1300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1300 296C1300 309.255 1289.25 320 1276 320H24C10.7451 320 0 309.255 0 296V59C0 45.7452 10.7452 35 24 35H442.904C450.713 35 458.033 31.2012 462.528 24.8163L472.83 10.1837C477.325 3.79881 484.646 0 492.454 0H1276C1289.25 0 1300 10.7452 1300 24V296Z"
        fill="white"
      />
    </svg>
    <UiPicture src="briefcase.png" alt="briefcase" class="form-section__picture" />
    <div class="form-section__content">
      <h2 class="heading-ml">
        <span>{{ title }}</span>
        <span>{{ title }}</span>
      </h2>
      <p class="form-section__content-text text-lg">
        <span>{{ text }}</span>
        <span>{{ text }}</span>
      </p>
      <UiButton :label="$t('submit-application')" @click="showFormModal = true" />
    </div>
  </div>
</template>

<script setup>
const showFormModal = useState('showFormModal', () => false);
const { $gsap } = useNuxtApp();

defineProps({
  title: {
    required: true,
    type: String
  },
  text: {
    required: true,
    type: String
  }
});

onMounted(() => {
  $gsap.utils
    .toArray('.form-section__content h2>*:last-child, .form-section__content p>*:last-child')
    .map(el => {
      $gsap.from(el, {
        clipPath: 'inset(0 0 100%)',
        scrollTrigger: getDefaultScrollTrigger(el, { start: 'top bottom', end: 'bottom 80%' })
      });
    });
});
</script>

<style lang="scss" scoped>
.form-section {
  display: grid;
  grid-template-columns: 1fr 1.41fr;
  gap: 3rem;
  padding-top: 5rem;
  border-radius: max(2.4rem, 16px);
  overflow: hidden;
  position: relative;
  @media screen and (max-width: vars.$bp-sm) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: vars.$bp-lg) {
    background-color: #fff;
  }
  & > *:not(.form-section__bg) {
    z-index: 1;
  }
  &__picture {
    @media screen and (min-width: vars.$bp-lg) {
      position: absolute;
      left: 27px;
      top: -15%;
      width: 30%;
    }
  }
  &__bg {
    position: absolute;
    inset: 0;
    @media screen and (max-width: vars.$bp-lg) {
      display: none;
    }
  }
  &__content {
    align-self: center;
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 10px);
    align-items: flex-start;
    padding-bottom: 6.1rem;
    @media screen and (min-width: vars.$bp-lg) {
      grid-column: 2/3;
    }
    @media screen and (max-width: vars.$bp-sm) {
      padding-inline: 16px;
    }
    &-text {
      max-width: 50ch;
      color: vars.$clr-text-secondary;
    }
    h2,
    p {
      position: relative;

      & > * {
        &:first-child {
          color: vars.$clr-bg-light;
        }
        &:last-child {
          position: absolute;
          inset: 0;
          clip-path: inset(0 0 0%);
        }
      }
    }
  }
}
</style>
