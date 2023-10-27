import { useFetchDigidomApi } from '~/composables/useFetchDigidomApi';
import { ECookie } from '~/enums/cookies';
import { IStore } from '~/interfaces/store';

export default defineEventHandler(async (e) => {
  const { value } = manageCookies<string>(e, ECookie.ACCESS_TOKEN);

  const fetch = useFetchDigidomApi(value);
  const data = await fetch(`/v1/stores`).then(
    (res: any) => res['hydra:member'] as IStore[],
  );

  return data;
});
