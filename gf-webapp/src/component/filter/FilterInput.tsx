import styles from "src/component/filter/FilterInput.module.scss";

export type InputType = HTMLInputElement | HTMLTextAreaElement;

/**
 * Input props for filters
 */
interface FilterInputProps {
  /**
   * Input type
   */
  type: "text" | "number" | "date" | "checkbox",
  /**
   * Input (filter) title
   */
  name?: string,
  /**
   * Input value
   */
  value: string | number | string[],
  /**
   * Minimum value (string for date input and number for number input)
   */
  min?: string | number,
  /**
   * Callback triggered on change input
   */
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /**
   * Parameter for input type checkbox
   */
  checked?: boolean;

  stylesName: string;

  text?: string;
  textCheckbox?: string;
  styleLabel?: string;
}

/**
 * Keys for query params in the url path
 */
export enum URL_QUERY_KEYS {
  /**
   * Key for filter by any text
   */
  Search = "Search",
  /**
   * Key for filter by date in
   */
  DateIn = "DateIn",
  /**
   * Key for filter by date out
   */
  DateOut = "DateOut",
  /**
   * Key for filter by adults amount
   */
  Adults = "Adults",
  Взрослые = "Взрослые",
  /**
   * Key for filter by children amount
   */
  Children = "Children",
  /**
   * Key for filter by services
   */
  Services = "Services",
  WiFI = "WiFi"
}

export const FilterInput: React.FC<FilterInputProps> = (props: FilterInputProps) => {
  return (
    <div className={styles.formGroup}>
      <label className={props.styleLabel}>
        <span className={styles.span}>
          {props.name}
        </span>
        <span className={styles.span}>
          {props.text}
        </span>
        <input
          type={props.type}
          className={props.stylesName}
          name={props.name}
          value={props.value}
          min={props.min}
          onChange={props.onChange}
          checked={props.checked}
          required
        />
        <span>
          {props.textCheckbox}
        </span>
      </label>
    </div>
  );
};