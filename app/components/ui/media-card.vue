<template>
  <NuxtLink :to="$localePath(`/media/${data.id}`)" class="media-card">
    <svg
      class="media-card__bg"
      viewBox="0 0 1300 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M869.106 0C876.961 0 884.319 3.84394 888.806 10.2916L898.838 24.7085C903.325 31.1561 910.683 35 918.538 35H1276C1289.25 35 1300 45.7452 1300 59V296C1300 309.255 1289.25 320 1276 320H24C10.7451 320 0 309.255 0 296V24C0 10.7452 10.7452 0 24 0H869.106Z"
        fill="inherit"
      />
    </svg>
    <svg
      class="media-card__bg"
      viewBox="0 0 343 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M218.531 383.759C221.571 380.11 226.075 378 230.825 378H327.001C335.838 378 343.001 370.837 343.001 362V16C343.001 7.16345 335.838 0 327.001 0H16C7.16344 0 0 7.16345 0 16V384C0 392.837 7.16344 400 16 400H197.506C202.256 400 206.76 397.89 209.8 394.241L218.531 383.759Z"
        fill="inherit"
      />
    </svg>
    <div class="media-card__gallery">
      <UiPicture
        v-for="(picture, index) in data.gallery"
        :key="index"
        :src="picture"
        class="media-card__gallery-pic"
        alt="banner"
      />
    </div>
    <div class="media-card__content">
      <div class="media-card__date">
        <IconsCalendar class="media-card__date-icon" />
        <span>{{ date }}</span>
      </div>
      <h3 class="media-card__title">
        {{ data[`title_${locale}`] }}
      </h3>
      <p class="text-md">{{ data[`body_${locale}`] }}</p>
    </div>
  </NuxtLink>
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
  Intl.DateTimeFormat(locale.value, { dateStyle: 'short' }).format(new Date(props.data.date))
);
</script>

<style lang="scss" scoped>
.media-card {
  display: grid;
  grid-template-columns: 1fr 1.6fr;
  gap: max(4.6rem, 20px);
  border-radius: max(2.4rem, 20px);
  padding: max(2rem, 16px);
  position: relative;
  aspect-ratio: 1300/320;
  fill: #fff;
  transition: fill 0.4s;
  @media screen and (max-width: vars.$bp-md) {
    aspect-ratio: 343/400;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.8fr;
  }
  &:hover {
    fill: vars.$clr-bg-light;
  }
  & > *:not(.media-card__bg) {
    z-index: 1;
  }
  &__title {
    @include mix.heading-md(16px);
  }
  &__bg {
    position: absolute;
    inset: 0;
    &:first-of-type {
      @media screen and (max-width: vars.$bp-md) {
        display: none;
      }
    }
    &:last-of-type {
      @media screen and (min-width: vars.$bp-md) {
        display: none;
      }
    }
  }
  &__gallery {
    position: absolute;
    width: 36%;
    height: 100%;
    bottom: max(2rem, 16px);
    left: max(2rem, 16px);
    display: grid;
    grid-auto-rows: 1fr 0.6fr;
    gap: 4px;
    @media screen and (max-width: vars.$bp-md) {
      height: 55%;
      width: auto;
      bottom: auto;
      top: -5%;
      left: max(2rem, 16px);
      right: max(2rem, 16px);
    }
    &-pic {
      border-radius: max(1rem, 7px);
      &:nth-child(2) {
        grid-row: 2 / span 1;
      }
      &:last-child {
        grid-row: span 2;
        grid-column: 2 / 3;
      }
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 8px);
    @media screen and (min-width: vars.$bp-md) {
      align-self: center;
      grid-column: 2 / span 1;
    }
    @media screen and (max-width: vars.$bp-md) {
      grid-row: 2 / span 1;
    }
  }
  &__date {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    &-icon {
      width: max(2.4rem, 20px);
      fill: #073d77;
    }
  }
}
</style>
