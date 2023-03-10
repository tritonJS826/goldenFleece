import {DictionaryType} from "../context/Context";

export const loadDictionary = async (currentLang: string): Promise<DictionaryType> => {
  const dictionary: DictionaryType = await import(`../../public/locales/${currentLang}/translation.json`);
  return dictionary;
};