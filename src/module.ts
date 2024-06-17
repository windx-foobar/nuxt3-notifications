import { fileURLToPath } from 'node:url';
import { type Nuxt } from '@nuxt/schema';
import { pascalCase } from 'scule';
import { defu } from 'defu';
import { defineNuxtModule, addPlugin, createResolver, useLogger, addImports, addTemplate, addImportsDir } from '@nuxt/kit';

const PACKAGE_NAME = 'nuxt-notifications';

export interface ModuleOptions {
  componentName: string | undefined;
}

// Look at the latest feature nuxt@^3.11
// https://github.com/nuxt/nuxt/commit/cebc89186e30a5e5faea2e1823cd07d5bfcf1488#diff-da67aaec25500121cfcdb6de885cf79fa10e2211c93225dfa6951323d1e93298R27
const updateRuntimeConfig = (nuxt: Nuxt, runtimeConfig: Record<string, unknown> = {}) => {
  Object.assign(nuxt.options.runtimeConfig, defu(runtimeConfig, nuxt.options.runtimeConfig));
  Object.assign(nuxt.options.nitro.runtimeConfig as Record<string, unknown>, defu(runtimeConfig, nuxt.options.nitro.runtimeConfig));
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: PACKAGE_NAME,
    configKey: 'nuxtNotifications',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    componentName: 'NuxtNotifications'
  },
  setup(options, nuxt) {
    const logger = useLogger(PACKAGE_NAME);

    let { componentName } = options;
    componentName = pascalCase(componentName!);

    logger.info('Starting setup');

    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

    updateRuntimeConfig(nuxt, { public: { nuxtNotifications: { componentName } } });

    // GLOBAL useNotification hook
    addImportsDir(resolve('./runtime/composables'));

    // TYPING DYNAMIC COMPONENT
    addTemplate({
      filename: 'nuxt-notifications.d.ts',
      src: resolve('../templates/nuxt-notifications.ejs'),
      options: { componentName }
    });

    // ADD MODULE TYPING TO GLOBAL REFERENCE
    nuxt.hook('prepare:types', (options) => {
      options.references.push({ path: 'nuxt-notifications.d.ts' });
    });

    addPlugin({
      src: resolve(runtimeDir, 'plugin')
    });

    logger.success('Setup end');
  }
});
