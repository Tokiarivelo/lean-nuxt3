export const useFetchDigidomApi = (token?: string) => {
  const runtimeConfig = useRuntimeConfig();

  const fetchDigidomApi = $fetch.create({
    baseURL: runtimeConfig.public.apiBaseUrl,
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  });

  return fetchDigidomApi;
};
