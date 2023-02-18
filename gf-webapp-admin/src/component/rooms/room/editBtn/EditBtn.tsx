import React from "react";

interface IEditBtn {
  isDisabled: boolean;
  saveHandler:() => void;
  disabledHandler: () => void;
}

export const EditBtn = ({isDisabled, saveHandler, disabledHandler}: IEditBtn) => {
  return isDisabled ?
    (
      <button onClick={disabledHandler}>
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