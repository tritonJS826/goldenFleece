/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @param anyEnum - any enum
 * @returns
 */
export const enumToArray = (anyEnum: any) => {
  return Object.keys(anyEnum).filter((prop) => isNaN(+(prop)));
};
