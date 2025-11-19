<template>
  <UiLegalBase
    :data="{
      title: $t('terms.title'),
      subtitle: $t('terms.subtitle'),
      items: $tm('terms.items')
    }"
  />
</template>

<script setup>
usePageSEO('terms');
</script>

<style lang="scss" scoped></style>
