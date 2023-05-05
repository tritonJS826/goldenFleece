import {SmallTitle} from "../SmallTitle/SmallTitle";
import styles from "./CheckboxField.module.scss";

/**
 * Checkbox field props
 */
interface CheckboxFieldProps {
  /**
   * Array of select options
   */
  itemsList: string[];
  /**
   * Selected items
   */
  selectedItems: string[];
  /**
   * Title of checkbox field
   */
  titleText: string;
  /**
   * Callback triggered on change checkboxes
   */
  onChangeValue: (item: string) => void;
}

export const CheckboxField = (props: CheckboxFieldProps) => {

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedItem = e.target.value;
    props.onChangeValue(selectedItem);
  };

  const renderItems = () =>
    props.itemsList.map(item => (
      <li key={item}>
        <label className={styles.label}>
          <input
            className={styles.input}
            type="checkbox"
            value={item}
            defaultChecked={props.selectedItems.includes(item)}
            onChange={changeHandler}
          />
          <span className={styles.itemName}>
            {item}
          </span>
        </label>
      </li>
    ));

  return (
    <div className={styles.container}>
      <SmallTitle
        text={props.titleText}
      />
      <ul className={styles.itemsList}>
        {renderItems()}
      </ul>
    </div>
  );
};