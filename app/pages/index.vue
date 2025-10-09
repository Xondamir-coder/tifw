<template>
  <main class="soon">
    <SvgLogo class="soon__logo" />
    <div class="soon__content">
      <span class="soon__content-label">WE ARE</span>
      <h1 class="soon__content-title">Developing our website</h1>
      <p class="soon__content-text">We are going to launch our website very soon</p>
    </div>
    <a
      href="https://spacelabs.studio"
      target="_blank"
      rel="noopener noreferrer"
      class="soon__spacelabs"
    >
      <span class="soon__spacelabs-label">developer</span>
      <SvgSpacelabs class="soon__spacelabs-logo" />
    </a>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped>
.soon {
  // temporary only for soon page
  // using em instead of rem
  min-height: 100vh;
  font-size: min(100vw / (1512 / 10), 1920 / 1512 * 10px);
  font-family: 'Itim', sans-serif;
  background: radial-gradient(
      63.5% 100% at 69.35% 100%,
      rgba(232, 180, 90, 0.16) 0%,
      rgba(3, 99, 140, 0.16) 100%
    )
    /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  padding-inline: max(6em, 12px);
  padding-block: max(6em, 20px);
  align-items: center;
  justify-content: space-between;
  & > * {
    animation: slide-from-bottom-20 1s backwards;
    @for $i from 1 through 10 {
      &:nth-child(#{$i}) {
        animation-delay: $i * 0.2s;
      }
    }
  }
  &__spacelabs {
    display: flex;
    gap: 8px;
    align-items: center;
    color: #03638c;
    fill: #03638c;
    &:hover {
      & > *:first-child {
        transform: translateX(-4px);
      }
      & > *:last-child {
        transform: scale(1.05) translateX(4px);
      }
    }
    &-label {
      transition: transform 0.2s;
      font-family: 'Russo One', sans-serif;
      font-size: max(2em, 20px);
    }
    &-logo {
      transition: transform 0.2s;
      width: max(13em, 100px);
    }
  }
  &__logo {
    width: max(19.7em, 100px);
    align-self: flex-start;
  }
  &__content {
    margin-bottom: calc((140 - 60) * 0.1em);
    color: #03638c;
    line-height: 1;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    &-title {
      color: #e8b45a;
      font-size: max(6.4em, 32px);
    }
    &-label {
      font-size: max(2em, 14px);
    }
    &-text {
      font-size: max(2.4em, 18px);
      margin-top: 1.6em;
      @media screen and (max-width: 768px) {
        margin-top: 12px;
      }
    }
  }
}
</style>
