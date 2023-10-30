import { useStorage } from '@vueuse/core';
import { ELocalStorage } from '~/enums/localStorage';

export const useManageStorages = <T>(name: ELocalStorage, defaultValue?: T) => {
  const storage = useStorage<T | null>(name, defaultValue ?? null);

  const setValue = (_value: T) => {
    storage.value = _value;
  };

  return { value: storage, setValue };
};
