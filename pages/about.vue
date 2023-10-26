<template>
  <section>
    <p>This page will be displayed at the /about route.</p>

    <div class="dark">
      <div
        class="rounded-lg bg-white px-6 py-8 text-slate-900 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 dark:text-white"
      >
        <div>
          <span
            class="bg-purple inline-flex items-center justify-center rounded-md p-2 shadow-lg"
          >
            <svg
              class="h-6 w-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <!-- ... -->
            </svg>
          </span>
        </div>
        <h3
          class="mt-5 text-base font-medium tracking-tight text-slate-900 dark:text-white"
        >
          Writes Upside-Down
        </h3>
        <p class="mt-2 text-sm text-slate-500 dark:text-slate-400">
          The Zero Gravity Pen can be used to write in any orientation,
          including upside-down. It even works in outer space.
        </p>
        <div>
          <div v-for="store in data" :key="store.id">
            <div>
              {{ store.name }}
            </div>
          </div>
        </div>
        <div>
          <button class="btn-primary">Button blue</button>
        </div>
        <div>
          <button class="btn-secondary">Button secondary</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { IStore } from '~/interfaces/store';

// ------------------ runtime config / .env ---------------
const runtimeConfig = useRuntimeConfig();

const { data, pending, error, refresh } = useFetch<any>(`/v1/stores`, {
  baseURL: runtimeConfig.public.apiBaseUrl,
  transform: (data) => data['hydra:member'] as IStore[],
});

// watch(
//   data,
//   (val) => {
//     console.log('val[hydra:member] :>> ', val);
//   },
//   {
//     immediate: true,
//   },
// );

console.log(
  'runtimeConfig.public.apiBaseUrl :>> ',
  runtimeConfig.public.apiBaseUrl,
);

console.log('stores ..:>> ', data);
</script>
