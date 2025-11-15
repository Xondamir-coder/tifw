<template>
  <UiModalOverlay v-model="showFormModal">
    <div class="form-modal">
      <div class="form-modal__header">
        <h3 class="heading-ml">{{ $t('become-partner') }}</h3>
        <p class="text-md">{{ $t('form-modal.text') }}</p>
        <button class="form-modal__close" @click="showFormModal = false">
          <IconsX class="form-modal__close-icon" />
        </button>
      </div>
      <UiForm />
    </div>
  </UiModalOverlay>
</template>

<script setup>
const showFormModal = useState('showFormModal');
</script>

<style scoped lang="scss">
.form-modal {
  display: flex;
  flex-direction: column;
  gap: max(5rem, 36px);
  flex: 1;
  padding-inline: max(3rem, 16px);
  padding-top: max(3.2rem, 22px);
  padding-bottom: max(17.4rem, 100px);

  &__header {
    display: grid;
    grid-auto-columns: 1fr auto;
    grid-template-areas:
      'title close'
      'text text';
    row-gap: max(1.3rem, 5px);
    h3 {
      grid-area: title;
    }
    p {
      grid-area: text;
    }
  }
  &__close {
    grid-area: close;
    width: max(5rem, 40px);
    height: max(5rem, 40px);
    border-radius: 12px;
    background: #fafafa;
    border: 1px solid #cbd5e0;
    stroke: #111827;
    transition: all 0.4s;
    @include mix.flex-center;
    &:hover {
      background-color: #cbd5e0;
      stroke: #fff;
    }
    &-icon {
      width: 48%;
    }
  }
}
</style>
