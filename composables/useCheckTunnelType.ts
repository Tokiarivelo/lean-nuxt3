import { ETunnelType } from '~/enums/tunnelType';

export const useCheckTunnelType = () => {
  const tunnelType = ref(ETunnelType.DOM);

  // check conditions of tunnel type

  return tunnelType;
};
