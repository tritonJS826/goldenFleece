import {createContext, useContext} from "react";

const STUB_FUNCTION = () => undefined;
const STUB_BOOLEAN = false;
const STUB_STRING = "";

export type ModalVisibility = {
  modalActive: boolean,
  setModalActive: (modalActive: boolean) => void,
}


export const ModalVisibilityContext = createContext<ModalVisibility>({
  modalActive: STUB_BOOLEAN,
  setModalActive: STUB_FUNCTION,
} as ModalVisibility);

export const useModalVisibilityContext = () => useContext(ModalVisibilityContext);