import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module'],
  telemetry: false,
  devtools: {
    enabled: false
  },
  nuxtNotifications: {
    /**
     * @description Наименование компонента уведомлений
     */
    // componentName: 'NuxtNotifications',
    /**
     * @description Наименование composable уведомлений
     */
    // composableName: 'useNotification',
  }
});
