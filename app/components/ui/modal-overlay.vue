<template>
  <Teleport to="body">
    <Transition name="fade">
      <div v-if="model" class="modal-overlay" @click.self="model = false">
        <div class="modal" data-lenis-prevent>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
const { $lenis } = useNuxtApp();
const model = defineModel({
  type: Boolean
});
watchEffect(() => {
  if (!import.meta.client) return;
  document.body.classList.toggle('overflow-hidden', model.value);
  if (model.value) $lenis.stop();
  else $lenis.start();
});
</script>

<style lang="scss" scoped>
.modal {
  flex-basis: 47.3%;
  position: relative;
  transition: all 1s;
  display: flex;
  background-color: #fff;
  overflow-y: auto;
  cursor: auto;
  @media screen and (max-width: vars.$bp-lg) {
    flex-basis: 70%;
  }
  @media screen and (max-width: vars.$bp-sm) {
    flex-basis: 100%;
    max-height: 93.3%;
    align-self: flex-end;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    scrollbar-width: 0;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  &-overlay {
    display: flex;
    justify-content: flex-end;
    position: fixed;
    inset: 0;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 100;
    cursor: pointer;
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 1s;
}
.fade-enter-from,
.fade-leave-to {
  background-color: transparent;
  & > * {
    transform: translateX(100%);
    @media screen and (max-width: vars.$bp-sm) {
      transform: translateY(100%);
    }
  }
}
</style>
