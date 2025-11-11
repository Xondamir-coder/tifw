<template>
  <div class="default">
    <LayoutHeader />
    <slot />
    <LayoutFooter />
  </div>
</template>

<style scoped lang="scss">
.default {
  background: linear-gradient(180deg, #010d1b 0%, #073d77 1.28%);
  padding-top: 12px;
}
</style>
