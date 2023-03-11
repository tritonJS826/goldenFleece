import {DictionaryType} from "../context/Context";

export enum CurrentLanguage {
  en = "en",
  ru = "ru",
  ge = "ge"
}

export const loadDictionary = async (currentLang: CurrentLanguage): Promise<DictionaryType> => {
  const dictionary: DictionaryType = await import(`../../public/locales/${currentLang}/translation.json`);
  return dictionary;
};