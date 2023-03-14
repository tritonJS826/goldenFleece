import {Language} from "../../model/Language";
import {IStorage} from "../Storage/IStorage";
import {ILocalStorageSchema} from "../Storage/LocalStorageSchema";
import {LocalStorageService} from "../Storage/LocalStorageService";

class LanguageService {

  private storageService: IStorage<ILocalStorageSchema>;

  constructor(storageService: IStorage<ILocalStorageSchema>) {
    this.storageService = storageService;
  }

  public getCurrentLanguage(): Language {
    const lang: Language = Language[this.storageService.getItem("lang") ?? "en"];
    return lang;
  }

  public setCurrentLanguage(language: Language) {
    this.storageService.setItem("lang", language);
  }

}

export const languageService = new LanguageService(new LocalStorageService());