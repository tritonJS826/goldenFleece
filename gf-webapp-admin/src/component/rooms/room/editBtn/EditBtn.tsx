import React from "react";
import styles from "./editBtn.module.scss";

interface IEditBtn {
  isEditFieldDisabled: boolean;
  saveHandler:() => void;
  fieldEditHandler: () => void;
}

export const EditBtn = ({isEditFieldDisabled, saveHandler, fieldEditHandler}: IEditBtn) => {
  return isEditFieldDisabled ?
    (
      <button className={styles.editBtn}
        onClick={fieldEditHandler}
      >
        Edit
      </button>
    )
    :
    (
      <button className={styles.editBtn}
        onClick={saveHandler}
      >
        Save
      </button>
    );
};