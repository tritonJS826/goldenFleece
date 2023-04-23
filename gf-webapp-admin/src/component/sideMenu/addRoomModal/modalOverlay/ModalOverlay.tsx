import styles from "src/component/sideMenu/addRoomModal/modalOverlay/ModalOverlay.module.scss";

interface ModalOverlayProps {
  toggleModalVisibility: () => void;
}

export const ModalOverlay = (props: ModalOverlayProps) => {
  return (
    <div onClick={props.toggleModalVisibility}
      className={styles.modalOverlay}
    />);
};