<template>
  <UiCurvedContainer :title="$t('participants.title')" :text="$t('participants.text')">
    <UiGeneralCards @assign-data="assignData" />
    <UiInfoModal :data="modalData" />
  </UiCurvedContainer>
</template>

<script setup>
const showInfoModal = useState('showInfoModal', () => false);
const modalData = shallowRef({});

const assignData = data => {
  modalData.value = data;
  showInfoModal.value = true;
};
</script>

<style lang="scss" scoped></style>
