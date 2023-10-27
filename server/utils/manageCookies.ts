import type { H3Event, EventHandlerRequest } from 'h3';

export const manageCookies = <T>(
  event: H3Event<EventHandlerRequest>,
  name: string,
) => {
  const cookie = getCookie(event, name);

  const setValue = (_value: string) => {
    setCookie(event, name, _value);
  };

  return { value: cookie as T, setValue };
};
