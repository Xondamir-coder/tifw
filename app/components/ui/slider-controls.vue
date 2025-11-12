<template>
  <div class="slider-controls">
    <!-- Prev -->
    <button
      class="slider-controls__arrow"
      :disabled="currentIndex === 0"
      @click="handeSlide('prev')"
    >
      <IconsArrowLeft />
    </button>

    <!-- Dots -->
    <div class="slider-controls__dots">
      <span
        v-for="(dot, i) in total"
        :key="i"
        :class="['slider-controls__dot', { 'slider-controls__dot--active': i === currentIndex }]"
      />
    </div>

    <!-- Next -->
    <button
      class="slider-controls__arrow"
      :disabled="currentIndex === total - 1"
      @click="handeSlide('next')"
    >
      <IconsArrowRight />
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  swiper: {
    required: true,
    type: Object
  }
});
defineEmits(['prev', 'next']);

const currentIndex = ref(0);
const total = computed(() => props.swiper?.snapGrid?.length ?? 0);

const handeSlide = direction => {
  if (direction === 'next') {
    props.swiper.slideNext();
  } else {
    props.swiper.slidePrev();
  }
};

onMounted(async () => {
  await nextTick();

  currentIndex.value = props.swiper.activeIndex;
  props.swiper.on('slideChange', () => {
    currentIndex.value = props.swiper.activeIndex;
  });
});
</script>

<style lang="scss" scoped>
.slider-controls {
  z-index: 2;
  max-width: 100%;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: flex-start;
  gap: max(6rem, 20px);
  flex-wrap: wrap;

  &__arrow {
    @include mix.flex-center;
    width: 50px;
    height: 50px;
    background: #ffffff0a;
    border: 1px solid #ffffff1f;
    border-radius: 4px;
    transition: all 0.4s;
    &:not(:disabled):hover {
      background-color: #fff;
      svg {
        stroke: #000;
      }
    }
    &:disabled {
      opacity: 0.25;
    }
    svg {
      fill: none;
      stroke: #fff;
      width: 48%;
      transition: stroke 0.4s;
    }
  }

  &__dots {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: max(3.2rem, 16px);
  }

  &__dot {
    width: 28px;
    height: 6px;
    background: #205084;
    transition: all 0.4s;

    &--active {
      background: #fff;
      transform: scaleY(1.7);
    }
  }
}
</style>
