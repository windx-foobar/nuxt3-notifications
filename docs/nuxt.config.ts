import { name } from '../package.json';

export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',
  devtools: { enabled: false },
  modules: ['../src/module.ts'],
  app: {
    baseURL: `/${name}`
  },
  imports: {
    autoImport: true
  }
});
