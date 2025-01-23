<script lang="ts" setup>
import { useState } from '#app';
import { useNotification } from '#imports';
import { NuxtNotifications } from '#components';

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
      :width="650"
      animation-name="v-fade-left"
      position="top left"
      dangerously-set-inner-html
    >
      <template #body="{ item, close }">
        <div class="custom-template">
          <div class="custom-template-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                <g id="Icon-Set" transform="translate(-100.000000, -1139.000000)" fill="currentColor">
                  <path d="M122.027,1148.07 C121.548,1147.79 120.937,1147.96 120.661,1148.43 L114.266,1159.51 L110.688,1156.21 C110.31,1155.81 109.677,1155.79 109.274,1156.17 C108.871,1156.54 108.85,1157.18 109.228,1157.58 L113.8,1161.8 C114.177,1162.2 114.81,1162.22 115.213,1161.84 C115.335,1161.73 122.393,1149.43 122.393,1149.43 C122.669,1148.96 122.505,1148.34 122.027,1148.07 L122.027,1148.07 Z M116,1169 C108.268,1169 102,1162.73 102,1155 C102,1147.27 108.268,1141 116,1141 C123.732,1141 130,1147.27 130,1155 C130,1162.73 123.732,1169 116,1169 L116,1169 Z M116,1139 C107.164,1139 100,1146.16 100,1155 C100,1163.84 107.164,1171 116,1171 C124.836,1171 132,1163.84 132,1155 C132,1146.16 124.836,1139 116,1139 L116,1139 Z" />
                </g>
              </g>
            </svg>
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
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 17L16.8995 7.10051" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M7 7.00001L16.8995 16.8995" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
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
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .custom-template-close {
    flex: 0 1 auto;
    padding: 0 20px;
    font-size: 16px;
    opacity: 0.2;
    cursor: pointer;
    color: #495061;
    display: flex;
    align-items: center;
    justify-content: center;

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
