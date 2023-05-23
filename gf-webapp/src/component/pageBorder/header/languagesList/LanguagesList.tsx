import {useState, useEffect} from "react";
import {useDictionary} from "src/logic/DictionaryContext/useDictionary";
import {useLanguage} from "src/service/Language/useLanguage";
import {useScrollPosition} from "src/utils/domEventsUtils/useScrollPosition";
import {loadDictionary} from "src/service/Language/LoadDictionary";
import {Language, languageList} from "src/model/Language";
import styles from "src/component/pageBorder/header/languagesList/LanguagesList.module.scss";

export const LanguagesList = () => {
  const {setDictionary} = useDictionary();
  const [langOpen, setLangOpen] = useState(false);
  const {lang, setCurrentLang} = useLanguage();

  const langHoverHandler = () => {
    setLangOpen(prev => !prev);
  };

  const loadDictionaryAsync = async () => {
    const messages = await loadDictionary(lang);
    setDictionary(messages);
  };

  useEffect(() => {
    loadDictionaryAsync();
  }, [lang]);

  const onLangChoose = (language: Language) => {
    setCurrentLang(language);
    setLangOpen(false);
  };

  const scrollPosition = useScrollPosition();

  return (
    <li
      className={scrollPosition < 100 ? styles.languages : `${styles.languages} ${styles.languagesScroll}`}
      onMouseEnter={langHoverHandler}
      onMouseLeave={langHoverHandler}
    >
      <p>
        {Language[lang].toUpperCase()}
      </p>
      <ul className={styles.langAdditional}>
        {langOpen && languageList.map(langCode => (
          <li
            key={langCode}
            onClick={() => onLangChoose(Language[langCode])}
            className={lang === Language[langCode] ? `${styles.disabled}` : ""}
          >
            {Language[langCode].toUpperCase()}
          </li>
        ))}
      </ul>
    </li>
  );
};