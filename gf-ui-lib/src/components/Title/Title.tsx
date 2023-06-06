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
  /**
   * className for title
   */
  style?: string;
}

/**
 * Title component
*/

export const Title = (props: TitleProps) => {
  return (
    <props.level className={props.style ?? styles.title}>
      {props.text}
    </props.level>
  );
};