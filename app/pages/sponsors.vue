<template>
  <UiCurvedContainer :title="$t('sponsors.title')" :text="$t('sponsors.text')">
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

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(40rem, 250px), 1fr));
  column-gap: 2.4rem;
  row-gap: max(3rem, 16px);
}
</style>
