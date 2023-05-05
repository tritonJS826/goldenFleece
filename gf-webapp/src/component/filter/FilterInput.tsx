import styles from "src/component/filter/FilterInput.module.scss";

export type InputType = HTMLInputElement | HTMLTextAreaElement;

/**
 * Input props for filters
 */
interface FilterInputProps {
  /**
   * Input type
   */
  type: "text" | "number" | "date",
  /**
   * Input (filter) title
   */
  name: string,
  /**
   * Input value
   */
  value: string | number,
  /**
   * Minimum value (string for date input and number for number input)
   */
  min?: string | number,
  /**
   * Callback triggered on change input
   */
  onChange: (event: React.ChangeEvent<InputType>) => void;
}

/**
 * Keys for query params in the url path
 */
export enum URL_QUERY_KEYS {
  /**
   * Key for filter by any text
   */
  Search = "search",
  /**
   * Key for filter by date in
   */
  DateIn = "dateIn",
  /**
   * Key for filter by date out
   */
  DateOut = "dateOut",
  /**
   * Key for filter by adults amount
   */
  Adults = "adults",
  /**
   * Key for filter by children amount
   */
  Children = "children",
}

export const FilterInput: React.FC<FilterInputProps> = (props: FilterInputProps) => {
  return (
    <div className={styles.formGroup}>
      <label className={styles.label}>
        {props.name}
        <input
          type={props.type}
          className={styles.input}
          name={props.name}
          value={props.value}
          min={props.min}
          onChange={props.onChange}
          required
        />
      </label>
    </div>
  );
};