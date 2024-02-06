<script lang="ts" setup>
import { useState } from '#app';
import { useNotification } from '#imports';

const { notify } = useNotification();

const id = useState('id', () => 0);

function show(group: string, type = '') {
  const text = `
    This is notification text!
    <br>
    Date: ${new Date()}
  `;

  notify({
    group,
    title: `Test ${type} notification #${id.value++}`,
    text,
    type,
    data: {
      randomNumber: Math.random()
    }
  });
}

function clean(group: string) {
  notify({ group, clean: true });
}
</script>

<template>
  <div class="container">
    <h2>
      Nuxt 3 notification module 🗨️
      <br />
      <a href="https://github.com/windx-foobar/nuxt3-notifications/blob/master/README.md" target="readme">Readme</a> <br />
      <a href="https://github.com/windx-foobar/nuxt3-notifications" target="issues">Github</a>
      <br />
      <a href="https://github.com/kyvg/vue3-notification/blob/master/README.md" target="readme">Readme (fork)</a> <br />
      <a href="https://github.com/kyvg/vue3-notification/" target="issues">Github (fork)</a>
    </h2>

    <!-- CSS animation example -->
    <NuxtNotifications
      group="foo-css"
      position="bottom left"
      dangerously-set-inner-html
      :speed="500"
    />

    <!-- Custom style example -->
    <NuxtNotifications
      group="custom-style"
      position="top center"
      classes="n-light"
      :max="3"
      :width="400"
      :duration="-1"
      dangerously-set-inner-html
    />

    <!-- Custom template example -->
    <NuxtNotifications
      group="custom-template"
      :duration="5000"
      :width="500"
      animation-name="v-fade-left"
      position="top left"
      dangerously-set-inner-html
    >
      <template #body="{ item }">
        <div class="custom-template">
          <div class="custom-template-icon">
            <i class="icon ion-android-checkmark-circle" />
          </div>
          <div class="custom-template-content">
            <div class="custom-template-title">
              {{ item.title }}

              <p>
                Random number: {{ item.data.randomNumber }}
              </p>
            </div>
            <div
              class="custom-template-text"
              v-html="item.text"
            />
          </div>
          <div
            class="custom-template-close"
            @click="close"
          >
            <i class="icon ion-android-close" />
          </div>
        </div>
      </template>
    </NuxtNotifications>

    <!-- Full width example -->
    <NuxtNotifications
      group="full-width"
      width="100%"
      position="bottom left"
      dangerously-set-inner-html
    />

    <div class="content">
      <p>
        CSS animation:
      </p>
      <div class="block">
        <button
          class="success"
          @click="show('foo-css', 'success')"
        >
          <i class="icon ion-information-circled" />
          SUCCESS
        </button>
        <button
          class="warn"
          @click="show('foo-css', 'warn')"
        >
          <i class="icon ion-alert-circled" />
          WARNING
        </button>
        <button
          class="error"
          @click="show('foo-css', 'error')"
        >
          <i class="icon ion-close-circled" />
          ERROR
        </button>
      </div>

      <div>
        <p>Custom style:</p>
        <button @click="show('custom-style')">
          top center (max=3, duration=infinity)
        </button>
        <p>Custom template:</p>
        <button @click="show('custom-template')">
          show top left
        </button>
        <p />
        <button @click="clean('custom-template')">
          <u>clean all</u> top left
        </button>
        <p />
        <button @click="show('full-width')">
          show bottom (full width)
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
:root {
  --code-bg-color: #282c34;
  --c-tip: #42b983;
  --c-warning: #ffc310;
  --c-danger: #f11e37;
}

.container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 80px 0 0;

  max-width: 420px;
  margin: 0 auto;

  h2 {
    font-weight: 300;

    a {
      color: black;
      font-size: 12px;
    }
  }
}

.content {
  button {
    border: none;
    border-radius: 2000px;
    padding: 10px 20px;
    color: #FFFFFF;
    cursor: pointer;
    background-color: var(--code-bg-color);

    &.success {
      background: var(--c-tip);
    }

    &.warn {
      background: var(--c-warning);
    }

    &.error {
      background: var(--c-danger);
    }
  }

  .block {
    display: flex;
    gap: 10px;
    align-items: center;
    width: 100%;
  }
}
/*
  EXAMPLES
*/

.vue-notification-template.n-light {
  margin: 10px;
  margin-bottom: 0;

  border-radius: 3px;
  font-size: 13px;

  padding: 10px 20px;

  color: #495061;
  background: #EAF4FE;

  border: 1px solid #D4E8FD;

  .notification-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 10px;
    color: #2589F3;
  }
}

.custom-template {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  text-align: left;
  font-size: 13px;
  margin: 5px;
  margin-bottom: 0;
  align-items: center;
  justify-content: center;

  &, & > div {
    box-sizing: border-box;
  }

  background: #E8F9F0;
  border: 2px solid #D0F2E1;

  .custom-template-icon {
    flex: 0 1 auto;
    color: #15C371;
    font-size: 32px;
    padding: 0 10px;
  }

  .custom-template-close {
    flex: 0 1 auto;
    padding: 0 20px;
    font-size: 16px;
    opacity: 0.2;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }

  .custom-template-content {
    padding: 10px;
    flex: 1 0 auto;

    .custom-template-title {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 10px;
      font-weight: 600;
    }
  }
}

.block {
  display: flex;
}

.v-fade-left-enter-active,
.v-fade-left-leave-active,
.v-fade-left-move {
  transition: all .5s;
}

.v-fade-left-enter,
.v-fade-left-leave-to {
  opacity: 0;
  transform: translateX(-500px) scale(0.2);
}
</style>
