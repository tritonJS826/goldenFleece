import {useEffect, useState} from "react";
import {Language} from "../../model/Language";
import {languageService} from "./LanguageService";

const currentLanguage = languageService.getCurrentLanguage();

export const useLanguage = () => {
  const [lang, setCurrentLang] = useState<Language>(currentLanguage);

  useEffect(() => {
    languageService.setCurrentLanguage(lang);
    console.log(lang);
  }, [lang]);

  return {lang, setCurrentLang};
};