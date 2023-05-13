import styles from "./Title.module.scss";

/**
 * Title props
 */

interface TitleProps {
  /**
   * Text of the title
   */
  text: string;

  /**
   * Title's level
   */
  level: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

/**
 * Title component
*/

export const Title = (props: TitleProps) => {
  return (
    <props.level className={styles.title}>
      {props.text}
    </props.level>
  );
};