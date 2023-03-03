import {createContext, useContext} from "react";
import en from "../../public/locales/ru/translation.json";

const STUB_FUNCTION = () => undefined;
const STUB_BOOLEAN = false;
const STUB_LANG = en;

export type ModalVisibility = {
  isModalActive: boolean,
  setIsModalActive: (modalActive: boolean) => void,
}


export const ModalVisibilityContext = createContext<ModalVisibility>({
  isModalActive: STUB_BOOLEAN,
  setIsModalActive: STUB_FUNCTION,
} as ModalVisibility);

export const useModalVisibilityContext = () => useContext(ModalVisibilityContext);


export type CurrentLanguage = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  language: any,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setLanguage: (language: any) => void,
}


export const CurrentLanguageContext = createContext<CurrentLanguage>({
  language: STUB_LANG,
  setLanguage: STUB_FUNCTION,
} as CurrentLanguage);

export const useCurrentLanguageContext = () => useContext(CurrentLanguageContext);