<template>
  <div class="events-card">
    <svg
      class="events-card__bg"
      viewBox="0 0 1300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M819.546 0C827.354 0 834.675 3.79881 839.17 10.1837L849.472 24.8163C853.967 31.2012 861.287 35 869.096 35H1276C1289.25 35 1300 45.7452 1300 59V296C1300 309.255 1289.25 320 1276 320H24C10.7451 320 0 309.255 0 296V24C0 10.7452 10.7452 0 24 0H819.546Z"
        fill="white"
      />
    </svg>
    <UiPicture :src="event.image" class="events-card__picture" />
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
    background-color: #fff;
  }
  & > *:not(.events-card__bg) {
    z-index: 1;
  }
  &__bg {
    position: absolute;
    inset: 0;
    @media screen and (max-width: vars.$bp-md) {
      display: none;
    }
  }
  &__container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 6rem;
    padding-bottom: max(2rem, 16px);
    padding-right: 3.2rem;
    @media screen and (max-width: vars.$bp-md) {
      padding-left: 3.2rem;
      padding-top: 0;
      gap: max(2rem, 16px);
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;
    &-title {
      color: vars.$clr-text-primary;
      font-family: vars.$font-prosto;
      line-height: 1.25;
      font-size: max(3.6rem, 26px);
    }
  }
  &__picture {
  }
  &__bottom {
    padding-top: max(2rem, 16px);
    border-top: 1px solid rgba(vars.$clr-placeholder, 0.2);
    display: flex;
    justify-content: space-between;
    @media screen and (max-width: vars.$bp-sm) {
      flex-direction: column;
      gap: 8px;
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
