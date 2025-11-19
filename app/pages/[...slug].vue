<template>
  <div class="slug">
    <NuxtLink :to="$localePath('/')" class="slug__logo">
      <SvgLogo />
    </NuxtLink>
    <div class="slug__container">
      <div class="slug__content">
        <img class="slug__all" src="/images/original/all.png" />
        <div class="slug__info">
          <h2 class="slug__info-title">{{ $t('slug.title') }}</h2>
          <p class="text-md">{{ $t('slug.text') }}</p>
        </div>
        <UiButton link="/" :label="$t('return-home')" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: false
});
usePageSEO('not-found');
</script>

<style lang="scss" scoped>
.slug {
  padding-top: 14px;
  display: flex;
  flex-direction: column;
  gap: max(2.2rem, 14px);
  min-height: 100vh;
  background: linear-gradient(180deg, #010d1b 0%, #073d77 1.28%);

  &__info {
    display: flex;
    flex-direction: column;
    gap: max(1.2rem, 6px);
    text-align: center;
    align-items: center;
    &-title {
      @include mix.heading-md(24px);
    }
  }
  &__logo {
    margin-inline: var(--spacing-inline);
    display: flex;
  }
  &__all {
    width: max(30rem, 200px);
    align-self: center;
    translate: 15%;
  }
  &__content {
    display: flex;
    flex-direction: column;
    gap: max(3.2rem, 24px);
    align-items: center;
  }
  &__container {
    padding-inline: var(--spacing-inline);
    flex: 1;
    display: grid;
    place-items: center;
    background-color: #fff;
    border-top-left-radius: max(3.2rem, 20px);
    border-top-right-radius: max(3.2rem, 20px);
  }
  &__logo {
    width: 161px;
  }
}
</style>
