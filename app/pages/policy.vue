<template>
  <UiLegalBase
    :data="{
      title: $t('policy.title'),
      subtitle: $t('policy.subtitle'),
      items: $tm('policy.items')
    }"
  />
</template>

<script setup>
usePageSEO('policy');
</script>

<style lang="scss" scoped></style>
