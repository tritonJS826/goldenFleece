import styles from "src/component/sideMenu/addRoomModal/closeBtn/CloseBtn.module.scss";

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