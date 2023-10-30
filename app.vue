<template>
  <div>
    <NuxtLayout>
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
    class: 'test',
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
  filter: rotate3d(1, 1, 1, 15deg);
}
.layout-enter-active,
.layout-leave-active {
  transition: all 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
}
</style>
