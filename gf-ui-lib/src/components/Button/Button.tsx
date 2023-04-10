import clsx from "clsx";
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

const DEFAULT_SIZE = "parentWidth";
const DEFAULT_TYPE = "button";

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  const buttonClasses = clsx(
    styles.button,
    styles[props.size ?? DEFAULT_SIZE],
  );

  console.log(123);

  return (
    <button
      type={props.type ?? DEFAULT_TYPE}
      className={buttonClasses}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

