<template>
  <div class="events-card">
    <svg
      class="events-card__bg events-card__bg--mobile"
      viewBox="0 0 343 550"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M343 511C343 519.837 335.837 527 327 527H191.686C187.719 527 183.892 528.474 180.95 531.136L164.676 545.864C161.735 548.526 157.908 550 153.941 550H16C7.16344 550 0 542.837 0 534V16C0 7.16343 7.16344 0 16 0H327C335.837 0 343 7.16344 343 16V511Z"
        fill="white"
      />
    </svg>

    <svg
      class="events-card__bg events-card__bg--desktop"
      viewBox="0 0 1300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M819.546 0C827.354 0 834.675 3.79881 839.17 10.1837L849.472 24.8163C853.967 31.2012 861.287 35 869.096 35H1276C1289.25 35 1300 45.7452 1300 59V296C1300 309.255 1289.25 320 1276 320H24C10.7451 320 0 309.255 0 296V24C0 10.7452 10.7452 0 24 0H819.546Z"
        fill="white"
      />
    </svg>
    <UiPicture :src="event.image" alt="card picture" class="events-card__picture" />
    <div class="events-card__container">
      <div class="events-card__content">
        <h3 class="events-card__content-title">{{ event.title }}</h3>
        <p class="text-md">{{ event.description }}</p>
      </div>
      <div class="events-card__bottom">
        <div class="events-card__col">
          <IconsTime class="events-card__col-icon" />
          <span>{{
            Intl.DateTimeFormat($i18n.locale, { dateStyle: 'long' }).format(new Date(event.date))
          }}</span>
        </div>
        <div class="events-card__col">
          <IconsLocation class="events-card__col-icon" />
          <span>{{ event.location }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  event: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.events-card {
  display: grid;
  grid-template-columns: 1fr 1.94fr;
  gap: max(3.6rem, 16px);
  border-radius: max(2.4rem, 20px);
  overflow: hidden;
  position: relative;
  @media screen and (max-width: vars.$bp-md) {
    grid-template-columns: 1fr;
  }
  & > *:not(.events-card__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset: 0;
    &--desktop {
      @media screen and (max-width: vars.$bp-md) {
        display: none;
      }
    }
    &--mobile {
      height: 100%;
      @media screen and (min-width: vars.$bp-md) {
        display: none;
      }
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 6rem;
    padding-bottom: max(2rem, 16px);
    padding-right: max(3.2rem, 16px);
    @media screen and (max-width: vars.$bp-md) {
      padding-left: max(3.2rem, 16px);
      padding-top: 0;
      padding-bottom: 47px;
      gap: max(2rem, 16px);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 10px);
    &-title {
      @include mix.heading-ml(20px);
    }
  }
  &__picture {
    @media screen and (max-width: vars.$bp-md) {
      aspect-ratio: 343/240;
    }
  }
  &__bottom {
    padding-top: max(2rem, 16px);
    border-top: 1px solid rgba(vars.$clr-placeholder, 0.2);
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: vars.$bp-sm) {
      flex-direction: column;
      gap: 12px;
    }
  }
  &__col {
    display: flex;
    align-items: center;
    gap: 8px;
    color: rgba(vars.$clr-text-primary, 0.78);
    &-icon {
      width: 24px;
      fill: vars.$clr-blue-light;
    }
  }
}
</style>
