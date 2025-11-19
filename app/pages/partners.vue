<template>
  <UiCurvedContainer :title="$t('partners.title')" :text="$t('partners.text')">
    <main class="partners">
      <UiCategoryFilter v-model="currentFilterID" :items="categories" />
      <UiGeneralCards @assign-data="assignData" />
      <UiFormSection :title="$t('become-partner')" :text="$t('partners.form-desc')" />
    </main>
    <UiInfoModal :data="modalData" />
    <UiFormModal />
  </UiCurvedContainer>
</template>

<script setup>
const currentFilterID = ref(0);
const showInfoModal = useState('showInfoModal', () => false);

const modalData = shallowRef({});
const categories = [
  {
    label: 'All Partners',
    id: 0
  },
  {
    label: 'Insurance',
    id: 1
  },
  {
    label: 'Banking',
    id: 2
  },
  {
    label: 'Career',
    id: 3
  }
];

const assignData = data => {
  modalData.value = data;
  showInfoModal.value = true;
};

usePageSEO('partners');
</script>

<style lang="scss" scoped>
.partners {
  margin-top: -12px;
  display: flex;
  flex-direction: column;
  gap: max(3rem, 24px);
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(40rem, 250px), 1fr));
  column-gap: 2.4rem;
  row-gap: max(3rem, 16px);
}
</style>
