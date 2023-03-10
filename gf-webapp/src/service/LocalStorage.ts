class LocalStorageService {

  public getValueByKey(key: string): string | null {
    const currentValue = localStorage.getItem(`${key}`) ?? null;
    return currentValue;
  }

}

export const localStorageValue = new LocalStorageService();

class LocalStorageLanguageService {

  public getLanguage(): string {
    const currentLanguage = localStorage.getItem("lang") ?? "en";
    return currentLanguage;
  }

}

export const languages = new LocalStorageLanguageService();