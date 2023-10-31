<template>
  <div class="fixed bottom-0 left-0 p-1">
    {{ enabled }}
    <Switch
      v-model="enabled"
      :class="[
        enabled ? 'bg-gray-200' : 'bg-dark-bg-tunnel',
        enabled ? 'text-black' : '',
        'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-orange-tunnel focus:ring-offset-2',
      ]"
    >
      <span
        :class="[
          enabled ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out',
        ]"
      >
        <span
          :class="[
            enabled
              ? 'opacity-0 duration-100 ease-out'
              : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <SunIcon />
        </span>
        <span
          :class="[
            enabled
              ? 'opacity-100 duration-200 ease-in'
              : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
          ]"
          aria-hidden="true"
        >
          <MoonIcon />
        </span>
      </span>
    </Switch>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { Switch } from '@headlessui/vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
import { ETheme } from '~/enums/theme';

const mode = useColorMode();

const enabled = ref(false);

onMounted(() => {
  enabled.value = mode.value === ETheme.DARK;
});

watch(enabled, (_value) => {
  mode.value = _value ? ETheme.DARK : ETheme.LIGHT;
});
</script>
