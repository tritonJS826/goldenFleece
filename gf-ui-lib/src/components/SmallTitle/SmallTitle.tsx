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
    <h4>
      {props.text}
    </h4>
  );
};