<template>
  <UiCurvedContainer :title="$t('sponsors.title')" :text="$t('sponsors.text')">
    <div class="list">
      <button v-for="(participant, i) in participants" :key="i" @click="handleModal(participant)">
        <UiGeneralCard :data="participant" />
      </button>
    </div>
    <UiInfoModal :data="modalData" />
  </UiCurvedContainer>
</template>

<script setup>
import {
  IconsCar,
  IconsHeart,
  IconsMoneyCase,
  IconsTravel,
  SvgIpb,
  SvgMastercard,
  SvgZiraat
} from '#components';

const showInfoModal = useState('showInfoModal', () => false);
const modalData = shallowRef({});

const handleModal = data => {
  modalData.value = data;
  showInfoModal.value = true;
};

const participants = [
  {
    logo: SvgIpb,
    name: 'Ipakyuli bank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgZiraat,
    name: 'Ziraatbank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgMastercard,
    name: 'Mastercard',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgIpb,
    name: 'Ipakyuli bank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgZiraat,
    name: 'Ziraatbank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgMastercard,
    name: 'Mastercard',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgIpb,
    name: 'Ipakyuli bank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgZiraat,
    name: 'Ziraatbank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgMastercard,
    name: 'Mastercard',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgIpb,
    name: 'Ipakyuli bank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgZiraat,
    name: 'Ziraatbank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgMastercard,
    name: 'Mastercard',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgIpb,
    name: 'Ipakyuli bank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgZiraat,
    name: 'Ziraatbank',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  },
  {
    logo: SvgMastercard,
    name: 'Mastercard',
    image: 'kapital-bank.jpg',
    text: 'Insurance services',
    areas: [
      {
        icon: IconsHeart,
        text: 'Life and health insurance services'
      },
      {
        icon: IconsCar,
        text: 'Car insurance (OSAGO, KASKO)'
      },
      {
        icon: IconsMoneyCase,
        text: 'Corporate insurance packages'
      },
      {
        icon: IconsTravel,
        text: 'Travel insurance'
      }
    ],
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и '
  }
];
</script>

<style lang="scss" scoped>
.list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(max(40rem, 250px), 1fr));
  column-gap: 2.4rem;
  row-gap: max(3rem, 16px);
}
</style>
