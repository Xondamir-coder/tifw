<template>
  <UiCurvedContainer :title="$t('accreditation.title')" :text="$t('accreditation.subtitle')">
    <div class="accreditation-container">
      <div class="accreditation-container__card">
        <div
          v-for="(item, index) in $tm('accreditation.items')"
          :key="index"
          class="accreditation-container__box"
        >
          <h3 class="accreditation-container__title">{{ $rt(item.title) }}</h3>
          <p class="text-md">{{ $rt(item.text) }}</p>
        </div>
      </div>
      <div class="accreditation-container__card">
        <p class="text-md">
          <span>{{ $t('accreditation.available') }}</span>
          <a
            href="https://gov.uz/en/mfa/sections/xorijiy-jurnalistlarni-akkreditasiyadan-o-tkazish-tartibi"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://gov.uz/en/mfa/sections/xorijiy-jurnalistlarni-akkreditasiyadan-o-tkazish-tartibi
          </a>
        </p>
      </div>
      <div class="accreditation-container__card">
        <h3 class="accreditation-container__title">{{ $t('accreditation.contacts') }}</h3>
        <div class="accreditation-container__row">
          <div class="accreditation-container__icon-container">
            <IconsMail class="accreditation-container__icon" />
          </div>
          <a class="accreditation-container__row-action" href="mailto:media@tiif.online">
            media@tiif.online
          </a>
        </div>
      </div>
    </div>
  </UiCurvedContainer>
</template>

<script setup>
import { SplitText } from 'gsap/SplitText';

const { $gsap } = useNuxtApp();

onMounted(() => {
  const els = '.accreditation-container__title, .accreditation-container .text-md';
  $gsap.set(els, {
    opacity: 1
  });
  $gsap.set('.accreditation-container__row', {
    opacity: 1
  });
  SplitText.create(els, {
    type: 'lines',
    mask: 'lines',
    onSplit: self => {
      const tl = $gsap.timeline({
        delay: 0.2
      });
      tl.from(self.lines, {
        yPercent: 100,
        stagger: 0.1
      });
      tl.from(
        '.accreditation-container__row',
        {
          opacity: 0,
          yPercent: 25
        },
        '-=0.2'
      );
    }
  });
});
</script>

<style lang="scss" scoped>
.accreditation-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
  &__card {
    border-radius: max(2rem, 16px);
    padding: max(3.2rem, 16px);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    h3,
    p {
      opacity: 0;
    }
    a[href^='https'] {
      color: #3399cc;
    }
    a:hover {
      text-decoration: underline;
    }
    &:last-child {
      gap: 12px;
    }
  }
  &__box {
    display: flex;
    flex-direction: column;
    gap: max(1.6rem, 12px);
    margin-bottom: max(1.6rem, 12px);
    &:last-child {
      padding-top: max(1.6rem, 12px);
      margin-bottom: 0;
      border-top: 1px solid #e3e5ea;
    }
  }
  &__title {
    font-size: max(2.4rem, 16px);
    font-weight: 400;
    line-height: 1.35;
  }
  &__row {
    opacity: 0;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: max(2rem, 14px);
    color: vars.$clr-text-primary;
    font-family: vars.$font-prosto;
  }
  &__icon {
    width: 54.545454%;
    &-container {
      @include mix.flex-center;
      width: max(4.4rem, 36px);
      height: max(4.4rem, 36px);
      background-color: #f1f2f4;
      border-radius: max(1rem, 8px);
      fill: #034c8c;
    }
  }
}
</style>
