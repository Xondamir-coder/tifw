<template>
  <div class="curved-container">
    <div class="section-header">
      <h1 class="heading-lg">{{ title }}</h1>
      <p class="section-subtitle">{{ text }}</p>
    </div>
    <slot />
  </div>
</template>

<script setup>
defineProps({
  title: {
    default: '',
    type: String
  },
  text: {
    default: '',
    type: String
  }
});
</script>

<style lang="scss" scoped>
.curved-container {
  padding-inline: var(--spacing-inline);
  padding-block: vars.$spacing-block;
  background-color: vars.$clr-c;
  border-top-left-radius: max(3.2rem, 16px);
  border-top-right-radius: max(3.2rem, 16px);
  display: flex;
  flex-direction: column;
  gap: max(6rem, 32px);
}
</style>
