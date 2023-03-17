import styles from "./CloseBtn.module.scss";

export interface CloseBtnProps {
  showModal: () => void
}

export const CloseBtn = (props: CloseBtnProps) => {
  return (
    <div onClick={props.showModal}
      className={styles.closeBtn}
    />
  );
};