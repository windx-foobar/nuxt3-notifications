import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  modules: ['../src/module'],
  nuxtNotifications: {
    /**
     * @description Наименование компонента уведомлений
     */
    // componentName: 'NuxtNotifications'
  }
});
