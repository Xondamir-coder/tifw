import { defineStore } from 'pinia';
import dummySpeakers from '~/assets/data/speakers.json';

export const useApiStore = defineStore('api', () => {
  const speakers = ref(dummySpeakers);

  return {
    speakers
  };
});
