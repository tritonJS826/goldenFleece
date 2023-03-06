import {createContext, useContext} from "react";
import en from "../../public/locales/en/translation.json";

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


export type DictionaryType = typeof en;

export type CurrentDictionary = {
  dictionary: DictionaryType,
  setDictionary: (dictionary: DictionaryType) => void,
}


export const CurrentDictionaryContext = createContext<CurrentDictionary>({
  dictionary: STUB_LANG,
  setDictionary: STUB_FUNCTION,
} as CurrentDictionary);

export const useCurrentDictionaryContext = () => useContext(CurrentDictionaryContext);