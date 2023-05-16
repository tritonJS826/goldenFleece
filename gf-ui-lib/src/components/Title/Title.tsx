import {TitleLevel} from "gf-ui-lib/src/components/Title/TitleLevel";
import styles from "gf-ui-lib/src/components/Title/Title.module.scss";

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