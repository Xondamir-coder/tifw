<template>
  <main class="home">
    <HomeHero />
    <HomeAbout />
    <HomeEventHighlight />
    <HomeSpeakers />
    <HomeParticipantsInfo />
    <HomeSchedule />
    <HomeParticipants />
    <HomePromo />
  </main>
</template>

<script setup>
usePageSEO('index');
onMounted(() => {
  useAnimateTypography();
});
</script>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}
</style>
