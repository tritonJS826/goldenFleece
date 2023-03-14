/**
 * Languages available on site
 */
export enum Language {
  en = "en",
  ru = "ru",
  ge = "ge",
}

export const languageList = Object.keys(Language) as (keyof typeof Language)[];