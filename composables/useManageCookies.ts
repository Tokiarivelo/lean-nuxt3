export const useManageCookies = <T>(name: string) => {
  const cookie = useCookie<T>(name);

  const setValue = (_value: T) => {
    cookie.value = _value;
  };

  return { value: cookie.value, setValue };
};
