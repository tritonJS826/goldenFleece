class LocalStorageService {

  public getValue(key: string): string | null {
    const currentLanguage = localStorage.getItem(`${key}`) || null;
    return currentLanguage;
  }

}

export const languages = new LocalStorageService();