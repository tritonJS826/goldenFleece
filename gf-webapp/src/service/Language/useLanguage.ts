import {useEffect, useState} from "react";
import {Language} from "src/model/Language";
import {languageService} from "src/service/Language/LanguageService";

const currentLanguage = languageService.getCurrentLanguage();

export const useLanguage = () => {
  const [lang, setCurrentLang] = useState<Language>(currentLanguage);

  useEffect(() => {
    languageService.setCurrentLanguage(lang);
  }, [lang]);

  return {lang, setCurrentLang};
};