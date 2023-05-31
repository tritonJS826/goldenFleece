import {useEffect} from "react";
import {useSearchParams} from "react-router-dom";
import {useFilterRooms} from "src/component/filter/FilterContext";
import {FilterInput, InputType, URL_QUERY_KEYS} from "src/component/filter/FilterInput";
import {getNewDateOut} from "src/utils/getDate";
import styles from "src/component/filter/FilterInput.module.scss";

/**
 * Filter props
 */
interface FilterProps {
  /**
   * Value of query param in the url path
   */
  paramValue: number | string | string[],
  /**
   * Default value of filter's input
   */
  defaultParamValue: number | string | string[],
  /**
   * Keys for query params in the url path
   */
  urlQueryKey: URL_QUERY_KEYS,
  /**
   * Filter title
   */
  inputName: string,
  /**
   * Minimum value
   */
  min?: number | string,
  /**
   * Input type
   */
  inputType: "number" | "text" | "date" | "checkbox",
  /**
   * Input className
   */
  styles: string;
  /**
   * Text for input (type is not checkbox)
   */
  text?: string;
  /**
   * Text for checkbox
   */
  textCheckbox?: string;
  /**
   * className for label
   */
  styleLabel?: string;
  /**
   * True if checkbox checked and false if not
   */
  isChecked?: boolean;
}

export const defaultNumberValue = 0;
export const defaultStringValue = "";
export const defaultStringArrayValue = [];

export const Filter = (props: FilterProps) => {
  const [params, setParams] = useSearchParams();
  const {
    dateInValue,
    setDateInValue,
    setDateOutValue,
    setAdultsValue,
    setChildrenValue,
    serviceValues,
    setServiceValues,
  } = useFilterRooms();

  const setInputValue = () => {
    if (params.has(props.urlQueryKey)) {
      const paramValueRaw = params.get(props.urlQueryKey);
      if (props.urlQueryKey === URL_QUERY_KEYS.Adults || props.urlQueryKey === URL_QUERY_KEYS.Children) {
        const paramValueNumber: number = paramValueRaw ? JSON.parse(paramValueRaw.slice(1, -1)) : defaultNumberValue;
        switch (props.urlQueryKey) {
          case "Adults": {
            setAdultsValue(paramValueNumber);
            break;
          }
          case "Children": {
            setChildrenValue(paramValueNumber);
            break;
          }
          default: {
            break;
          }
        }
      }
      const paramValueString: string = paramValueRaw ? paramValueRaw.slice(1, -1) : defaultStringValue;
      const paramValuesArray = params.getAll(props.urlQueryKey);
      const paramValuesArrayWithoutQuotes = paramValuesArray.map((item) => {
        return item.slice(1, -1);
      });
      const paramValueStringArray: string[] = paramValuesArray ? paramValuesArrayWithoutQuotes : defaultStringArrayValue;
      switch (props.urlQueryKey) {
        case "DateIn": {
          setDateInValue(paramValueString);
          break;
        }
        case "DateOut": {
          setDateOutValue(paramValueString);
          break;
        }
        case "Services": {
          setServiceValues(paramValueStringArray);
          break;
        }
        default: {
          break;
        }
      }
    }
  };

  useEffect(() => {
    setInputValue();
  }, []);

  const actualDateOut = getNewDateOut(dateInValue);

  useEffect(() => {
    setDateOutValue(actualDateOut);
  }, [dateInValue]);

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const queryName = event.target.name;
    const queryValue = `"${event.target.value}"`;
    const isValueExist = params.get(queryName) ? true : false;
    const servicesArray = params.getAll(URL_QUERY_KEYS.Services);

    if (isValueExist) {
      if (queryName === URL_QUERY_KEYS.Services && servicesArray.includes(queryValue)) {
        const paramValueStringified = JSON.stringify(queryValue);
        const defaultParamValueStringified = JSON.stringify("");
        const isValuesExist = paramValueStringified !== defaultParamValueStringified;

        const allParams = [...params];
        const paramsWithoutCurrentParam = allParams
          .filter(param => param[1] !== queryValue);

        if (isValuesExist) {
          setParams(paramsWithoutCurrentParam);
        } else {
          setParams([...paramsWithoutCurrentParam, [queryName, paramValueStringified]]);
        }
      } else if (params.has(URL_QUERY_KEYS.Services) && queryName === URL_QUERY_KEYS.Services) {
        setParams([...params, [queryName, queryValue]]);
      } else if (params.get(queryName)) {
        params.delete(queryName);
        setParams([...params, [queryName, queryValue]]);
      } else if (params.get(queryName) === queryValue) {
        params.delete(queryName);
        setParams(params);
      } else {
        params.delete(queryName);
        setParams([...params, [queryName, queryValue]]);
      }
    } else {
      setParams([...params, [queryName, queryValue]]);
    }

    switch (props.urlQueryKey) {
      case "DateIn": {
        setDateInValue(event.target.value);
        break;
      }
      case "DateOut": {
        setDateOutValue(event.target.value);
        break;
      }
      case "Adults": {
        setAdultsValue(Number(event.target.value));
        break;
      }
      case "Children": {
        setChildrenValue(Number(event.target.value));
        break;
      }
      case "Services": {
        setServiceValues((!serviceValues.includes(event.target.value) && event.target.checked)
          ? [...serviceValues, event.target.value]
          : serviceValues.filter(elem => elem !== event.target.value),
        );
        break;
      }
      default: {
        break;
      }
    }
  };

  return (
    <FilterInput
      type={props.inputType}
      stylesName={props.styles}
      name={props.inputName}
      value={props.paramValue}
      min={props.min}
      onChange={onChangeInput}
      text={props.text}
      textCheckbox={props.textCheckbox}
      styleLabel={props.styleLabel}
      checked={props.isChecked}
    />
  );
};