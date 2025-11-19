<template>
  <UiCurvedContainer>
    <div class="legal-base">
      <h1 class="heading-lg">{{ data.title }}</h1>
      <p class="text-md">{{ data.subtitle }}</p>
      <div v-for="(item, index) in data.items" :key="index" class="card">
        <h2 class="card__title">{{ $rt(item.title) }}</h2>
        <p v-if="item.subtitle" class="text-md">{{ $rt(item.subtitle) }}</p>
        <ul class="card__list">
          <li v-for="(bullet, i) in item.bullets" :key="i" class="card__bullet">
            {{ $rt(bullet) }}
          </li>
        </ul>
      </div>
    </div>
  </UiCurvedContainer>
</template>

<script setup>
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.set('.legal-base>*', {
    opacity: 1
  });
  const items = $gsap.utils.toArray('.legal-base>*');
  items.forEach((el, i) => {
    if (isOutOfViewport(el)) {
      $gsap.from(el, {
        y: 20,
        opacity: 0,
        scrollTrigger: getDefaultScrollTrigger(el, { scrub: false })
      });
    } else {
      $gsap.from(el, {
        y: 20,
        opacity: 0,
        delay: i * 0.1
      });
    }
  });
});

defineProps({
  data: {
    required: true,
    type: Object
  }
});
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  gap: 12px;
  &__list {
    padding-left: max(2rem, 10px);
    list-style-type: disc;
    display: flex;
    flex-direction: column;
    gap: 3px;
    line-height: 1.6;
  }
  &__title {
    font-size: max(2.4rem, 20px);
  }
}
.legal-base {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 16px);
  & > * {
    opacity: 0;
  }
}
</style>
