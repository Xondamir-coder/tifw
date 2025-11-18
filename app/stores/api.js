import { defineStore } from 'pinia';
import dummySpeakers from '~/assets/data/speakers.json';
import dummyMedia from '~/assets/data/media.json';

export const useApiStore = defineStore('api', () => {
  const speakers = ref(dummySpeakers);
  const media = ref(dummyMedia);

  return {
    speakers,
    media
  };
});
