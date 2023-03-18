/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @description - converts an enum type variable to an array of strings
 * @param anyEnum - enum type
 * @returns string[]
 */
export const enumToArray = (anyEnum: any): string[] => {
  return Object.keys(anyEnum).filter((prop) => isNaN(+(prop)));
};
