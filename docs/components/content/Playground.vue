<script lang="ts" setup>
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
  <div id="demo">
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
      <p>CSS animation:</p>
      <div class="block">
        <button class="success" @click="show('foo-css', 'success')">
          <i class="icon ion-information-circled" />
          SUCCESS
        </button>
        <button class="warn" @click="show('foo-css', 'warn')">
          <i class="icon ion-alert-circled" />
          WARNING
        </button>
        <button class="error" @click="show('foo-css', 'error')">
          <i class="icon ion-close-circled" />
          ERROR
        </button>
        <button class="info" @click="show('foo-css', 'info')">
          <i class="icon ion-close-circled" />
          INFO
        </button>
      </div>
      <div>
        <p></p>
        <p>Custom style:</p>
        <button @click="show('custom-style')">top center (max=3, duration=infinity)</button>
        <p></p>
        <p>Custom template:</p>
        <button @click="show('custom-template')">show top left</button>
        <p />
        <button @click="clean('custom-template')"><u>clean all</u> top left</button>
        <p />
        <button @click="show('full-width')">show top (full width)</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#demo {
  button {
    display: inline-block;
    box-sizing: border-box;
    border: 0;
    border-radius: 3px;
    color: white;
    vertical-align: top;
    text-decoration: none;
    font-size: 12px;
    font-family: inherit;
    cursor: pointer;
    outline: none;
    transition: all 500ms;
    padding: 12px;
    box-shadow: none;
    background: #02ccba;
    font-weight: 600;
    width: 100%;
    letter-spacing: 1px;
    box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);

    &.success {
      background: #68cd86;
    }

    &.warn {
      background: #ffb648;
    }

    &.error {
      background: #e54d42;
    }

    &.info {
      background: #02ccba;
    }

    &:active {
      opacity: 0.8;
    }
  }

  .sub-button {
    display: inline-block;
    float: right;
    background: #e54d42;
    padding: 4px;
    box-shadow: 0 5px 15px 0px rgba(46, 61, 73, 0.1);
  }

  /*
    EXAMPLES
  */
  :deep(.vue-notification-template.n-light) {
    margin: 10px;
    margin-bottom: 0;
    border-radius: 3px;
    font-size: 13px;
    padding: 10px 20px;
    color: #495061;
    background: #eaf4fe;
    border: 1px solid #d4e8fd;

    .notification-title {
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 10px;
      color: #2589f3;
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

    &,
    & > div {
      box-sizing: border-box;
    }

    background: #e8f9f0;
    border: 2px solid #d0f2e1;

    .custom-template-icon {
      flex: 0 1 auto;
      color: #15c371;
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
      color: black;

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

    > *:not(:last-child) {
      margin-right: 30px;
    }
  }

  p {
    margin-bottom: 1rem;
  }

  :deep(.v-fade-left-enter-active),
  :deep(.v-fade-left-leave-active),
  :deep(.v-fade-left-move) {
    transition: all .5s;
  }

  :deep(.v-fade-left-enter),
  :deep(.v-fade-left-leave-to) {
    opacity: 0;
    transform: translateX(-500px) scale(0.2);
  }
}
</style>
