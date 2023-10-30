<template>
  <div class="dark">
    <div
      class="rounded-lg bg-white px-6 py-8 text-slate-900 shadow-xl ring-1 ring-slate-900/5 dark:bg-slate-800 dark:text-white"
    >
      <div>
        <div v-for="store in data" :key="store.id">
          <div>
            {{ store.name }}
          </div>
        </div>
      </div>
      <div class="mt-2">
        <button class="btn-primary" @click="refresh()">Refetch</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { data, refresh } = await useFetch(`/api/store`);
</script>
