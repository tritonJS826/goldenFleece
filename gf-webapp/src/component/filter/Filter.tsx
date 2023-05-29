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
  styles: string;
  text?: string;
  textCheckbox?: string;
  styleLabel?: string;
  isChecked?: boolean;
}

export const defaultNumberValue = 0;
export const defaultStringValue = "";
export const defaultStringArrayValue = [];

export const Filter = (props: FilterProps) => {
  const [params, setParams] = useSearchParams();
  const {
    setSearchValue,
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
      if (props.urlQueryKey === "Adults" || props.urlQueryKey === "Children") {
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
      // const paramValueNumber: number = paramValueRaw ? JSON.parse(paramValueRaw.slice(1, -1)) : defaultNumberValue;
      const paramArray = params.getAll("Services");
      const paramArr = paramArray.map((item => {
        return item.slice(1, -1);
      }));
      const paramValueString: string = paramValueRaw ? paramValueRaw.slice(1, -1) : defaultStringValue;
      const paramValueStringArray: string[] = paramArray ? paramArr : defaultStringArrayValue;
      switch (props.urlQueryKey) {
        case "DateIn": {
          setDateInValue(paramValueString);
          break;
        }
        case "DateOut": {
          setDateOutValue(paramValueString);
          break;
        }
        // case "Adults": {
        //   setAdultsValue(paramValueNumber);
        //   break;
        // }
        // case "Children": {
        //   setChildrenValue(paramValueNumber);
        //   break;
        // }
        case "Services": {
          setServiceValues(paramValueStringArray);
          break;
        }
        default: {
          setSearchValue(paramValueString);
        }
      }
    } else if (params) {
      const paramValueRaw = params.get(props.urlQueryKey);
      const paramValueString: string = paramValueRaw ? paramValueRaw.slice(1, -1) : defaultStringValue;
      // const paramArray = params

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
    console.log(queryName);
    if (isValueExist) {
      console.log(servicesArray);
      console.log(queryValue.slice(1, -1));
      if (queryName === "Services" && servicesArray.includes(queryValue)) {
        console.log(111);
        const paramValueStringified = JSON.stringify(queryValue);
        const defaultParamValueStringified = JSON.stringify("");
        const isValuesExist = paramValueStringified !== defaultParamValueStringified;

        const allParams = [...params];
        console.log(allParams);
        const paramsWithoutCurrentParam = allParams
          .filter(param => param[1] !== queryValue);

        if (isValuesExist) {
          setParams(paramsWithoutCurrentParam);
        } else {
          setParams([...paramsWithoutCurrentParam, [queryName, paramValueStringified]]);
        }
      // } else if (params.has("Services")) {
      } else if (params.has("Services") && queryName === "Services") {
        setParams([...params, [queryName, queryValue]]);
      } else if (params.get(queryName)) {
        params.delete(queryName);
        // setParams(params);
        setParams([...params, [queryName, queryValue]]);
      } else if (params.get(queryName) === queryValue) {
        params.delete(queryName);
        setParams(params);
      // } else if (params.has("Services")) {
      //   setParams([...params, [queryName, queryValue]]);
      // } else if (params.get(queryName) === queryValue) {
      //   params.delete(queryName);
      //   setParams(params);
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
        setSearchValue(event.target.value);
      }
    }
  };

  const isChecked = () => {
    if (params.has(props.urlQueryKey)) {
      return true;
    }
    return false;
  };

  // const addQueryParams = (
  //   paramValue: number | string | string[],
  //   defaultParamValue: number | string | string[],
  //   urlQueryKey: URL_QUERY_KEYS,
  // ) => {
  //   const paramValueStringified = JSON.stringify(paramValue);
  //   const defaultParamValueStringified = JSON.stringify(defaultParamValue);
  //   const isValueExist = paramValueStringified !== defaultParamValueStringified;

  //   const allParams = [...params];
  //   const paramsWithoutCurrentParam = allParams
  //     .filter(param => param[0] !== urlQueryKey);

  //   if (isValueExist) {
  //     setParams([...paramsWithoutCurrentParam, [urlQueryKey, paramValueStringified]]);
  //   } else {
  //     setParams(paramsWithoutCurrentParam);
  //   }
  // };

  // const updateQueryParams = (
  //   name: string,
  //   event: React.ChangeEvent<HTMLInputElement>,
  //   paramValue: number | string | string[],
  //   defaultParamValue: number | string | string[],
  //   urlQueryKey: URL_QUERY_KEYS) => {
  //   setParams({[name]: event.target.value});
  // };

  // useEffect(() => {
  //   // addQueryParams(props.inputName, props.paramValue, props.defaultParamValue, props.urlQueryKey);
  //   // updateQueryParams(props.inputName, props.paramValue, props.defaultParamValue, props.urlQueryKey);
  // }, [props.paramValue]);

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