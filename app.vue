<template>
  <div class="p-5 font-default">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup lang="ts">
// ------------------ runtime config / .env ---------------
const runtimeConfig = useRuntimeConfig();
console.log(
  'runtimeConfig.apiSecretConfig :>> ',
  runtimeConfig.apiSecretConfig,
);
console.log(
  'runtimeConfig.public.apiBaseUrl :>> ',
  runtimeConfig.public.apiBaseUrl,
);

// ------------- App config ---------------------
const appConfig = useAppConfig();

console.log('appConfig.title :>> ', appConfig.title);

useHead({
  title: 'My App',
  meta: [{ name: 'description', content: 'Learn nuxt 3' }],
  bodyAttrs: {
    class: 'test',
  },
  link: [
    {
      type: 'image/svg+xml',
      href: '/img/e-learning-icon.svg',
      rel: 'icon',
    },
  ],
});

useSeoMeta({
  // title: 'My Amazing Site',
  ogTitle: 'My Amazing Site',
  description: 'This is my amazing site, let me tell you all about it.',
  ogDescription: 'This is my amazing site, let me tell you all about it.',
  ogImage: '/img/e-learning-icon.svg',
  twitterCard: 'summary_large_image',
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
