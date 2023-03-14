import path from "path";
import {DictionaryType} from "../../context/Context";
import {Language} from "../../model/Language";

import en from "../../../public/locales/en/translation.json";
import ru from "../../../public/locales/ru/translation.json";
import ge from "../../../public/locales/ge/translation.json";

const langMapping = {
  en,
  ru,
  ge,
};


export const loadDictionary = async (language: Language): Promise<DictionaryType> => {
  const dictionary: DictionaryType = await langMapping[language];
  return dictionary;
};