<template>
  <div
    class="bg-white font-default dark:bg-dark-bg-tunnel dark:text-dark-white-tunnel"
  >
    <div>
      <p class="h-10 bg-[#bada55] text-blue-300">
        Some default layout content shared across all pages
      </p>
      <img src="/favicon.ico" />
      <img src="/img/header.jpg" />
      <nav>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about">About</NuxtLink></li>
          <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
          <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
          <li><NuxtLink to="/no-page">No page</NuxtLink></li>
          <li><NuxtLink to="/stores">Stores</NuxtLink></li>
        </ul>
      </nav>
      <slot />
      <div class="h-10 text-blue-600">Footer</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { ECookie } from '~/enums/cookies';

const state = useStorage('access_token', '');

const { setValue: setUserAuth } = useManageCookies(ECookie.ACCESS_TOKEN);

watch(
  state,
  (value) => {
    if (value) {
      setUserAuth(value);
    }
  },
  {
    immediate: true,
  },
);
</script>
