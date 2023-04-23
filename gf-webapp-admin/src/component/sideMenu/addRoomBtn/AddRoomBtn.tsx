import styles from "src/component/sideMenu/addRoomBtn/AddRoomBtn.module.scss";

interface AddRoomBtnProps {
  toggleModalVisibility: () => void
}

export const AddRoomBtn = (props: AddRoomBtnProps) => {
  return (
    <div onClick={props.toggleModalVisibility}
      className={styles.addRoomBtn}
    >
      <span className={styles.cross} />
      <span>
        Add room
      </span>
    </div>
  );
};