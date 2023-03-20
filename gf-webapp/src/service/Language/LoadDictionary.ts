import path from "path";
import {DictionaryType} from "src/logic/DictionaryContext/useDictionary";
import {Language} from "src/model/Language";

import en from "src/locales/en/translation.json";
import ru from "src/locales/ru/translation.json";
import ge from "src/locales/ge/translation.json";

const langMapping = {
  en,
  ru,
  ge,
};


export const loadDictionary = async (language: Language): Promise<DictionaryType> => {
  const dictionary: DictionaryType = await langMapping[language];
  return dictionary;
};