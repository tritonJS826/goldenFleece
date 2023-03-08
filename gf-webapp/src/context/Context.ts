import {createContext, useContext} from "react";
import en from "../../public/locales/en/translation.json";

const STUB_FUNCTION = () => undefined;
const STUB_BOOLEAN = false;
const STUB_DICTIONARY = en;


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

export type Dictionary = {
  dictionary: DictionaryType,
  setDictionary: (dictionary: DictionaryType) => void,
}

export const DictionaryContext = createContext<Dictionary>({
  dictionary: STUB_DICTIONARY,
  setDictionary: STUB_FUNCTION,
} as Dictionary);

export const useDictionaryContext = () => useContext(DictionaryContext);
