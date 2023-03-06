import en from "../../public/locales/en/translation.json";
import ru from "../../public/locales/ru/translation.json";
import ge from "../../public/locales/ge/translation.json";


let language = en;

export const changeLanguage = () => {
  switch (localStorage.getItem("lang")) {
    case "ru":
      language = ru;
      break;
    case "ge":
      language = ge;
      break;
    default:
      language = en;
  }

  return language;
};