<template>
  <div>
    <AppAlert> This is an auto-imported component. </AppAlert>
  </div>
</template>
<script setup lang="ts">
// ------------------ runtime config / .env ---------------
const runtimeConfig = useRuntimeConfig();
console.log(
  "runtimeConfig.apiSecretConfig :>> ",
  runtimeConfig.apiSecretConfig,
);
console.log("runtimeConfig.public.apiBase :>> ", runtimeConfig.public.apiBase);
console.log(
  "runtimeConfig.public.apiBase :>> ",
  runtimeConfig.public.apisecret,
);

// ------------- App config ------------------
const appConfig = useAppConfig();

console.log("appConfig.title :>> ", appConfig.title);
console.log("appConfig.theme :>> ", appConfig.theme);
</script>
