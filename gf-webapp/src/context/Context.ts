import {createContext, useContext} from "react";
import en from "../../public/locales/en/translation.json";

const STUB_SET_VISIBILITY = () => undefined;
const STUB_SET_DICTIONARY = () => undefined;
const STUB_MODAL_IS_ACTIVE = false;
const STUB_DICTIONARY_LANGUAGE = en;


export type ModalVisibility = {
  isModalActive: boolean,
  setIsModalActive: (modalActive: boolean) => void,
}

export const ModalVisibilityContext = createContext<ModalVisibility>({
  isModalActive: STUB_MODAL_IS_ACTIVE,
  setIsModalActive: STUB_SET_VISIBILITY,
} as ModalVisibility);

export const useModalVisibilityContext = () => useContext(ModalVisibilityContext);


export type DictionaryType = typeof en;

export type Dictionary = {
  dictionary: DictionaryType,
  setDictionary: (dictionary: DictionaryType) => void,
}

export const DictionaryContext = createContext<Dictionary>({
  dictionary: STUB_DICTIONARY_LANGUAGE,
  setDictionary: STUB_SET_DICTIONARY,
} as Dictionary);

export const useDictionaryContext = () => useContext(DictionaryContext);
