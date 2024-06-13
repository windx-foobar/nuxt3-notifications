import { fileURLToPath } from 'url';
import { pascalCase } from 'scule';
import { defineNuxtModule, addPlugin, createResolver, useLogger, addImports, addTemplate } from '@nuxt/kit';

const PACKAGE_NAME = 'nuxt-notifications';

export interface ModuleOptions {
  componentName: string | undefined;
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

    updateRuntimeConfig({ public: { nuxtNotifications: { componentName } } });

    // GLOBAL useNotification hook
    addImports({
      name: 'useNotification',
      from: '@kyvg/vue3-notification'
    });

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
      mode: nuxt.options.ssr ? 'all' : 'client',
      src: resolve(runtimeDir, 'plugin')
    });

    logger.success('Setup end');
  }
});
