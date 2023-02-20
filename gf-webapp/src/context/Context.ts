import {createContext, useContext} from "react";

const STUB_FUNCTION = () => undefined;
const STUB_BOOLEAN = false;
const STUB_STRING = "";

export type ModalVisibility = {
  isModalActive: boolean,
  setIsModalActive: (modalActive: boolean) => void,
}


export const ModalVisibilityContext = createContext<ModalVisibility>({
  isModalActive: STUB_BOOLEAN,
  setIsModalActive: STUB_FUNCTION,
} as ModalVisibility);

export const useModalVisibilityContext = () => useContext(ModalVisibilityContext);