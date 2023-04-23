import styles from "src/component/sideMenu/addRoomModal/closeBtn/CloseBtn.module.scss";

export interface CloseBtnProps {
  toggleModalVisibility: () => void
}

export const CloseBtn = (props: CloseBtnProps) => {
  return (
    <div onClick={props.toggleModalVisibility}
      className={styles.closeBtn}
    />
  );
};