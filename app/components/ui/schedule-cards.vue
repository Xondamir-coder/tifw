<template>
  <div class="schedule-cards">
    <UiScheduleCard v-for="(item, i) in items" :key="i" :data="item" />
  </div>
</template>

<script setup>
defineProps({
  items: {
    required: true,
    type: Array
  }
});
const { $gsap } = useNuxtApp();

onMounted(() => {
  $gsap.utils.toArray('.schedule-card').forEach(el => {
    $gsap.from(el, {
      yPercent: 15,
      opacity: 0,
      scrollTrigger: getDefaultScrollTrigger(el, { scrub: false })
    });
  });
});
</script>

<style lang="scss" scoped>
.schedule-cards {
  display: flex;
  flex-direction: column;
  gap: max(1.6rem, 12px);
}
</style>
