<template>
  <footer class="footer">
    <UiPicture src="footer-banner.jpg" alt="footer banner" class="footer__banner" />
    <div class="footer__top">
      <div class="footer__content">
        <h2 class="footer__title heading-lg">
          {{ $t('footer.title') }}
        </h2>
      </div>

      <div class="footer__social">
        <h6 class="heading-sm clr-white">{{ $t('footer.follow') }}</h6>
        <ul class="footer__icons">
          <li>
            <a href="#" aria-label="Facebook" class="footer__icon">
              <IconsFacebook />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Twitter" class="footer__icon">
              <IconsTwitter />
            </a>
          </li>
          <li>
            <a href="#" aria-label="Instagram" class="footer__icon">
              <IconsInstagram />
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="footer__bottom">
      <p class="footer__copyright text-sm">
        {{ $t('footer.copyright', { year: new Date().getFullYear() }) }}
      </p>
    </div>
  </footer>
</template>

<script setup>
import { SplitText } from 'gsap/SplitText';
const { $gsap } = useNuxtApp();

onMounted(() => {
  SplitText.create('.footer__title', {
    type: 'words',
    mask: 'words',
    onSplit: self => {
      $gsap.from(self.words, {
        yPercent: -100,
        scrollTrigger: {
          trigger: self.elements[0],
          start: 'top bottom',
          endTrigger: '.footer',
          end: 'bottom bottom'
        }
      });
    }
  });
  $gsap.from('.footer__icon', {
    stagger: 0.1,
    scale: 0,
    scrollTrigger: {
      trigger: '.footer__icons',
      start: 'top bottom',
      endTrigger: '.footer',
      end: 'bottom bottom'
    }
  });
});
</script>

<style lang="scss" scoped>
.footer {
  background: linear-gradient(180deg, #061a3c 0%, #0e2a5d 100%);
  color: #fff;
  padding-top: max(6rem, 30px);
  padding-bottom: max(3rem, 16px);
  padding-inline: var(--spacing-inline);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  &__copyright {
    font-size: 14px;
    @media screen and (max-width: vars.$bp-md) {
      text-align: left;
    }
  }
  &__banner {
    position: absolute;
    top: 50%;
    translate: 0 -40%;
    left: 0;
    opacity: 0.32;
    min-width: 1440px;
    @media screen and (max-width: vars.$bp-lg) {
      top: 50%;
      left: 50%;
      translate: -54% -39%;
    }
  }

  &__top {
    z-index: 1;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border-bottom: 1px solid #ffffff4d;
    gap: 16.2rem;
    padding-bottom: max(6rem, 30px);
    @media screen and (max-width: vars.$bp-lg) {
      grid-template-columns: 1fr;
      gap: 139px;
    }
  }

  &__title {
    padding-left: max(2.4rem, 24px);
    border-left: 4px solid #fff;
    color: #fff;
  }

  &__social {
    display: flex;
    flex-direction: column;
    gap: max(4rem, 20px);
  }

  &__icons {
    display: flex;
    fill: #ffffff;
    align-items: center;
    gap: max(1.6rem, 16px);

    li:last-child {
      fill: none;
    }
  }

  &__icon {
    width: 32px;
    height: 32px;
    stroke: #ffffff;
    transition: opacity 0.2s ease;
    display: flex;

    &:hover {
      opacity: 0.8;
    }
  }

  &__bottom {
    z-index: 1;
    margin-top: max(2.7rem, 20px);
    text-align: right;
    opacity: 0.4;
  }
}
</style>
