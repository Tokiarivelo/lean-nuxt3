<template>
  <div
    class="height-full-screen bg-white font-default dark:bg-dark-bg-tunnel dark:text-dark-white-tunnel"
  >
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtPage />
    </NuxtLayout>
    <button @click="changeTheme">change theme</button>
  </div>
</template>
<script setup lang="ts">
import { ETheme } from './enums/theme';

const mode = useColorMode();

useHead({
  title: 'Digidom Tunnel',
  bodyAttrs: {
    class: 'height-full-screen',
  },
  link: [
    {
      type: 'image/svg+xml',
      href: '/img/digidom-favicon.png',
      rel: 'icon',
    },
  ],
});

const changeTheme = () => {
  mode.value = mode.value === ETheme.LIGHT ? ETheme.DARK : ETheme.LIGHT;
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
}
</style>
