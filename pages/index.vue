<template>
  <LoadingDigidom />
</template>
<script setup lang="ts">
import { ERoute } from '~/enums/routes';
import { ETunnelType } from '~/enums/tunnelType';

const router = useRouter();
const tunnelType = useCheckTunnelType();

watch(
  tunnelType,
  (_value) => {
    switch (_value) {
      case ETunnelType.DOM:
        router.push({ path: `/${ERoute.STORES}` });
        break;

      default:
        router.push({ path: `/${ERoute.STORES}` });
        break;
    }
  },
  {
    immediate: true,
  },
);
</script>
