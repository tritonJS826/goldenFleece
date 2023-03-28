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
   * If type is undefined, then the button type will be
   */
  type?: "submit" | "button";
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
  const buttonClassNames = `${styles.button} ${props.size && styles[props.size]}`;
  return (
    <button
      className={buttonClassNames}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

Button.defaultProps = {
  type: "button",
  size: "parentWidth",
};