/**
 * Languages available on site
 */
export enum Language {
  /**
   * English
   */
  en = "en",
  /**
   * Russian
   */
  ru = "ru",
  /**
   * Georgian
   */
  ge = "ge",
}

// TODO: create separate helper file for mapping (task #110)
export const languageList = Object.values(Language).map((lang) => Language[lang]);