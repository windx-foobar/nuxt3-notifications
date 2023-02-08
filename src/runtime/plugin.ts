import Notifications from '@kyvg/vue3-notification';

import { defineNuxtPlugin, useRuntimeConfig } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  const {
    nuxtNotifications: { componentName = 'NuxtNotifications' }
  } = useRuntimeConfig().public;

  nuxtApp.vueApp.use(Notifications, {
    name: 'notify',
    componentName,
    velocity: undefined
  });
});
