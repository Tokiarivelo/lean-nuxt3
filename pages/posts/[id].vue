<template>
  <div class="dark">
    <div class="p-5 dark:bg-black dark:text-white">Post {{ id }}</div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'post',
});
const route = useRoute();

const id = route.params.id;

onMounted(() => {
  console.log('monted post :>> ');
});

// When accessing /posts/1, route.params.id will be 1

console.log('id :>> ', id);
</script>
