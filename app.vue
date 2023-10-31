<template>
  <div
    class="height-full-screen relative bg-white font-default dark:bg-dark-bg-tunnel dark:text-dark-white-tunnel"
  >
    <NuxtLayout>
      <nuxt-loading-indicator />
      <NuxtPage />
    </NuxtLayout>
    <ThemeSwitcher />
  </div>
</template>
<script setup lang="ts">
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
