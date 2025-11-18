<template>
  <UiCurvedContainer>
    <div class="media">
      <h1 class="media__title">{{ currentMedia?.[`title_${locale}`] }}</h1>
      <div class="media__list">
        <UiPicture
          v-for="image in [
            ...currentMedia?.gallery,
            ...currentMedia?.gallery,
            ...currentMedia?.gallery,
            ...currentMedia?.gallery,
            ...currentMedia?.gallery,
            ...currentMedia?.gallery,
            ...currentMedia?.gallery,
            ...currentMedia?.gallery
          ]"
          :key="image"
          :src="image"
          alt="media"
          class="media__image"
        />
      </div>
    </div>
  </UiCurvedContainer>
</template>

<script setup>
import { SplitText } from 'gsap/SplitText';

const { locale } = useI18n();
const route = useRoute();
const { media } = useApiStore();
const { $gsap } = useNuxtApp();

const currentMedia = computed(() => media.find(m => m.id === +route.params.id));

onMounted(() => {
  $gsap.set('.media__title, .media__list', {
    opacity: 1
  });

  SplitText.create('.media__title', {
    type: 'words',
    mask: 'words',
    onSplit: self => {
      $gsap.from(self.words, {
        yPercent: 100,
        stagger: {
          from: 'random',
          each: 0.05
        }
      });
    }
  });

  $gsap.utils.toArray('.media__image').forEach((el, i) => {
    if (isOutOfViewport(el)) {
      $gsap.from(el, {
        y: 20,
        opacity: 0,
        scrollTrigger: getDefaultScrollTrigger(el, { scrub: false })
      });
    } else {
      $gsap.from(el.lastElementChild, {
        scale: 1.1,
        opacity: 0,
        duration: 1,
        delay: i * 0.1 + 0.5
      });
    }
  });
});
</script>

<style lang="scss" scoped>
.media {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 20px);
  &__title {
    align-self: center;
    opacity: 0;
    @include mix.heading-md(20px);
  }
  &__image {
    aspect-ratio: 319/220;
    border-radius: 4px;
  }
  &__list {
    opacity: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(max(31.9rem, 300px), 100%), 1fr));
    gap: 8px;
  }
}
</style>
