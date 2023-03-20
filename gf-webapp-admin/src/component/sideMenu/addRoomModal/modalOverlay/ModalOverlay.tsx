import styles from "src/component/sideMenu/addRoomModal/modalOverlay/ModalOverlay.module.scss";

export const ModalOverlay = ({showModal}: {showModal: () => void}) => {
  return (
    <div onClick={showModal}
      className={styles.modalOverlay}
    />);
};