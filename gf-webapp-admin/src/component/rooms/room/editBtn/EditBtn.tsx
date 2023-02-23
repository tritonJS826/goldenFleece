import React from "react";

interface IEditBtn {
  isEditFieldDisabled: boolean;
  saveHandler:() => void;
  fieldEditHandler: () => void;
}

export const EditBtn = ({isEditFieldDisabled, saveHandler, fieldEditHandler}: IEditBtn) => {
  return isEditFieldDisabled ?
    (
      <button onClick={fieldEditHandler}>
        Edit
      </button>
    )
    :
    (
      <button onClick={saveHandler}>
        Save
      </button>
    );
};