/**
 * Return curernt date yyyy-mm-dd
 */
export const getCurrentDate = () => new Date().toISOString().split("T")[0];
