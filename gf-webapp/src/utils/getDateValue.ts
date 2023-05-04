/**
 * @param value optional parameter date
 * @returns numeric value, corresponding to the specified date (value)
 */
export const getDateValue = (value?: string | Date) => {
  if (value) {
    return new Date(value).getTime();
  } else {
    return new Date().getTime();
  }
};