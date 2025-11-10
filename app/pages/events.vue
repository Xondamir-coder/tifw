<template>
  <UiCurvedContainer :title="$t('events.title')" :text="$t('events.text')">
    <div class="list">
      <UiEventsCard v-for="(event, index) in events" :key="index" :event />
    </div>
  </UiCurvedContainer>
</template>

<script setup>
const events = [
  {
    image: 'events-1.jpg',
    title: 'Bank Expo',
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и банковских услуг. Здесь собираются представители банков, финтех-компаний и эксперты, чтобы обсудить инновации и обменяться опытом',
    date: new Date('2023-07-27'),
    location: 'Выставочный центр TIFW, павильон №2'
  },
  {
    image: 'events-2.jpg',
    title: 'Insurance Expo',
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и банковских услуг. Здесь собираются представители банков, финтех-компаний и эксперты, чтобы обсудить инновации и обменяться опытом',
    date: new Date('2023-07-27'),
    location: 'Выставочный центр TIFW, павильон №2'
  },
  {
    image: 'events-3.jpg',
    title: 'Career',
    description:
      'рупный форум, посвящённый будущему финансовых технологий, цифровых платёжных систем и банковских услуг. Здесь собираются представители банков, финтех-компаний и эксперты, чтобы обсудить инновации и обменяться опытом',
    date: new Date('2023-07-27'),
    location: 'Выставочный центр TIFW, павильон №2'
  }
];
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  flex-direction: column;
  gap: max(3rem, 16px);
}
</style>
