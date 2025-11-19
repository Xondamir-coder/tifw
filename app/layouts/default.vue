<template>
  <div class="default" :class="{ home: $route.name.includes('index') }">
    <SvgHeroSubtract />
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<script setup>
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const router = useRouter();

if (import.meta.client) {
  router.afterEach(() => {
    nextTick(() => {
      ScrollTrigger.refresh();
    });
  });
}
</script>

<style scoped lang="scss">
.default {
  --end: 1.28%;
  position: relative;
  background: linear-gradient(180deg, #010d1b 0%, #073d77 var(--end));

  &.home {
    --end: 10%;
  }
  @media screen and (max-width: vars.$bp-md) {
    padding-top: calc(42px + 28px);
  }
}
</style>
