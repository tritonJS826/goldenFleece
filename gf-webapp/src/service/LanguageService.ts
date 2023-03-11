import {StorageService} from "./StorageSevice";
import {Schema, Language} from "./Schema";

export class LanguageService extends StorageService<Schema> {

  constructor() {
    super();
  }

  public getCurrentLanguage() {
    return this.get(Schema.lang) as Language;
  }

  public setCurrentLanguage(accessToken: Language) {
    this.set(Schema.lang, accessToken);
  }

}

export const languageService = new LanguageService();