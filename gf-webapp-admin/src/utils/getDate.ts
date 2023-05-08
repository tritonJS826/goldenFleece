const currentDate = new Date();
const currentYear = "" + currentDate.getFullYear();
let currentMonth = "" + (currentDate.getMonth() + 1);
let currentDay = "" + currentDate.getDate();
let nextDay = "" + (currentDate.getDate() + 1);

if (currentMonth.length < 2) {
  currentMonth = `0${currentMonth}`;
}

if (currentDay.length < 2) {
  currentDay = `0${currentDay}`;
}

if (nextDay.length < 2) {
  nextDay = `0${nextDay}`;
}

/**
 * Return yesterday date yyyy-mm-dd
 */
export const prevDay = (currentDate.getDate() - 1);

/**
 * Return current date yyyy-mm-dd
 */
export const getCurrentDate = `${currentYear}-${currentMonth}-${currentDay}`;

/**
 * Return tomorrow date yyyy-mm-dd
 */
export const getNextDate = `${currentYear}-${currentMonth}-${nextDay}`;

/**
 * Return date after date in enter yyyy-mm-dd
 */
export const getNewDateOut = (value: string) => {
  if (value === "") {
    return "";
  } else {
    const getDateOut = "" + (new Date(currentDate.setDate(new Date(value).getDate() + 1)).toISOString().split("T")[0]);
    return getDateOut;
  }
};

