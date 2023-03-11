class LocalStorageService {

  public getValueByKey(key: string): string | null {
    const currentValue = localStorage.getItem(`${key}`) ?? null;
    return currentValue;
  }

}

export const localStorageValue = new LocalStorageService();

import {CurrentLanguage} from "./LoadDictionary";
class LocalStorageLanguageService {

  public getLanguage(): CurrentLanguage {
    const lang = localStorage.getItem("lang") as keyof typeof CurrentLanguage;
    const currentLanguage = CurrentLanguage[lang];
    return currentLanguage;
  }

}

export const languages = new LocalStorageLanguageService();