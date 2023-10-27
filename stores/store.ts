import { IStore } from '~/interfaces/store';

export const useDigidomStoreStore = defineStore('digidomStore', () => {
  const digidomStore = ref<IStore[] | null>(null);
  const loadingStore = ref(false);

  const setDigidomStore = (_store: IStore[] | null) =>
    (digidomStore.value = _store);

  const setDigidomStoreLoading = (_loading: boolean) =>
    (loadingStore.value = _loading);

  return {
    digidomStore,
    setDigidomStore,
    loadingStore,
    setDigidomStoreLoading,
  };
});
