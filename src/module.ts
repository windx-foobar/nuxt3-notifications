import { fileURLToPath } from 'node:url';
import { pascalCase } from 'scule';
import { defineNuxtModule, addPlugin, createResolver, useLogger, addImportsDir, addComponent } from '@nuxt/kit';

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
  async setup(options) {
    const logger = useLogger(PACKAGE_NAME);

    let { componentName } = options;
    componentName = pascalCase(componentName!);

    logger.info('Starting setup');

    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

    // GLOBAL useNotification hook
    addImportsDir(resolve('./runtime/composables'));

    addPlugin({
      src: resolve(runtimeDir, 'plugin')
    });

    await addComponent({
      name: componentName,
      filePath: '@kyvg/vue3-notification',
      export: 'Notifications',
      global: true
    });

    logger.success('Setup end');
  }
});
