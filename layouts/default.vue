<template>
  <div class="flex h-full flex-col">
    <div
      class="flex h-20 flex-row content-between items-center justify-between p-8 sm:p-5"
    >
      <!-- Previous route -->
      <button>
        <div class="flex flex-row items-center text-green-tunnel">
          <div class="mr-2">
            <img alt="arrow-green-left" src="/svg/arrow-green-left.svg" />
          </div>
          <div class="text-lg"><b>Précédent</b></div>
        </div>
      </button>

      <!-- Digidom logo -->
      <div>
        <img class="h-12" alt="digidom" src="/img/digidom_logo.png" />
      </div>

      <!-- Contact Digidom -->
      <div class="flex flex-row items-center">
        <div>
          <img
            class="h-6 w-6"
            alt="telephone-green"
            src="/svg/telephone-green.svg"
          />
        </div>
        <div class="ml-2 flex flex-col items-end">
          <div class="text-lg text-green-tunnel">
            <b><a href="tel:+33185533824">01 85 53 38 24</a></b>
          </div>
          <div class="text-xs">Numéro non surtaxé</div>
        </div>
      </div>
    </div>
    <div class="flex-1">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ECookie } from '~/enums/cookies';
import { ELocalStorage } from '~/enums/localStorage';

const { value: state } = useManageStorages<string>(
  ELocalStorage.ACCESS_TOKEN,
  '',
);

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
