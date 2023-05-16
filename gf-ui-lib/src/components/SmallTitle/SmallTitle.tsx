import styles from "gf-ui-lib/src/components/SmallTitle/SmallTitle.module.scss";

interface SmallTitleProps {
  /**
   * Text of the title
   */
  text: string;
}

/**
 * SmallTitle component
*/

export const SmallTitle = (props: SmallTitleProps) => {
  return (
    <h4 className={styles.title}>
      {props.text}
    </h4>
  );
};