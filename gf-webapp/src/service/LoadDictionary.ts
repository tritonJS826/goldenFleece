import {DictionaryType} from "../context/Context";
import {Language} from "./Schema";

export const loadDictionary = async (language: Language): Promise<DictionaryType> => {
  const dictionary: DictionaryType = await import(`../../public/locales/${language}/translation.json`);
  return dictionary;
};