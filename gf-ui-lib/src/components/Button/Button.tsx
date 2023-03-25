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
   * Button size
   */
  size?: "content"
}

/**
 * Button component
 */
export const Button: React.FC<ButtonProps> = (props: ButtonProps) => {
  return (
    <button
      type={props.type ?? "button"}
      className={`${styles.button} ${props.size === "content" ? styles.content : ""}`}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};