<template>
  <UiCurvedContainer :title="$t('media.title')" :text="$t('media.subtitle')">
    <div class="list">
      <UiMediaCard v-for="(card, index) in media" :key="index" :data="card" />
    </div>
  </UiCurvedContainer>
</template>

<script setup>
const { media } = useApiStore();
const { $gsap } = useNuxtApp();

onMounted(() => {
  const items = $gsap.utils.toArray('.media-card');
  $gsap.set('.media-card', {
    opacity: 1
  });
  items.forEach((el, i) => {
    if (isOutOfViewport(el)) {
      $gsap.from(el, {
        y: 25,
        opacity: 0,
        scrollTrigger: getDefaultScrollTrigger(el, { scrub: false })
      });
    } else {
      $gsap.from(el, {
        y: 25,
        opacity: 0,
        delay: i * 0.1 + 0.3
      });
    }
  });
});
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: max(6rem, 50px);
  & > * {
    opacity: 0;
  }
}
</style>
