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
    configKey: 'nuxtNotifications'
  },
  defaults: {
    componentName: 'NuxtNotifications'
  },
  setup(options, nuxt) {
    const logger = useLogger(PACKAGE_NAME);

    let { componentName } = options;
    componentName = pascalCase(componentName!);

    logger.info(`[${PACKAGE_NAME}]: Starting setup`);

    const { resolve } = createResolver(import.meta.url);

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url));

    nuxt.options.runtimeConfig.public = {
      ...nuxt.options.runtimeConfig.public,
      nuxtNotifications: { componentName }
    };

    // GLOBAL useNotification hook
    addImports({
      name: 'useNotification',
      from: '@kyvg/vue3-notification'
    });

    // TYPING DYNAMIC COMPONENT
    addTemplate({
      filename: 'nuxt3-notifications.d.ts',
      src: resolve(runtimeDir, 'type.d.ts.stub'),
      options: { componentName }
    });

    // ADD MODULE TYPING TO GLOBAL REFERENCE
    nuxt.hook('prepare:types', (options) => {
      options.references.push({ path: 'nuxt3-notifications.d.ts' });
    });

    nuxt.options.build.transpile.push(runtimeDir);

    addPlugin(resolve(runtimeDir, 'plugin'));

    logger.success(`[${PACKAGE_NAME}]: End setup`);
  }
});
