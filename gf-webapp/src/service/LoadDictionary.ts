import {DictionaryType} from "../context/Context";

export const loadDictionary = (currentLang: string): Promise<DictionaryType> => {
  return new Promise((res) => {
    import (`../../public/locales/${currentLang}/translation.json`).then((data) => {
      res(data.default);
    });
  });
};