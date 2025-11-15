<template>
  <form class="form" @submit.prevent="submitForm">
    <div v-for="(row, index) in rows" :key="index" class="form__row">
      <span class="form__label">{{ row.label }}</span>
      <input
        v-model="row.model.value"
        :type="row.type"
        :placeholder="row.placeholder"
        class="form__input"
        required
        @input="row.type === 'tel' ? validatePhoneNumber() : null"
      />
    </div>
    <div class="form__bottom">
      <UiButton :label="t('form.send-request')" />
      <div class="form__policy">
        <span>{{ t('form.approval') }} &ThinSpace;</span>
        <NuxtLink :to="$localePath('/privacy-policy')"> {{ t('form.policy') }} </NuxtLink>
      </div>
    </div>
  </form>
</template>

<script setup>
const { t } = useI18n();
const route = useRoute();

const showSuccessModal = useState('showSuccessModal');
const showFormModal = useState('showFormModal');

const name = ref('');
const tel = ref('');
const organization = ref('');

const rows = computed(() => [
  {
    label: t('form.organization.label'),
    placeholder: t('form.organization.placeholder'),
    type: 'text',
    model: organization
  },
  {
    label: t('form.full-name.label'),
    placeholder: t('form.full-name.placeholder'),
    type: 'text',
    model: name
  },
  {
    label: t('form.mobile-phone.label'),
    placeholder: t('form.mobile-phone.placeholder'),
    type: 'tel',
    model: tel
  }
]);

const submitForm = async () => {
  // try {
  //   const res = await $fetch(`${API_URL}/enquiry`, {
  //     method: 'POST',
  //     body: objectToFormData({
  //       name: name.value,
  //       phone: tel.value,
  //       organization: organization.value,
  //       page_name: route.name.split('___')[0],
  //       page_link: window.location.href
  //     })
  //   });
  //   console.log(res);
  //   showFormModal.value = false;
  //   showSuccessModal.value = true;
  // } catch (error) {
  //   console.error(error);
  // } finally {
  //   setTimeout(() => {
  //     showSuccessModal.value = false;
  //     showFormModal.value = false;
  //   }, 3000);
  // }
};

const validatePhoneNumber = () => {
  const regex = /^[+\d\s]+$/;
  if (!regex.test(tel.value)) {
    tel.value = tel.value.replace(/[^+\d\s]/g, '');
  }
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  flex-direction: column;
  gap: max(2.4rem, 16px);
  &--modal {
    .form__bottom {
      flex-direction: column;
      align-items: stretch;
    }
  }

  &__row {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__label {
    font-weight: 700;
    font-size: 17px;
    opacity: 0.8;
    color: #271f0c;
  }

  &__input {
    font-weight: 400;
    font-size: 16px;
    padding-block: 18px;
    padding-inline: 20px;
    border: 1px solid #cbd5e0;
    border-radius: 12px;
    transition: border-color 0.3s;

    &:user-invalid {
      border-color: #ff0000;
    }
    &:user-valid {
      border-color: #008b5f;
    }
    &:focus {
      border-color: vars.$clr-accent;
    }
    &::placeholder {
      opacity: 0.6;
    }
  }

  &__button {
    background-color: vars.$clr-accent;
    min-width: max(32%, 200px);
    padding-block: max(12px, 1.7rem);
    color: #fff;
    font-size: max(16px, 1.7rem);
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    border-radius: max(10px, 1.2rem);
    transition: background-color 0.3s, color 0.3s;
    fill: #fff;

    &:disabled {
      background-color: #e9eaec;
      color: #a0aec0;
      fill: #a0aec0;
    }
    &:not(:disabled):hover {
      background-color: #fff;
      color: vars.$clr-accent;

      svg {
        fill: vars.$clr-accent;
      }
    }
  }

  &__arrow {
    width: 24px;
  }

  &__bottom {
    display: flex;
    align-items: center;
    gap: max(2.4rem, 16px);
    font-size: 16px;
    font-weight: 500;
    line-height: 1.2;
    color: #687588;
    @media screen and (max-width: vars.$bp-sm) {
      flex-direction: column;
      align-items: stretch;
    }
    button {
      flex-basis: 40%;
    }
    a {
      text-decoration: underline;
      color: #005fcc;
    }
  }
}
</style>
