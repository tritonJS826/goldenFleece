import {StorageService} from "./StorageService";
import {Schema, Language} from "./Schema";

class LanguageService extends StorageService<Schema> {

  constructor() {
    super();
  }

  public getCurrentLanguage(): Language {
    return this.get(Schema.lang) as Language ?? Language.en;
  }

  public setCurrentLanguage(language: Language) {
    this.set(Schema.lang, language);
  }

}

export const languageService = new LanguageService();