/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @param anyEnum - argument of enum type
 * @returns
 */
export const enumToArray = (anyEnum: any) => {
  return Object.keys(anyEnum).filter((prop) => isNaN(+(prop)));
};
