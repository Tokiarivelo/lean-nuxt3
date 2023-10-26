import { useFetchData } from '~/composables/useFetchData';
import { IStore } from '~/interfaces/store';

export default defineEventHandler(async () => {
  const fetch = useFetchData();
  const data = await fetch(`/v1/stores`).then(
    (res: any) => res['hydra:member'] as IStore[],
  );

  console.log('data :>> ', data);

  return data;
});
