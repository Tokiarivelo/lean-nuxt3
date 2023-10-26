export const useFetchData = () => {
  const runtimeConfig = useRuntimeConfig();
  const apiFetch = $fetch.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      authorization: 'Bearer tokekekeken',
    },
  });

  return apiFetch;
};
