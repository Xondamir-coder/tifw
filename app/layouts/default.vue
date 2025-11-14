<template>
  <div class="default" :style="layoutStyle">
    <SvgHeroSubtract />
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup>
const route = useRoute();

const layoutStyle = computed(() => ({
  background: route.name.includes('index')
    ? 'background: linear-gradient(180deg, #010d1b 0%, #073d77 45.67%)'
    : ''
}));
</script>

<style scoped lang="scss">
.default {
  background: linear-gradient(180deg, #010d1b 0%, #073d77 1.28%);
  // padding-top: calc(max(7rem, 50px) + 20px);
  position: relative;
  @media screen and (max-width: vars.$bp-md) {
    padding-top: calc(42px + 28px);
  }
}
</style>
