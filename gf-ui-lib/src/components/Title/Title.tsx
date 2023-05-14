import {TitleLevel} from "./TitleLevel";
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
  level: TitleLevel;
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