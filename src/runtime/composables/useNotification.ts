import { useNuxtApp } from '#imports';

export function useNotification() {
  const nuxt = useNuxtApp();

  return {
    notify: nuxt.vueApp.config.globalProperties.$notify
  };
}
