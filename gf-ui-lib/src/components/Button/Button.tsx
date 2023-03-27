import {useEffect, useState} from "react";
import styles from "./Button.module.scss";

/**
 * Button props
 */
interface ButtonProps {
  /**
   * Button value (text)
   */
  value: string;
  /**
   * Callback triggered on button click
   */
  onClick: () => void;
  /**
   * Button type
   */
  type: "submit" | "button";
  /**
   * Button size.
   * If size is undefined, then the button will have parentWidth style
   */
  size?: "innerContent" | "parentWidth";
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

  const buttonSize = props.size ? props.size : "";

  return (
    <button
      type={props.type ?? "button"}
      className={`${styles.button} ${styles[buttonSize]}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {size: "parentWidth"};