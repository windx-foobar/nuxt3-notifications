import { notify } from '@kyvg/vue3-notification';

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.config.globalProperties.$notify = notify;
});
