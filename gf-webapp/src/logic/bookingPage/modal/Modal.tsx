import React, {FC, ReactNode, SetStateAction, Dispatch} from "react";
import styles from "./Modal.module.scss";

type ModalProps = {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export const Modal: FC<ModalProps> = ({active, setActive, children}) => {
  return (
    <div className={active ? `${styles.modal} ${styles.active}` : styles.modal}
      onClick={() => setActive(false)}
    >
      <div className={active ? `${styles.content} ${styles.active}` : styles.content}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};