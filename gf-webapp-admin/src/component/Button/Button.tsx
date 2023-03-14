import React from "react";
import styles from "./Button.module.scss";

interface ButtonProps {
  /**
   * Button value (text0)
   */
  value: string;
  /**
   * Claaback triggered on button click
   */
  onClick: () => void;
}

export const Button = (props: ButtonProps) => {
  return (
    <button className={styles.button}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};