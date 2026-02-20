# Nuxt3 Notifications Module

<p>
  <a href="https://www.npmjs.com/package/nuxt3-notifications" target="_blank"><img src="https://img.shields.io/npm/v/nuxt3-notifications" alt="Version"></a>
  <a href="https://www.npmjs.com/package/nuxt3-notifications" target="_blank"><img src="https://img.shields.io/npm/dm/nuxt3-notifications" alt="Downloads"></a>
  <a href="https://github.com/windx-foobar/nuxt3-notifications/blob/master/LICENSE" target="_blank"><img src="https://img.shields.io/github/license/windx-foobar/nuxt3-notifications" alt="License"></a>
  <a href="https://nuxt.com" target="_blank"><!-- https://github.com/simple-icons/simple-icons/pull/8115 --><img src="https://img.shields.io/badge/Nuxt-18181B?&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAoCAYAAABNefLBAAAAAXNSR0IArs4c6QAAA91JREFUaEPNWdtV20AQvSsVEDoIPoh8QwWBDkwFkApiCrCQ5QICFcSpIKQCoAL4DuJgOoAC2M0Zy8Y23pl9SEqyv9rH3J2rO3d3Fdpuv4s9JMkZgP586glSPUKvmLa9VOx8Knagddz9+ADKXFm+PSPV+/8L8PZAPxZbeE1uAWwzG3mNLD9sdZMjJ2sP9P2ogFJEa6GpI2TDy8hYWxvWDujHYhuvyaNHVNM5zZ89+nbWpR3QVUn/8YFXlMaMsHtWePXtqFNz0NW4D5ifQfGluuclarUwfgWwBWAKrS/wqbgLWsvSuRlot3hx8blFrSq/AzixTPAFWT5pArwZaFm8nuYZ+mAPUBA1mT2Ny188aJd4GXUI6ANB0e2i5sceN1OkGhJNE1m8fiHLa0dWleTEPlrXsYmaV+kDQJu6O7yOiT8u0y7xWhUq3qVRvOtUdbFnHeEUWd77i6BLqsl252XLXlVSRj4zAV4iy4/mrPAvfTQgsvyFZ9olXqneQ69YNx+uDM7+f4Dx7VIyo0QtDHQdPPlrqpu2CsjbTHmzFicwzre/AGCqAJZM8eR6GOiqJBOyODK+X+IGWc67slqVyVjYRY0P+Ala95HMNtveAkXNH7QsSICPy3IJoMQeF1MCRM0fdBUoXlxWZFHj2eNiSoCo+YGOES8OtEvUVse9Z09LTs0Nuol4ccB9DAiXOd/y18iRNREvPtsuUXuCrfTRfPUdXCNRkzPdhnjZgDdlTzU6BxQdOTebUnfYGe5L1UsG/TC+hTF7TJ24QHY28CyN692asqcWNart9tqtcIqd/JyLjQf9UA5g8I0Z+IJUb284L58daIs9VUlnbTpz2xo5NbqosF5L2UHXO0n+mnFeiD/It1X6CKooauoHsqHtEgJ20NV4AphjZhdl5yVlW1btcPZEitomaBf9tN6Puqfqij0RorYJujPx6og9EaK2DvpfiVcsexa/UqCoLUF3RT+aV6dXnZS+Vf0IELUl6K7Ei7/KpZDDxYu1tuzjYT1i5fhZg+5KvGTAtHJ86bOBlxP3doNagxZvNvl6x1ananQMlQx4Ss9Gxpc+bmGXqM03WUEWAYC8rDEhD24+b1pEa7pLsz/U1zFxPsHl+8g2c6Zq5tQUxBLlmj/6O09rt6BGLzobqHBKmTbNZgkeLf/H8n8ZvNjGAGNGBJp/gWi+xOoMdKM5EB/fXLayjXhmmfa5xWi+2A1SfeJ8ng15546LaaYlc/UWLWLc9FSDoS5hMPF6c3IJamwUy3EvMKpPsSzNCVFLKe5O239JpaYwauoFdHVWssDacKrrv76tZ6KekejJ4nz9B5NWGK+XC+AAAAAAAElFTkSuQmCC" alt="Nuxt"></a>
</p>

This is module [@kyvg/vue3-notification](https://github.com/kyvg/vue3-notification) for Nuxt3

## 📦 Get Started

1. Install `nuxt3-notifications` as project dependency:

```bash
npm install --save-dev nuxt3-notifications # npm
yarn add -D nuxt3-notifications # yarn classic
pnpm i -D nuxt3-notifications # pnpm
```

2. Add it to the `modules` section of your `nuxt.config`:

```ts
export default defineNuxtConfig({
  modules: ['nuxt3-notifications'],
});
```

## 🚀 Example

```html
<!-- app.vue -->
<template>
  <NuxtNotifications position="bottom left" :speed="500" />
</template>
```

```html
<!-- page.vue/component.vue -->

<script setup>
  const { notify } = useNotification();

  function onClick() {
    notify({
      title: "Title",
      text: "Hello notify!",
    });
  }
</script>

<template>
  <button @click="onClick">Show notify</button>
</template>
```

## 🔨 Config

```ts
export default defineNuxtConfig({
  modules: ['nuxt3-notifications'],
  nuxtNotifications: {
    componentName: 'Foo', // 'foo-bar' or 'FooBar' for components of two or more words
    composableName: 'useFoo',
  },
});
```

## 💻 Development

- Fork and clone [windx-foobar/nuxt3-notifications](https://github.com/windx-foobar/nuxt3-notifications)
- Enable [corepack](https://github.com/nodejs/corepack) using corepack enable (use npm i -g corepack for Node.js < 16.10)
- Install dependencies using `pnpm install`
- Run `pnpm dev:prepare` to generate type stubs.
- Use `pnpm dev` to start [playground](https://github.com/windx-foobar/nuxt3-notifications/tree/master/playground) in
  development mode.
